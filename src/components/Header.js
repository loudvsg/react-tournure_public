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

  const chapitre = (Math.trunc(new Date().getTime()/((1000*60*60*24*7)))-2699).toString();
  

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
          }} 
          className="btnpublic"
                to="/publicpage">Chapitre : {chapitre}</NavLink>
      </NavItem>
      
            


          
        <NavItem>

        <NavLink activeStyle={{
          fontWeight: "bold",
          }} 
          className="btnpublic" to="/deposit">
            Dépôt </NavLink>
        </NavItem>  


        <NavItem>

        {!currentUser ? 
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            }} 
            className="btnpublic" to="/login">Lecteurs
          </NavLink> : 
          <NavLink 
            activeStyle={{
            fontWeight: "bold",
            }} 
            className="btnpublic" to="/privatetexts">Lecteurs
          </NavLink>
        }
        </NavItem>
     
        <NavItem>
        <NavLink activeStyle={{
          fontWeight: "bold",
                    }} 
          className="btnpublic" to="/deeppage">
            Davantage</NavLink>
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