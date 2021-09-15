import {InfoSec,WidthDiv, TextLine, AddIcon, InfoColumn, TopLine, SubLine, InfoRow, TextWrapper} from './Elements/Info.element'
import {  FaChevronDown } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useState } from 'react';
import PutComment from './PutComment';




const PrivateText = ({ text, currentUser , showTextWindow}) => {


  
  const [click, setClick]=useState(false);
  const handleClick = () => setClick(!click);



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
                <TextLine lightBg={true}>

                  {!click ? text.text.slice(0,1000) + '...' : text.text}
          
            
                </TextLine>
            
          <br/>
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