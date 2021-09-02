import styled from "styled-components";

export const InfoSec = styled.div`
line-height: 3;
color: #413553;
padding : 160px 0;
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
`

export const InfoRow = styled.div`
display=flex;
margin: 0 100px 0 100px;
flew-wrap: wrap;
align-items: center;
transition: all 0.5s ease;


@media screen  and (max-width : 768px){
    margin: 0 50px 0px 50px;
    transition: all 0.5s ease;

}

`


export const Label = styled.label`

color: #011;
padding-top : 40px ;
padding-bottom : 20px ;
text-align: center;
justify-content: center;
float: center;
display: flex;


`


export const Input = styled.input`

color: #011;
padding-top : 20px ;
padding-bottom : 40px ;
text-align: center;
justify-content: center;
float: center;
display: flex;
align-items: center;

`
export const ButtonLogOut = styled.button`

text-align: center;
justify-content: center;
float: center;
display: flex;
align-items: center;
display: inline-block;
background: #125;
color: #fff;
border: none;
padding: 10px 20px;
margin: 5px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
font-size: 15px;
font-family: inherit;

`


export const FullTextPage = styled.div`
padding : 100px;
background: #000;
color: #fff;
padding-top:1rem;
display: flex;
flex-direction: column;
width: 100%;
height: 90vh    ;
position: absolute;
opacity: 1;
transition: all 0.5s ease;
`

export const InfoColumn = styled.div`
margin-bottom : 15px;
padding-left: 15px 
padding-right: 15px ;
max-width:50%;
flex-basis: 50%;
flex:1;

@media screen  and (max-width : 768px){
    display: flex;
    justify-content: center;
    max-width:100%;
    flex-basis: 50%;

}

`

export const TextWrapper = styled.div`
margin-bottom : 60px;
padding-top: 0; 
max-width: 540px;

@media screen  and (max-width : 768px){
    margin-bottom : 65px;

}
`


export const TopLine = styled.h2`
color: ${({lightBg}) => (!lightBg ? '#fff' : '#011')};
margin:20px;
margin-left: 40px;

`



export const AddIcon = styled.div`
display: flex;
position: relative;
cursor: pointer;
font-size: 40px;
justify-content: center;
align-items: center;
width: 100%;

float: center;
`




export const ThemeLine = styled.h1`
color: #011;
padding-top : 160px ;
padding-bottom : 60px ;
text-align: center;
justify-content: center;
float: center;
display: flex;

`


export const TextLine = styled.div`
color: ${({lightBg}) => (!lightBg ? '#BECAAC' : '#012110')};
`

export const SubLine = styled.p`
color: ${({lightBg}) => (!lightBg ? '#fff' : '#413553')};
margin-right: 40px;
display: flex;
float: right;
margin:50px;
padding-right:50px;
`