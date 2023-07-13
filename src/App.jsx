import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
//import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"


export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          {/* //<Route path="/" element={<HomePage />} /> */}


        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #5BAF50;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
