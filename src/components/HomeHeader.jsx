import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import shoppingcart from "../assets/shoppingcart.png";

export default function HomeHeader(){
    const user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();
    
    return(
        <HeaderContainer>
            <div>Olá, {user}</div>
            <img src = {shoppingcart} onClick={() => navigate('/carrinho')}/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    left:0px;
    z-index: 2;
    div{
        margin-left: 5%;
        font-weight: 800;
        font-size: 25px;
    }
    img{
        width: 30px;
        margin-right: 5%;
    }
`