import styled from 'styled-components';
import {FaMagento} from 'react-icons/fa'
import { Container } from '../../globalStyles'

export const StyledHeader = styled.div`
background: #5711f4;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 50px;
`

export const Nav = styled.nav`
background: #000;
height: 100px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 1.2rem;
position: sticky;
top:0;
z-index: 999;`

export const NavContainer = styled(Container)`
height: 100px;
width: 100%;
display: flex;
align-items: center;

justify-content: space-between;
${Container}
`

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`

export const NavTitle = styled.h1`
    jusify-self: flex-start;
    display: flex;
    align-items: center;
    left: left();
    color:#ffd;
    cursor: pointer;
    text-decoration: none;
  border: none;


`

export const MobileIcon = styled.div`
display: none;


@media screen  and (max-width : 960px){
    display: flex;
    position: relative;
    justify-content: center;
    top:0;
    right:0;
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const TitleMenu = styled.ul`

display: flex;
align-items: center;
list-style: none;
text-align: center;


`


export const NavMenuR = styled.ul`

display: flex;
align-items: center;
list-style: none;
text-align: center;


@media screen  and (max-width : 960px){
    padding-top:1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top:100px;
    left: ${({click}) => (click ? '0px' :'-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
}
`

export const NavItem = styled.li`

display: flex;
align-items: center;

@media screen  and (max-width : 960px){
    width: 100%;
    text-align: center;
    display:table;
    padding: 1rem;
}
`




