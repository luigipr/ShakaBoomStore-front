import styled from "styled-components"
import Product from "../components/Product"
import { useNavigate } from "react-router-dom"
import HomeHeader from "../components/HomeHeader";

export default function homepage() {
    const username = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    return (
        <>
            <HomeHeader/>
            <ProductsContainer>
                <Product />
            </ProductsContainer>
        </>)
}

const Esp = styled.div`
    height: 45px;
    width: 100%;
`

const ProductsContainer = styled.div`
    height: 100vh;
    background-color: rgba(0, 188, 0, 0.2); 
    display:flex;
    flex-wrap:wrap;
    flex-direction: column;
    align-items: center;
    overflow-y:scroll;
    padding-top: 70px;
    ::-webkit-scrollbar{
        display: none;
    }
`