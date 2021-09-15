import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Source Sans Pro', sans-serif;

}

`

export const Container = styled.div`

z-index: 999
position: absolute;
width: 100%;
margin-right: auto;
margin-left: auto;
padding-right:50px;
padding-left:50px;


@media screen  and (max-width : 960px){
    
}

`
export const ContainerLine = styled.div`

z-index: 999
position: absolute;
width: 100%;
margin-right: auto;
margin-left: auto;
padding-right:50px;
padding-left:50px;
flex-direction: column;


@media screen  and (max-width : 960px){
    
}

`
export default GlobalStyle;