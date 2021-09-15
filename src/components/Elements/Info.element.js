import styled from "styled-components";

export const InfoSec = styled.div`
line-height: 3;
color: #413553;
padding : 100px 0;
background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
`

export const InfoRowWithColumns = styled.div`
display=flex;
margin: 0 10px 0 10px;
flew-wrap: wrap;
align-items: center;
transition: all 0.5s ease;


@media screen  and (max-width : 768px){
    margin: 0 50px 0px 50px;
    transition: all 0.5s ease;

}

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
margin: 40px;

`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  cursor: pointer;


  `
  export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  background: ${props => props.checked ? 'green' : 'black'};
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;
  margin: 15px;

  `
  export const StyledSmallCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${props => props.checked ? 'green' : 'black'};
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;
  margin: 15px;

  `

 export  const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  cursor: pointer;

`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
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

max-width:100%;
flex-basis: 50%;
flex:1;

@media screen  and (min-width : 768px){
    display: flex;
    justify-content: center;
    max-width:100%;
    flex-basis: 50%;

}

`

export const ImageWrap  = styled.div`
display:flex;
justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
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

export const DivAvecPetitPadding = styled.div`
padding-top : 60px ;
padding-bottom : 60px ;
margin: 0 100px 0 100px;


`

export const DivAvecTresPetitPadding = styled.div`
padding-top : 30px ;
padding-bottom : 30px ;
`
export const DivAvecGrandPadding = styled.div`
padding-top : 160px ;
padding-bottom : 160px ;
margin: 0 100px 0 100px;


`
export const DivAvecMoyenPadding = styled.div`
padding-top : 110px ;
padding-bottom : 110px ;

margin: 0 100px 0 100px;

`
export const ThemeTitre = styled.h1`
color: ${({lightBg}) => (!lightBg ? '#BECAAC' : '#012110')};
padding-top : 40px ;
padding-bottom : 40px ;
text-align: center;
justify-content: center;
float: center;
display: flex;
`
export const ThemeSousTitre = styled.h3`
color: ${({lightBg}) => (!lightBg ? '#BECAAC' : '#012110')};
text-align: center;
justify-content: center;
float: center;
display: flex;
`
export const ThemeLineLow = styled.h3`
color: #011;
padding-top : 50px ;
text-align: center;
justify-content: center;
float: center;
display: flex;

`

export const ThemeLineFormal = styled.h2`
color: #011;
padding-top : 50px ;
text-align: center;
justify-content: center;
float: center;
display: flex;

`




export const TextLine = styled.div`
text-align: center;
justify-content: center;
float: center;
display: flex;
color: ${({lightBg}) => (!lightBg ? '#d1b67a' : '#05022e')};
`


export const TextLineTwoColumn = styled.div`
margin: 0 20px 0 20px;

text-align: center;
justify-content: center;
float: center;
display: flex;
color: ${({lightBg}) => (!lightBg ? '#d1b67a' : '#05022e')};
`

export const SubLine = styled.p`
color: ${({lightBg}) => (!lightBg ? '#fff' : '#413553')};
margin-right: 40px;
display: flex;
font-weight: bold;
float: right;
margin:50px;
padding-right:50px;
`