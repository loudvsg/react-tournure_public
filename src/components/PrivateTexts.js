import PrivateText from "./PrivateText"
import React, { useState } from "react"
import { Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase";
import {  useEffect } from 'react'
import { ThemeLine, ButtonLogOut } from "./Elements/Info.element"

const PrivateTexts = ({ texts }) => {
  
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
      } catch {
        setError("Failed to log out")
      }
    }
    
    const chapitre = (Math.trunc(new Date().getTime()/((1000*60*60*24*7)))-2698).toString();

      const [noMoreText, setNoMoreText] = useState(false)
      const [thereIsAText, setThereIsAText] = useState(false)
      const [loadingText, setLoadingText] = useState(true)
      const [theTextToComment, setTheTextToComment] = useState("")
      
  
  
      useEffect(() => {
        retrieveTexts();
      }, [])

   const retrieveTexts = async () => {
     
     let textReference =[]
     let textText =[]
     let textName =[]
     let textTitle =[]
     let textCount =[]

     const promise1 = new Promise((resolve, reject) => {

     let userRefPromise = ( db.collection('Users').doc(currentUser.email).collection('References').get())
      resolve(userRefPromise);
       
     });

     promise1.then((value) => {
       if (value.docs.length > 0){

       let arrayValue=[]

       for (let pas = 0; pas < value.docs.length; pas++) {
            arrayValue.push(value.docs[pas].data().reference)
        }

       return (db.collection('Chapitre' + chapitre).where("reference", 'not-in', arrayValue).get());
       }
       else{
         return (db.collection('Chapitre' + chapitre).get())
         }
       
     }).then((value) => {

       if (value.docs.length > 0){
     
      for (let pas = 0; pas < value.docs.length; pas++) {

            textReference.push(value.docs[pas].data().reference)
            textText.push(value.docs[pas].data().text)
            textName.push(value.docs[pas].data().name)
            textTitle.push(value.docs[pas].data().title)
            textCount.push(value.docs[pas].data().totalCount)


        }

      var minimum = Math.min.apply(Math, textCount)
      var indexMinimum = textCount.indexOf(minimum)
      var theReference = textReference[indexMinimum]

      return db.collection('Chapitre' + chapitre).where('reference', '==', theReference).get();
    }

    else{
      setNoMoreText(true)
      setLoadingText(false)
    }
    
     }).then((value) => {
       
      setTheTextToComment(value.docs[0].data())

      if (value) {
        setThereIsAText(true) 
        setLoadingText(false)
      }
      else{ 
        setNoMoreText(true) 
        setLoadingText(false)}
     }).catch(error => console.log(error.message));
    }
     
    return (
        <>       

        
        {thereIsAText && <PrivateText key={theTextToComment.reference} currentUser={currentUser} text={theTextToComment}>
        </PrivateText>}

        {noMoreText && <div className="justified"> <ThemeLine lightBg={true}>no more no more</ThemeLine> </div>}

        {loadingText && <div className="justified"> <ThemeLine lightBg={true}>En attente d'un texte</ThemeLine> </div>}
                
        <div className="w-100 text-center mt-2">

            <Card>
              <Card.Body className="justified">
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Vous vous êtes connectés avec l'adresse mail suivante : {currentUser.email}</strong>
              </Card.Body>
            </Card>
          

 
      <div className="justified">


        <ButtonLogOut variant="link" onClick={handleLogout}>
            Se déconnecter
          </ButtonLogOut>
      </div>
          
        </div>
      </>
    
  )
}

export default PrivateTexts