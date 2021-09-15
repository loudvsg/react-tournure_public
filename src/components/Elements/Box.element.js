import styled from 'styled-components';
import {FaMagento} from 'react-icons/fa'
import { Container } from '../../globalStyles'


export const BoxContainer = styled.nav`
background: #fff;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 1.2rem;
padding: 30px;
z-index: 999;

@media screen  and (max-width : 960px){
    transition: all 0.5s ease;
}


`

export const BoxContainerColumn = styled.nav`
background: #fff;

width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 1.2rem;
padding: 30px;
z-index: 999;
flex-direction: column;


@media screen  and (max-width : 960px){
    transition: all 0.5s ease;
}


`



export const TextArea = styled.textarea`
font-size: 1.5rem;
margin-left: auto;
    margin-right: auto;
margin-top: 10px;


`

export const InputArea = styled.input`
font-size: 1.5rem;
margin-left: auto;
margin-right: auto;
margin: 10px;


`



export const BigBoxItem = styled.div`

display: flex;
align-items: center;
flex-direction: column;
margin-left: auto;
    margin-right: auto;

`

export const BigBoxLineItem = styled.div`

display: flex;
align-items: center;
flex-direction: line;
margin-left: auto;
    margin-right: auto;

`
export const BoxButton = styled.button`
margin:60px;
font-size: 1.5rem;

display: flex;
align-items: center;
flex-direction: column;

`




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
    color:#ffd
`



export const MobileText = styled.h3`

display: flex;
    

@media screen  and (max-width : 960px){
    display: none;
    
}
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

