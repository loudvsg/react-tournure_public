import React from "react"
import {ThemeLine, ThemeTitre, ThemeSousTitre} from './Elements/Info.element'
import {InfoSec, TextLine, InfoRow, } from './Elements/Info.element'
import ReactDOM from "react-dom"
import {  useRef , useState } from 'react'
import PayPal from "./PayPal";
import { TextArea, BoxButton,BigBoxLineItem, BoxContainerColumn,MobileText, BigBoxItem, NavContainer,  NavItem, NavTitle, NavMenuR} from "./Elements/Box.element";
import { AddIcon,CheckboxContainer, HiddenCheckbox,StyledSmallCheckbox, Icon } from "./Elements/Info.element";


//const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

const DeepPage = () => {

const [checkout, setCheckOut] = useState(false);
  const [numberOfPaper, setnumberOfPaper] = useState("1");

  const [checkedOne, setCheckedOne] = React.useState(true);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);
  const [merciLoad, setMerciLoad] = React.useState(false);


  const handleChangeOne = () => {
    setnumberOfPaper("1")
    if (!checkedOne){
        setCheckedOne(!checkedOne);
        setCheckedTwo(false);
        setCheckedThree(false);}
  };
 
  const handleChangeTwo = () => {
    setnumberOfPaper("2")
    if (!checkedTwo){
        setCheckedTwo(!checkedTwo);
        setCheckedOne(false);
        setCheckedThree(false);}
  };

  const handleChangeThree = () => {
    setnumberOfPaper("3")
    if (!checkedThree){
        setCheckedThree(!checkedThree);
        setCheckedOne(false);
        setCheckedTwo(false);}
  };

  return (
    <div>

    <ThemeTitre lightBg="false">{"Commandez notre journal bimensuel"}</ThemeTitre>
    <ThemeSousTitre lightBg="false">{"La version papier "}</ThemeSousTitre>


<BoxContainerColumn>

    <BigBoxLineItem>
    <MobileText>Le journal à venir : 5 euros</MobileText>

    <CheckboxContainer>
    <HiddenCheckbox checked={checkedOne} />
    <StyledSmallCheckbox checked={checkedOne} onClick={handleChangeOne}>
    
    <Icon viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </Icon>
    </StyledSmallCheckbox>
  </CheckboxContainer>

  </BigBoxLineItem>

  
  <BigBoxLineItem>
    <MobileText>Les 5 prochains journaux : 21 euros</MobileText>

    <CheckboxContainer>
    <HiddenCheckbox checked={checkedTwo} />
    <StyledSmallCheckbox checked={checkedTwo} onClick={handleChangeTwo}>
    
      <Icon viewBox="0 0 24 24">
          

          
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledSmallCheckbox>
  </CheckboxContainer>



    
  </BigBoxLineItem>

  
  <BigBoxLineItem>
    <MobileText>Les 10 prochains journaux : 36 euros</MobileText>

    <CheckboxContainer>
    <HiddenCheckbox checked={checkedThree} />
    <StyledSmallCheckbox checked={checkedThree} onClick={handleChangeThree}>
    
      <Icon viewBox="0 0 24 24">
          
        <polyline points="20 6 9 17 4 12" />
        {"coucou"}
      </Icon>
    </StyledSmallCheckbox>
  </CheckboxContainer>



    
  </BigBoxLineItem>

  </BoxContainerColumn>

<div className="justified">
    {checkout ? (
        <PayPal number={numberOfPaper} />
      ) : (
        <button className="btnpublic"
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Commander
        </button>
      )}

      </div>


    <InfoSec lightBg={false}>
    <InfoRow >


    <TextLine lightBg={false}>

          {"Un journal hebdomadaire avec les textes séléctionnés sera disponible très bientôt."}

      </TextLine>

      </InfoRow>

    </InfoSec>


    <ThemeLine>{"Faisons grandir notre patrimoine littéraire "}</ThemeLine>


    <InfoSec lightBg={false}>
    <InfoRow >


    <TextLine lightBg={false}>

          {"Si vous avez des projets qui pourraient nous concerner, écrivez à latournure@gmail.com"}

      </TextLine>

      </InfoRow>

    </InfoSec>

  </div>
  )
}

export default DeepPage