import styled from "styled-components"
import { Link , useNavigate} from "react-router-dom"
import ShakaboomLogo from "../components/ShakaboomLogo"
import useToken from "../hooks/useToken";
import {signIn} from "../services/api";
import { useState, useEffect, useContext } from "react";





export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {  token, login, setUser, localUser } = useToken();
  const navigate = useNavigate();

  
  function logUser(e) {
    e.preventDefault();

    const user = {email, password};

    const promise = signIn(user);

    promise.then( response => {
    
    console.log(response.data);
    login(response.data.token);
    setUser(response.data.username);
    // navegar para pagina de entrada
    navigate('/');
    });
    promise.catch( err  => alert(err.response.data.message));
  }



  return (
    <LoginSingUpContainer >
      <SingInContainer>
        <form onSubmit={logUser}>
          <ShakaboomLogo />
          <input placeholder="E-mail" data-test="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input placeholder="Senha" data-test="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button data-test="sign-in-submit">Entrar</button>
        </form>

        <Link to={'/cadastro'}>
          Primeira vez? Cadastre-se!
        </Link>
      </SingInContainer>
    </LoginSingUpContainer>
  )
}

const LoginSingUpContainer = styled.main`
  background-color: #5BAF50;
  width: 100vw;
  max-height: 100vh;
  padding: 25px;
`


const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `