import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import logo from "../assets/logo-transparente.png"


export default function SuccessPage(){

    const navigate = useNavigate();

    function backToHome(){
        navigate('/');
    }
    return(
        <PageContainer>
            <img src={logo}/>
            <p>Compra finalizada com sucesso!!</p>
            <button onClick={backToHome}>Voltar para home</button>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    background-color: #5BAF50;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    img{
        width: 90%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    p{
        font-size: 25px;
        margin-bottom: 20px;
    }
    button{
        background-color: orange;
        color: black;
        font-weight: 200;
        width: 50%;
        margin-top: 50px;
    }
`