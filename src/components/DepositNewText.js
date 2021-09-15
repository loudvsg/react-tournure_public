import React, { useState } from "react";
import "../App.css";
import { db } from "../firebase";
import { ThemeLine, ThemeLineLow,DivAvecTresPetitPadding,ThemeTitre } from "./Elements/Info.element";
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


if(!name){
  alert("Veuillez ajouter votre nom");
  return
}
if(!email){
  alert("Veuillez ajouter votre adresse email");
  return
}
if(!title){
  alert("Veuillez ajouter votre titre");
  return
}

if(!texte){
  alert("Veuillez ajouter votre texte");
  return
}


console.log("email", !email)

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
                alert("Votre texte nous a été transféré ! ");
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
      <ThemeTitre lightBg={true}>Dépose ton texte ici </ThemeTitre>


    <DivAvecTresPetitPadding>
      <ThemeTitre lightBg={true}>Nom</ThemeTitre>
    </DivAvecTresPetitPadding>
      
      <div class="justified">
      <InputArea
        placeholder="Ton nom d'artiste"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      </div>


    <DivAvecTresPetitPadding>
      <ThemeTitre lightBg={true}>Email</ThemeTitre>
    </DivAvecTresPetitPadding>
      

      <div class="justified">

      <InputArea
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>


    <DivAvecTresPetitPadding>
      <ThemeTitre lightBg={true}>Titre</ThemeTitre>
    </DivAvecTresPetitPadding>
      

      <div class="justified">

      <InputArea
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>


    <DivAvecTresPetitPadding>
      <ThemeTitre lightBg={true}>Texte</ThemeTitre>
    </DivAvecTresPetitPadding>
      

      <div class="justified">

      <TextArea
      rows="8" cols="70" maxLength="100000"
        placeholder="100 000 caractères maximum"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
      ></TextArea>
      </div>


      <ThemeLineLow>Un texte par semaine maximum</ThemeLineLow>


      <div class="justified">

      <button
      className="btnpublic"
      type="submit"

      >

      Envoyer


      </button>

      </div>



    </form>
  );
};

export default DepositNewText;