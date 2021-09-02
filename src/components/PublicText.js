import { NavLink } from "react-router-dom"
import {InfoSec,WidthDiv, TextLine, AddIcon, InfoColumn, TopLine, SubLine, InfoRow, TextWrapper} from './Elements/Info.element'
import { FaBars, FaTimes, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { NavIcon } from './Elements/Header.element'
import Footer from './Footer'
import FullText from "./FullText";

const PublicText = ({ text, onClick }) => {

  const [click, setClick]=useState(false);
  const handleClick = () => setClick(!click);
  
  console.log(click);

  return (
    <div>
      <IconContext.Provider value={!text.lightBg ? {color: '#ffd'} :{color: '#000000'} }>
      
      <InfoSec lightBg={text.lightBg}>

        <InfoRow  click={click}>

        <div>
        <TopLine lightBg={text.lightBg}>
          {text.title}
          </TopLine>
          
          <br/>
          <TextLine lightBg={text.lightBg}>

          {!click ? text.text.slice(0, 1000)+'...' : text.text }
            
          </TextLine>
            
          <br/>
          <SubLine lightBg={text.lightBg}>{text.name}</SubLine>
          
          </div>

          <AddIcon onClick={onClick, handleClick} click={click}>
          {!click ? <FaChevronDown/> :  <></>}


        </AddIcon>


          
        </InfoRow>
          
      </InfoSec>
      </IconContext.Provider>

    </div>
  )
}

export default PublicText