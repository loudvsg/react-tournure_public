import React, { useState, useEffect } from "react";
import "../App.css";
import { db } from "../firebase";
import Button from "./Button";
import { ThemeLine, ThemeLineLow, Label,Input } from "./Elements/Info.element";
import { InputArea, TextArea, BoxButton, BoxContainer,MobileText, BigBoxItem, NavContainer,  NavItem, NavTitle, NavMenuR} from "./Elements/Box.element";


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

    <ThemeLine>Nom </ThemeLine>
      
      <div class="justified">
      <InputArea
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      </div>



    <ThemeLine>Email </ThemeLine>


      <div class="justified">

      <InputArea
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>


    <ThemeLine>Texte </ThemeLine>


      <div class="justified">

      <TextArea
      rows="8" cols="70" maxLength="50000"

        placeholder="50 000 caractères maximum"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
      ></TextArea>
      </div>


      <ThemeLineLow>Un texte par semaine maximum</ThemeLineLow>


      <div class="justified">

      <BoxButton
      className="btnpublic"
      type="submit"

      style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >

      Envoyer


      </BoxButton>

      </div>



    </form>
  );
};

export default DepositNewText;