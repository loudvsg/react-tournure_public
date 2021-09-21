    
import PublicText from './PublicText'
import { Container } from '../globalStyles'
import { useState, useEffect } from 'react'
import {ImageWrap, ThemeLine, ThemeTitre,ThemeSousTitre, DivAvecPetitPadding} from './Elements/Info.element'
import {InfoSec,WidthDiv, TextLine, AddIcon, InfoColumn, InfoRowWithColumns, TopLine, SubLine, InfoRow, TextLineTwoColumn, TextWrapper} from './Elements/Info.element'


const FirstPage = () => {
  const[reference, setReference] = useState(null);
    //<ThemeSousTitre lightBg={true}>{"Chaque numéro est un recueil de plusieurs textes que vous nous avez transmis. La sélection est réalisée par notre équipe de lecteurs. "}</ThemeSousTitre>

  return (

  <div>

  <DivAvecPetitPadding>
    <ThemeTitre lightBg={true}>{"La tournure : le journal commun aux écrivains"}</ThemeTitre>
    <ThemeSousTitre lightBg={true}>{"Chaque numéro est un recueil de plusieurs textes que vous nous avez transmis. La sélection est réalisée par notre équipe de lecteurs. "}</ThemeSousTitre>
  
      </DivAvecPetitPadding>
      
      <DivAvecPetitPadding>
    <ThemeTitre lightBg={false}>{"Cette page est une page dédiée aux tests"}</ThemeTitre>
    <ThemeSousTitre lightBg={false}>{"ELle va bientôt disparaître donc profitez en"}</ThemeSousTitre>
  
  </DivAvecPetitPadding>

    <InfoSec lightBg={false}>
    
        

        <InfoRowWithColumns>


<InfoColumn>
    <TextLineTwoColumn lightBg={false}>

          {"Vos textes sont lus et relus et quelques uns d'entre eux sont sélectionnés et publiés. La sélection est basée sur vos appréciations et commentaires ainsi que par notre équipe de lecteurs critiques. "}

      </TextLineTwoColumn>

      <TextLineTwoColumn lightBg={false}>

          {"Test de 2 colonnes"}

      </TextLineTwoColumn>
</InfoColumn>
      </InfoRowWithColumns>

    </InfoSec>
      

    <ThemeTitre lightBg={true}>{"Grandissons ensemble"}</ThemeTitre>
  </div>
    
  )
}

export default FirstPage
