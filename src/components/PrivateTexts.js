import PrivateText from "./PrivateText"
import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { NavLink } from "react-router-dom"
import { db } from "../firebase";
import {  useEffect } from 'react'
import { ButtonLogOut } from "./Elements/Info.element"
import {BoxButton} from './Elements/Box.element'

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
    

//semaine -1 par rapport a celle actuelle mais +1 par rapport a la semaine d affichage
    const chapitre = (Math.trunc(new Date().getTime()/((1000*60*60*24*7)))-2698).toString();
    console.log("chapitre", chapitre)
    //call data from firebase
      const [references,setReferences]=useState([])
      const [userReferences,setUserReferences]=useState([])
      const [totalCount,setTotalCount]=useState([])
      const [dataText,setDataText]=useState([])
      const [loadText,setLoadText]=useState(false)
      const [hideLoadButton,setHideLoadButton]=useState(false)
      const [showTextWindow,setShowTextWindow]=useState(false)
      
      const fetchBlogs=async()=>{
       try{

        console.log("currentUser", currentUser)

        const userResponse=db.collection('Users').doc(currentUser.email).collection('References');
        const userData=await userResponse.get();
        console.log("userData", userData);
        setUserReferences(userData.docs.map(item=>{
          return item.data().reference})
        )

        console.log("userRef", userReferences)
       
        if (userReferences && userReferences.length > 0) {
          console.log('testArray is not empty.');
        const response=db.collection('References'+chapitre).where("reference", "not-in", userReferences);



        const data=await response.get();
        console.log("data", data);
        setReferences(data.docs.map(item=>{
          return item.data().reference})
         )
         console.log("references", references)
         setTotalCount(data.docs.map(item=>{
          return item.data().totalCount})
         )
         console.log("totalAmount", totalCount)
         var minimum = Math.min.apply(Math, totalCount)
         console.log("min", minimum)
         var indexMinimum = totalCount.indexOf(minimum)
         var indexMinimum = 0
         console.log("indexmin", indexMinimum)
         var theReference = references[indexMinimum]
         console.log("theReference",theReference)

         const textResponse=db.collection('Chapitre'+chapitre).where('reference', '==', theReference);
        var dataForText=await textResponse.get();
        //console.log("datatext",dataForText.docs.data());
        dataForText.forEach(doc => {
          setDataText(doc.data());
        });

        console.log(dataText.title)

        
        console.log("sTW      10 test array not empty", showTextWindow)

        setShowTextWindow(true)
        console.log("sTW      11 test array not empty", showTextWindow)
          setHideLoadButton(true)
        





       }else{
          console.log('testArray is empty.');
        const response=db.collection('References'+chapitre);


        const data=await response.get();
        console.log("data", data);
        setReferences(data.docs.map(item=>{
          return item.data().reference})
         )
         console.log("references", references)
         setTotalCount(data.docs.map(item=>{
          return item.data().totalCount})
         )
         console.log("totalAmount", totalCount)
         var minimum = Math.min.apply(Math, totalCount)
         console.log("min", minimum)
         var indexMinimum = totalCount.indexOf(minimum)
         var indexMinimum = 0
         console.log("indexmin", indexMinimum)
         var theReference = references[indexMinimum]
         console.log("theReference",theReference)

         const textResponse=db.collection('Chapitre'+chapitre).where('reference', '==', theReference);
        var dataForText=await textResponse.get();
        //console.log("datatext",dataForText.docs.data());
        dataForText.forEach(doc => {
          setDataText(doc.data());
        });

        console.log("sTW      2 test array empty", showTextWindow)


        setShowTextWindow(true)
        console.log("sTW      2 test array empty", showTextWindow)
        
        
          setHideLoadButton(true)
    



       }

       console.log("text", dataText)


     }catch(e){console.log("paoa", e)}

        

       
      }
      useEffect(() => {
        fetchBlogs();

      }, [loadText])

      
      useEffect(() => {
        fetchBlogs();

      }, [showTextWindow])


      console.log("user", currentUser)
      console.log("usermail", currentUser.email)


      const handleTextWindow = () => {
        console.log("REALLLLLY, HYYYYY")
        console.log("REALLLLLY, HYYYYY     1", showTextWindow)
        setShowTextWindow(false)
        console.log("REALLLLLY, HYYYYY     2", showTextWindow)

      }
      

    return (
        <>
        


        {!hideLoadButton && 
        
        
        <div class="justified">
      <BoxButton onClick={fetchBlogs}
      className="btnpublic"
      >
        Dévoiler un nouveau texte 
      </BoxButton>
      </div>
      
      }
        
        

        {(hideLoadButton && showTextWindow) ? <PrivateText showTextWindow={() => handleTextWindow()} key={dataText.ref} currentUser={currentUser} text={dataText}>
        </PrivateText> : <></>}
        
        

        <div className="w-100 text-center mt-2">


        <Card>
          <Card.Body  class="justified">
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Vous vous êtes connectés avec l'adresse mail suivante : {currentUser.email}</strong> 
          </Card.Body>
        </Card>

 
      <div class="justified">


        <ButtonLogOut variant="link" onClick={handleLogout}>
            Se déconnecter
          </ButtonLogOut>
      </div>
          
        </div>
      </>
    
  )
}

export default PrivateTexts