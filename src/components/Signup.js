import { db } from "../firebase";
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

import { ThemeLineFormal } from './Elements/Info.element'
import { InputArea, TextArea, BoxButton, BoxContainer,MobileText, BigBoxItem, NavContainer,  NavItem, NavTitle, NavMenuR} from "./Elements/Box.element";


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Mots de passe différents")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)


      db.collection("Users").doc(emailRef.current.value)
      .set({
        email: emailRef.current.value,
      })
      .then(() => {

      })
      .catch((error) => {
        alert(error.message);
      });



      history.push("/login")
    } catch {
      setError("Impossible de créer un compte")
    }

    setLoading(false)
  }





  return (
    <>
      <Card>
        <Card.Body>
          <ThemeLineFormal>Inscription</ThemeLineFormal>

          {error && <Alert className="justified" variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <div className="justified">

            <Form.Group id="email">
              <InputArea placeholder="Email" type="email" ref={emailRef} required />
              </Form.Group>
              </div>
          <div className="justified">
            
            <Form.Group id="password">
              <InputArea placeholder="Mot de passe" type="password" ref={passwordRef} required />

                </Form.Group>
            </div>
                
          <div className="justified">
              
            <Form.Group id="password-confirm">
              <InputArea placeholder="Mot de passe" type="password" ref={passwordConfirmRef} required />
              
                </Form.Group>
            </div>
              
            <div className="justified">
                 <button
                className="btnpublic"
                  type="submit"
                >
                Entrer
                </button>
                </div>
            
          </Form>
        </Card.Body>
      </Card>

      <ThemeLineFormal className="w-100 text-center mt-2">
        
        <Link to="/login">Connexion</Link>
        
      </ThemeLineFormal>

    </>
  )
}