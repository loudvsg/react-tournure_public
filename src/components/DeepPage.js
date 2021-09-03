import PropTypes from 'prop-types'
import Button from './Button'
import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {ThemeLine} from './Elements/Info.element'
import {InfoSec,WidthDiv, TextLine, AddIcon, InfoColumn, TopLine, SubLine, InfoRow, TextWrapper} from './Elements/Info.element'

const DeepPage = () => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()


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