import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';


function App() {
 
  const user = JSON.parse(localStorage.getItem('profile'))

  console.log(user);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={!user ? <HomePage/> : <Navigate to="/chat"/>}/>
      <Route path="/chat" element={<ChatPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
