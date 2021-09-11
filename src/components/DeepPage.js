import React from "react"
import {ThemeLine} from './Elements/Info.element'
import {InfoSec, TextLine, InfoRow, } from './Elements/Info.element'

const DeepPage = () => {

  return (
    <div>
    <ThemeLine>{"C'est à nous qu'appartient l'avenir"}</ThemeLine>

    <InfoSec lightBg={false}>
    <InfoRow >


    <TextLine lightBg={false}>

          {"Un journal hebdomadaire avec les textes séléctionnés sera disponible très bientôt."}

      </TextLine>

      </InfoRow>

    </InfoSec>


    <ThemeLine>{"Faisons grandir notre patrimoine littéraire "}</ThemeLine>


    <InfoSec lightBg={false}>
    <InfoRow >


    <TextLine lightBg={false}>

          {"Si vous avez des projets qui pourraient nous concerner, écrivez à latournure@gmail.com"}

      </TextLine>

      </InfoRow>

    </InfoSec>

  </div>
  )
}

export default DeepPage