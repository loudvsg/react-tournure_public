import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import PrivateText from "./PrivateText"
import PublicTexts from "./PublicTexts"
import { Link } from 'react-router-dom'
import { ThemeLineFormal } from './Elements/Info.element'
import { InputArea, TextArea, BoxButton, BoxContainer,MobileText, BigBoxItem, NavContainer,  NavItem, NavTitle, NavMenuR} from "./Elements/Box.element";


export default function Login({texts}) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showTexts, setShowTexts] = useState(false)

  if (currentUser){
    return <Redirect to="/privatetexts"/>
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      console.log(" validity")
      onShowTexts();


    } catch {
      setError("Erreur lors de la connexion")
      console.log("error")
    }

    setLoading(false)

  }

  const onShowTexts = () =>{
    setShowTexts(true);
  }

  return (
    <>
      <Card>
        <Card.Body>
          
          
          <ThemeLineFormal>Connexion</ThemeLineFormal>
                  
          
          
          {error && <Alert className="justified" variant="danger">{error}</Alert>}
          <div className="justified">
          <Form onSubmit={handleSubmit}>
            <div id="email">
              <InputArea         placeholder="Email"

                  type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <InputArea placeholder="Mot de passe" type="password" ref={passwordRef} required />
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
            </div>
          <ThemeLineFormal className="w-100 text-center mt-3">
            <Link to="/forgot-password">Mot de passe oublié ?</Link>
          </ThemeLineFormal>
        </Card.Body>
      </Card>

      <ThemeLineFormal className="w-100 text-center mt-2">
        
        <Link to="/signup">Inscription</Link>
        

      </ThemeLineFormal>

      
    </>
  )
}