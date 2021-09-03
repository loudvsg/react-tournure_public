import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

import { ThemeLineFormal } from './Elements/Info.element'
import { InputArea, TextArea, BoxButton, BoxContainer,MobileText, BigBoxItem, NavContainer,  NavItem, NavTitle, NavMenuR} from "./Elements/Box.element";


export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Email envoyé pour réinitialiser le mot de passe")
    } catch {
      setError("Erreur : impossible de réinitialiser le mot de passe")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <ThemeLineFormal>Réinitialiser mon mot de passe</ThemeLineFormal>

          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}


          <Form onSubmit={handleSubmit}>
          <div className="justified">

            <Form.Group id="email">
              <InputArea placeholder="Email" type="email" ref={emailRef} required />
              </Form.Group>
              </div>
          <div className="justified">
              
            <BoxButton disabled={loading} className="btnpublic" type="submit">
              Envoyer
              </BoxButton>
              </div>
          </Form>

          <ThemeLineFormal className="w-100 text-center mt-3">
            <Link to="/login">Connexion</Link>
          </ThemeLineFormal>
        </Card.Body>
      </Card>
      <ThemeLineFormal className="w-100 text-center mt-2">
        <Link to="/signup">Inscription</Link>
      </ThemeLineFormal>
    </>
  )
}