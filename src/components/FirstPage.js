    
import PublicText from './PublicText'
import { Container } from '../globalStyles'
import { useState, useEffect } from 'react'
import {ThemeLine} from './Elements/Info.element'
import {InfoSec,WidthDiv, TextLine, AddIcon, InfoColumn, TopLine, SubLine, InfoRow, TextWrapper} from './Elements/Info.element'


const FirstPage = () => {
  const[reference, setReference] = useState(null);

  return (

  <div>
    <ThemeLine>{"Nous sommes ce que vous écrivez"}</ThemeLine>

    <InfoSec lightBg={false}>
    
        

        <InfoRow >


    <TextLine lightBg={false}>

          {"Nous publions chaque semaine un chapitre de l'histoire commune des écrivains. Vos textes sont lus et relus et quelques uns d'entre eux sont sélectionnés et publiés. "}

      </TextLine>

      </InfoRow>

    </InfoSec>
      

    <ThemeLine>{"Grandissons ensemble"}</ThemeLine>
  </div>
    
  )
}

export default FirstPage
