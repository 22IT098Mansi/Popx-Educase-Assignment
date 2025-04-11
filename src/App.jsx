import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import UserProfile from './pages/Profile'
import UserAuthentication from './pages/Login'
import UserRegistration from './pages/Signup'
import WelcomePage from './pages/LandingScreen'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function EduCaseApp() {
  const currentPath = useLocation()

  useEffect(() => {
    if (currentPath.pathname === '/login' || currentPath.pathname === '/signup') {
      sessionStorage.setItem('formSessionId', Date.now().toString())
    }
  }, [currentPath.pathname])

  return (
    <>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/login' element={<UserAuthentication key={currentPath.pathname === '/login' ? Date.now() : 'login'} />} />
        <Route path='/signup' element={<UserRegistration key={currentPath.pathname === '/signup' ? Date.now() : 'signup'} />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default EduCaseApp
