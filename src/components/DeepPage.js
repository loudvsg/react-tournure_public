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
    <ThemeLine>{"Nous avons beaucoup d'autres choses à vous partager."}</ThemeLine>

    <InfoSec lightBg={false}>
    <InfoRow >


    <TextLine lightBg={false}>

          {"Un journal hebdomadaire avec les textes séléctionnés sera disponible très bientôt."}

      </TextLine>

      </InfoRow>

    </InfoSec>


    <ThemeLine>{"Faisons grandir notre patrimoine"}</ThemeLine>


    <InfoSec lightBg={false}>
    <InfoRow >


    <TextLine lightBg={false}>

          {"Si vous avez des projets qui pourraient nous concerner, écrivez nous à latournure@gmail.com"}

      </TextLine>

      </InfoRow>

    </InfoSec>

  </div>
  )
}

export default DeepPage