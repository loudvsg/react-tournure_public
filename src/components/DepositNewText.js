import React, { useState } from "react";
import "../App.css";
import { db } from "../firebase";
import { ThemeLine, ThemeLineLow } from "./Elements/Info.element";
import { InputArea, TextArea, BoxButton} from "./Elements/Box.element";


const DepositNewText = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [texte, setTexte] = useState("");
  const [loader, setLoader] = useState(false);

  const chapitre = (Math.trunc(new Date().getTime()/((1000*60*60*24*7)))-2697).toString();
  const refMillisec = (new Date().getTime().toString());

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Chapitre"+chapitre).doc(refMillisec)
      .set({
        name: name,
        title: title,
        email: email,
        text: texte,
        chapitre: chapitre,
        reference: refMillisec,
        negativeCount:0,
        neutralCount: 0,
        positiveCount:0,
        totalCount:0,
      })
      
              .then(() => {
        
                setLoader(false);
                alert("Your message has been submitted👍");
              })
        
              



      
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });


      setName("");
      setEmail("");
      setTexte("");
      setTitle("");

  };



  

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ThemeLine>Dépose ton texte ici </ThemeLine>

    <ThemeLine>Nom </ThemeLine>
      
      <div class="justified">
      <InputArea
        placeholder="Ton nom d'artiste"
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

    <ThemeLine>Titre </ThemeLine>


      <div class="justified">

      <InputArea
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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