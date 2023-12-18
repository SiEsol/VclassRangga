import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
