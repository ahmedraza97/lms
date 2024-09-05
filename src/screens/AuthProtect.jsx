import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AuthProtect() {
    return !localStorage.getItem("userId") ? <Outlet/> : <Navigate to="student-list"/>
}

export default AuthProtect