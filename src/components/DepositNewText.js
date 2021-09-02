import React, { useState, useEffect } from "react";
import "../App.css";
import { db } from "../firebase";
import Button from "./Button";
import { ThemeLine, Label,Input } from "./Elements/Info.element";

const DepositNewText = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [texte, setTexte] = useState("");
  const [loader, setLoader] = useState(false);

  const chapitre = (Math.trunc(new Date().getTime()/((1000*60*60*24*7)))-2697).toString();
  const refMillisec = (new Date().getTime().toString());
  console.log(chapitre);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Chapitre"+chapitre)
      .add({
        name: name,
        email: email,
        texte: texte,
        chapitre: chapitre,
        reference: refMillisec,
      })
      .then(() => {



              db.collection("References"+chapitre)
              .add({
                negativeCount:0,
                neutralCount: 0,
                positiveCount:0,
                totalCount:0,
                chapitre: chapitre,
                reference: refMillisec,
              })
              .then(() => {
        
                setLoader(false);
                alert("Your message has been submitted👍");
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


      setName("");
      setEmail("");
      setTexte("");

  };



  

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ThemeLine>Dépose ton texte ici </ThemeLine>

      <Label>Nom</Label>
      
      <Input
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Label>Email</Label>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Label>Texte</Label>
      <textarea
        placeholder="Texte"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
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

export default DepositNewText;