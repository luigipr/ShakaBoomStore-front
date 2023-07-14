import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
//import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          {/* //<Route path="/" element={<HomePage />} /> */}
        </Routes>
      </BrowserRouter>
 
  )
}


