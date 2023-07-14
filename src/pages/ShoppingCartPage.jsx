//import styled from "styled-components";

import styled from "styled-components";
import ShoppingCartHeader from "../components/ShoppingCartHeader";
import logo from "../assets/logo-transparente.png";
import trash from "../assets/trash.png";

export default function ShoppingCartPage(){
    return(
        <>
        <ShoppingCartHeader />
        <ShoppingCartContainer>
            
            <ProductContainer>
                <img src = {logo} />
                <InfoContainer>
                    <p>Nome</p>
                    <p>Descrição</p>
                    <p>Preço</p>
                    <p>Quantidade</p>
                    <img src = {trash} />
                </InfoContainer>
            </ProductContainer>


        </ShoppingCartContainer>
        </>
    );
}

const ShoppingCartContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 60px;
`

const ProductContainer = styled.div`
    background-color: #c5e8c5;
    width: 90%;
    height: 130px;
    border-radius: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    img {
        width: 30%;
    }
`
const InfoContainer = styled.div`
    width: 100%;
    height: 92%;
    display: flex;
    margin-right: 5px;
    margin-left: 5px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    p{
        margin: 6px;
    }
    img{
        position: absolute;
        top: 2px;
        right: 2px;
        width: 5%;
    }
`