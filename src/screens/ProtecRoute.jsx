import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtecRoute({Layout}) {
  return localStorage.getItem("userId") ? <Layout/> : <Navigate to="/"/>
}

export default ProtecRoute