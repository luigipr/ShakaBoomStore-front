import styled from "styled-components";
import home from "../assets/home-transparente.png";


export default function ShoppingCartHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    
    return(
        <HeaderContainer>
            <div>Carrinho de {user}</div>
            <img src = {home}/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: orange;
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
    }
    img{
        width: 30px;
        margin-right: 5%;
    }
`