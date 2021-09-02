import PropTypes from 'prop-types'
import Button from './Button'
import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

const DeepPage = () => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      //history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
      <div>    
      <h1>{"Too Deep to Enter"}</h1>
      <button className="btnpublic" onClick={handleLogout}>
          Log Out
        </button>
        <button className="btnpublic" onClick={handleLogout}>
          Log Out
        </button>
    </div>
  )
}

export default DeepPage