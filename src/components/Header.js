import PropTypes from 'prop-types'
import Button from './Button'
import { NavLink } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import {MobileIcon, TitleMenu, NavTitle, Nav, NavItem, NavContainer, NavMenuR, StyledHeader} from "./Elements/Header.element"
import { FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';
import { IconContext } from 'react-icons/lib';

const Header = ({ history, title, onShowPublicTexts, onShowCriticSpace,onMoreDeep }) => {
const { currentUser } = useAuth()

const [click, setClick]=useState(false);
const handleClick = () => setClick(!click);

  return (
    <Nav>
      <NavContainer>      
      <IconContext.Provider value={{color: '#ffd'}}>
      <TitleMenu>
      <NavTitle >
      <NavLink  activeStyle={{
          fontWeight: "bold",
          color: "white",
          }} 
          className="voidbtn"
         to="/">{title}</NavLink></NavTitle>
         </TitleMenu>

      <NavMenuR onClick={handleClick} click={click}>
        


      <NavItem>
      <NavLink activeStyle={{
          fontWeight: "bold",
          color: "yellow"
          }} 
          className="btnpublic"
         to="/publicpage">Chapitre 0 </NavLink>
      </NavItem>
      
      <NavItem>
        {!currentUser ? 
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "yellow"
            }} 
            className="btnpublic" to="/login">Page pour lecteurs
          </NavLink> : 
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            color: "yellow"
            }} 
            className="btnpublic" to="/privatetexts">Page Privée
          </NavLink>
        }
        </NavItem>
     
          
        <NavItem>

        <NavLink activeStyle={{
          fontWeight: "bold",
          color: "yellow"
          }} 
          className="btnpublic" to="/deposit">
            Déposer son Texte</NavLink>
        </NavItem>    
      </NavMenuR>

      
        <MobileIcon onClick={handleClick} >
          {click ? <FaTimes/> : <FaBars/>}
        </MobileIcon>
      </IconContext.Provider>

      </NavContainer>

      </Nav>
  )
}

Header.defaultProps = {
  title: 'Journal Littéraire',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header