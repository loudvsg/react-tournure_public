import React, { useState, useEffect } from "react";
import "../App.css";
import { db, increment } from "../firebase";
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

  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(true);
  const [checkedThree, setCheckedThree] = React.useState(false);
  const [merciLoad, setMerciLoad] = React.useState(false);

  const handleChangeOne = () => {
    if (!checkedOne){
        setCheckedOne(!checkedOne);
        setCheckedTwo(false);
        setCheckedThree(false);}
  };
 
  const handleChangeTwo = () => {
    if (!checkedTwo){
        setCheckedTwo(!checkedTwo);
        setCheckedOne(false);
        setCheckedThree(false);}
  };

  const handleChangeThree = () => {
    if (!checkedThree){
        setCheckedThree(!checkedThree);
        setCheckedOne(false);
        setCheckedTwo(false);}
  };
 

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
                console.log(showTextWindow)

                console.log(showTextWindow)
                //return () => showTextWindow
                //window.location.reload(true);
                setMerciLoad(true)

                
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

/*
      <Checkbox
        label="Value 1"
        checked={checkedOne}
        onChange={handleChangeOne}
      />
      <Checkbox
        label="Value 2"
        checked={checkedTwo}
        onChange={handleChangeTwo}
      />
      <Checkbox
        label="Value 3"
        checked={checkedThree}
        onChange={handleChangeThree}
      />
      */

  

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



            <BoxButton
      className="btnpublic"
        type="submit"

        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
          
        Envoyer

        
      </BoxButton>

      </div>

   
      
    </form>}

    {merciLoad && 

    <>
    
    <ThemeLine>Merci pour ta contribution :)  </ThemeLine>

    <div class="justified">

            <BoxButton
      className="btnpublic"
      
        onClick={() => window.location.reload(true)
        }

        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
          
        Recharger la page 
      </BoxButton>

      </div>

    </>
    
    
    }

</div>

    

    
  );
};

export default PutComment;