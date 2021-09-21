import {InfoSec,WidthDiv, TextLine, AddIcon, InfoColumn, TopLine, SubLine, InfoRow, TextWrapper} from './Elements/Info.element'
import {  FaChevronDown } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useState, useRef, useEffect } from 'react';
import PutComment from './PutComment';
import {TextArea, TextAreaNewText} from './Elements/Box.element'




const PrivateText = ({ text, currentUser , showTextWindow}) => {


  
  const [click, setClick]=useState(false);
  const handleClick = () => {
    setClick(!click);
  }

  console.log("text", text.text.join("\\n"))
  //var textJoined = text.text.join('\r\n')
  

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
  

  /*
  const ta = useRef(null);
  var height = "auto";
  var width = "auto";

  useEffect(() => {
    height = ta.current.scrollHeight + 'px';
    ta.current.style.height = height;
  });
  */
  
  /* useEffect(() => {
    width = ta.current.scrollWidth + 'px';
    ta.current.style.width = width;
  }, [height]);
*/
  
  /*
  <div className="justified">
                  <TextAreaNewText ref={ta} lightBg={true} disabled>{text.text.join("\n")}</TextAreaNewText >
                </div>
  */
  
    return (
      <div>
        

        <IconContext.Provider value={false ? {color: '#ffd'} :{color: '#000000'} }>
      
      <InfoSec lightBg={true}>

        <InfoRow  click={click}>

        <div>
        <TopLine lightBg={true}>
          {text.title}
          </TopLine>
          
                <br />
              <div className="justified">
                <div>
                  {click ? textJoined : textJoinedSliced}
                </div>
              </div>
                
          <SubLine lightBg={true}>{text.name}</SubLine>
          
          </div>

          <AddIcon onClick={handleClick} click={click}>
          {!click ? <FaChevronDown/> :  <></>}




        </AddIcon>

        {click ? <PutComment showTextWindow={showTextWindow} currentUser={currentUser} reference={text.reference}>


        </PutComment> :  <></>}


          
        </InfoRow>
          
      </InfoSec>
      </IconContext.Provider>

      </div>
    )
  }
  
  export default PrivateText