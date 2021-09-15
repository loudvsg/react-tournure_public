import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import { db, increment, incrementNull } from "../firebase";
import Button from "./Button";
import { ThemeLine, Label,Input } from "./Elements/Info.element";
import { TextArea, BoxButton, BoxContainer,MobileText, BigBoxItem, NavContainer,  NavItem, NavTitle, NavMenuR} from "./Elements/Box.element";
import { AddIcon,CheckboxContainer, HiddenCheckbox,StyledCheckbox, Icon } from "./Elements/Info.element";
import {FaRegDotCircle} from 'react-icons/fa'; 
import { NavLink } from "react-router-dom";


const PutComment = ({reference, currentUser, showTextWindow}) => {    

  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [typeCount, setTypeCount] = useState("");


  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(true);
  const [checkedThree, setCheckedThree] = React.useState(false);
  const [merciLoad, setMerciLoad] = React.useState(false);

  const handleChangeOne = () => {
    setTypeCount("negative")
    if (!checkedOne){
        setCheckedOne(!checkedOne);
        setCheckedTwo(false);
        setCheckedThree(false);}
  };
 
  const handleChangeTwo = () => {
    setTypeCount("neutral")
    if (!checkedTwo){
        setCheckedTwo(!checkedTwo);
        setCheckedOne(false);
        setCheckedThree(false);}
  };

  const handleChangeThree = () => {
    setTypeCount("positive")
    if (!checkedThree){
        setCheckedThree(!checkedThree);
        setCheckedOne(false);
        setCheckedTwo(false);}
  };

  const incrementPositive = () => {
    if (checkedThree) {
      return increment
    }
    else{return incrementNull}
  }

  const incrementNegative = () => {
    if (checkedOne) {

      return increment
    }
    else{return incrementNull}
  }

  const incrementNeutral = () => {
    if (checkedTwo) {
      return increment
    }
    else{return incrementNull}
  }
 

  const chapitre = (Math.trunc(new Date().getTime()/((1000*60*60*24*7)))-2698).toString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (true){
        
    db.collection("Chapitre"+chapitre).doc(reference)
      .update({
        totalCount: increment,
        positiveCount: incrementPositive(),
        negativeCount : incrementNegative(),
        neutralCount: incrementNeutral(),
      })
      .then(() => {       

              db.collection("Users").doc(currentUser.email).collection("References").doc(reference)
              .set({
                reference:reference,
                count: typeCount,
                comment: comment,
              })
              .then(() => {
        
                setLoader(false);
                alert("Ton avis nous a été transmis, merci pour ta contribution ! ");
                window.location.reload(true)
                //window.location.replace("http://localhost:3000/privatetexts");                
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

<div>

{!merciLoad && <form className="form" onSubmit={handleSubmit}>
    <ThemeLine>Effectue ton choix </ThemeLine>



<BoxContainer>

    <BigBoxItem>
    <MobileText>Texte médiocre</MobileText>

    <CheckboxContainer>
    <HiddenCheckbox checked={checkedOne} />
    <StyledCheckbox checked={checkedOne} onClick={handleChangeOne}>
    
    <Icon viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </Icon>
    </StyledCheckbox>
  </CheckboxContainer>

  </BigBoxItem>

  
  <BigBoxItem>
    <MobileText>Beau texte</MobileText>

    <CheckboxContainer>
    <HiddenCheckbox checked={checkedTwo} />
    <StyledCheckbox checked={checkedTwo} onClick={handleChangeTwo}>
    
      <Icon viewBox="0 0 24 24">
          

          
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>



    
  </BigBoxItem>

  
  <BigBoxItem>
    <MobileText>Texte magnifique</MobileText>

    <CheckboxContainer>
    <HiddenCheckbox checked={checkedThree} />
    <StyledCheckbox checked={checkedThree} onClick={handleChangeThree}>
    
      <Icon viewBox="0 0 24 24">
          
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>



    
  </BigBoxItem>

  </BoxContainer>

  <ThemeLine>Tu peux également laisser un commentaire </ThemeLine>

<div class="justified">
<TextArea
    rows="8" cols="70" maxLength="5000"
      placeholder="Commentaire Faculatif"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    ></TextArea>





</div>

    
    <div class="justified">
    



          <button
    className="btnpublic"
      type="submit"

    >
        
      Envoyer
      

      
    </button>

    </div>

  
    
  </form>}

  {merciLoad && 

  <>
  
  <ThemeLine>Merci pour ta contribution :)  </ThemeLine>
  </>
  
  }

</div>

  );
};


PutComment.defaultProps = {
  value: '',
}

export default PutComment;
