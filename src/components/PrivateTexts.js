import PrivateText from "./PrivateText"
import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { NavLink } from "react-router-dom"
import { db } from "../firebase";
import {  useEffect } from 'react'
import { ButtonLogOut } from "./Elements/Info.element"

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
      const [totalCount,setTotalCount]=useState([])
      const [dataText,setDataText]=useState([])
      const [loadText,setLoadText]=useState(false)
      const [hideLoadButton,setHideLoadButton]=useState(false)
      
      const fetchBlogs=async()=>{
        try{
        const response=db.collection('References'+chapitre);
        const data=await response.get();
        console.log(data);
        setReferences(data.docs.map(item=>{
          return item.data().reference})
         )
         console.log("references", references)
         setTotalCount(data.docs.map(item=>{
          return item.data().totalCount})
         )
         console.log("totalAmount", totalCount)
         var minimum = Math.min.apply(Math, totalCount)
         console.log(minimum)
         var indexMinimum = totalCount.indexOf(minimum)
         console.log(indexMinimum)
         var theReference = references[indexMinimum]
         console.log("theReference",theReference)

         const textResponse=db.collection('Chapitre'+chapitre).where('reference', '==', theReference);
        var dataForText=await textResponse.get();
        //console.log("datatext",dataForText.docs.data());
        dataForText.forEach(doc => {
          setDataText(doc.data());
        });

        console.log(dataText.title)
          setHideLoadButton(true)
        
      }catch(e){console.log("paoa", e)}
        
    
      }
      useEffect(() => {
        fetchBlogs();
      }, [loadText])


      console.log("user", currentUser)
      console.log("usermail", currentUser.email)

    return (
        <>
        


        {!hideLoadButton && <button onClick={fetchBlogs}>
          Load Text
        </button>}

        {hideLoadButton && <PrivateText  currentUser={currentUser} text={dataText}>
        </PrivateText>}
        
        

        <div className="w-100 text-center mt-2">

        <Card>
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
          </Card.Body>
        </Card>

        <ButtonLogOut variant="link" onClick={handleLogout}>
            Log Out
          </ButtonLogOut>
          
        </div>
      </>
    
  )
}

export default PrivateTexts