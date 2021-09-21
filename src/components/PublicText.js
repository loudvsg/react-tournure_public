import { NavLink } from "react-router-dom"
import {InfoSec,WidthDiv, TextLine, TextColumn, AddIcon, InfoColumn, TopLine, SubLine, InfoRow, TextWrapper} from './Elements/Info.element'
import { FaBars, FaTimes, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useState, useRef ,useEffect} from 'react';
import { IconContext } from 'react-icons/lib';
import { NavIcon } from './Elements/Header.element'
import Footer from './Footer'
import FullText from "./FullText";
import {TextAreaNewText} from './Elements/Box.element'

const PublicText = ({ text, onClick }) => {

  const [click, setClick]=useState(false);
  
  const handleClick = () => {
    
    setClick(!click);

  }

  let textJoined = []
  let textJoinedSliced = null
  
  
  if (typeof text.text === 'string') {
    textJoined = text.text
  textJoinedSliced = textJoined.slice(0,500)

  } else {
    let numberOfLetters = 0;
    for (let i = 0; i < text.text.length; i++) {
      textJoined.push(<div>{text.text[i]}<br /></div>);
      if (i < 3) {
        numberOfLetters += text.text[i].length
      }
    }
    if (numberOfLetters < 500) {
  textJoinedSliced = textJoined.slice(0,10)
    } else {
  textJoinedSliced = textJoined.slice(0,3)
    }
  }
  


 /* useEffect(() => {
    if (!click) {
      console.log("a", ta.current)
      console.log("height", ta.current.height)
      height = ta.current.scrollHeight + 'px';
      ta.current.style.height = height;
    } else {
      console.log("a", ta2.current)
      console.log("height", ta2.current.height)
      //height2 = ta.current.scrollHeight + 'px';
      //ta2.current.style.height = height2;
    }
  });
  */
  
  //              {!click && typeof text.text === 'string' ? <TextAreaNewText ref={ta} lightBg={true} disabled>{textToRead}</TextAreaNewText > : <TextAreaNewText ref={ta} lightBg={true} disabled>{textToRead}</TextAreaNewText > }
    //               <TextAreaNewText style={{ display: displayy }} lightBg={true} disabled>{textToRead}</TextAreaNewText >
 
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
              <div className="justified">
                <TextColumn lightBg={text.lightBg} >
                  {click ? textJoined : textJoinedSliced}
                </TextColumn >
              </div>
            
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