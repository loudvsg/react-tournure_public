import PrivateText from "./PrivateText"
import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { NavLink } from "react-router-dom"
import { db } from "../firebase";
import {  useEffect } from 'react'
import { Component } from 'react';

class PrivateTexts extends Component {
  

  state = {
    error: "",
    currentUser: null, 
    logout: null,
    chapitre: "",
    references: [],
    totalCount: [],
    dataText: [],
  }

constructor(){
  super();
  this.chapitre = (Math.trunc(new Date().getTime()/((1000*60*60*24*7)))-2698).toString();
  this.fetchBlogs();
  this.currentUser = useAuth();
}

    async handleLogout() {
      setError("")
  
      try {
        await logout()
      } catch {
        setError("Failed to log out")
      }
    }
    

//semaine -1 par rapport a celle actuelle mais +1 par rapport a la semaine d affichage
    //call data from firebase
      
      fetchBlogs=async()=>{
        try{
        const response=db.collection('References'+chapitre);
        const data=await response.get();
        console.log(data);
        references = (data.docs.map(item=>{
          return item.data().reference})
         )
         console.log("references", references)
         totalCount = (data.docs.map(item=>{
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
      }catch(e){console.log("paoa", e)}
    }
        
    
      
      

render(){





    return (
        <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
          </Card.Body>
        </Card>
        <>
        <PrivateText  text={dataText}>
            </PrivateText>
        </>
        <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
          
        </div>
      </>
    
  )
    }
}

export default PrivateTexts;