import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import ShakaboomLogo from "../components/ShakaboomLogo"
import {signUp} from "../services/api";
import { useState } from "react";


export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  function registerUser(e) {
    e.preventDefault();
    
    const promise = signUp({username, email, password, password2});

    promise.then( resposta => {

      alert('Você foi cadastrado com sucesso!');  
      // navegar para pagina de login
      navigate('/login');
    });
    promise.catch( err  => {alert(err.response.data.message)});

  }

  return (
    <LoginSingUpContainer>
      <SingUpContainer>
        <form onSubmit={registerUser}>
          <ShakaboomLogo />
          <input placeholder="Nome" data-test="name" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input placeholder="E-mail" data-test="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input placeholder="Senha" data-test="password" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input placeholder="Confirme a senha" data-test="conf-password" type="password" autoComplete="new-password" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
          <button data-test="sign-up-submit" >Cadastrar</button>
        </form>

        <Link to={'/login'}>
          Já tem uma conta? Entre agora!
        </Link>
      </SingUpContainer>
    </LoginSingUpContainer>
  )
}

const LoginSingUpContainer = styled.main`
  background-color: #5BAF50;
  width: 100vw;
  max-height: 100vh;
  padding: 25px;
`

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`