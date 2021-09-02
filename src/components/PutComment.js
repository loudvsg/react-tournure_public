import React, { useState, useEffect } from "react";
import "../App.css";
import { db, increment } from "../firebase";
import Button from "./Button";
import { ThemeLine, Label,Input } from "./Elements/Info.element";

const PutComment = ({reference, currentUser}) => {    

  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const chapitre = (Math.trunc(new Date().getTime()/((1000*60*60*24*7)))-2698).toString();



  console.log("user comment", currentUser)
  console.log("usermail comment", currentUser.email)


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    console.log("enter the submitting part")
    if (true){
        
    db.collection("References"+chapitre).doc(reference)
      .update({
        totalCount: increment,
      })
      .then(() => {



              db.collection("Users").doc(currentUser.email).collection("References").doc(reference)
              .set({
                reference:reference,
                count: "positive",
                comment: "default comment"
              })
              .then(() => {
        
                setLoader(false);
                alert("Your comment has been submitted👍");
              })
              .catch((error) => {
                alert(error.message);
                setLoader(false);
              });
        
              



      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });


      setComment("");
    } 

  };



  

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ThemeLine>Effectue ton choix ici </ThemeLine>

      <Label>Commentaire</Label>
      <textarea
        placeholder="Commentaire Faculatif"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <Button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default PutComment;