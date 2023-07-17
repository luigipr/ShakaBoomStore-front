import styled from "styled-components"
import { FaUserCircle } from "react-icons/fa"
import { FaBasketShopping } from "react-icons/fa6"
import Product from "../components/Product"

export default function homepage() {
    return (
        <>
            <Header>
                <Holder><FaUserCircle style={style} /> Nome</Holder>
                <FaBasketShopping style={style} />
            </Header>
            <ProductsContainer>
                <Holder>
                    <Category>Mouse</Category>
                    <Category>Teclado</Category>
                    <Category>Computadores</Category>
                    <Category>Notebooks</Category>
                    <Category>Fone</Category>
                </Holder>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </ProductsContainer>
        </>)
}

const style = {
    fontSize: "45px",
    color: "#41ca41",
    marginLeft: "20px",
    marginRight: "20px"
}

const Header = styled.div`
    width : 100vw;
    height : 13vh;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 1px solid rgba(0,0,0,1);
`

const Holder = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    overflow-y:scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`

const Category = styled.button`
    background-color:#41ca41;
    width: 30vw;
    height: 50px;
    margin-right: 20px;
    margin-left: 10px;
    margin-top: 20px; 
    border-radius:10px;
    color: white;   
    font-size: 15px;
    filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.25));
    border-bottom: 1px solid rgba(0,0,0,0.5);
`

const ProductsContainer = styled.div`
    height: 77.1vh;
    background-color: rgba(0, 188, 0, 0.2); 
    border-top: 2px solid green;
    display:flex;
    flex-wrap:wrap;
    overflow-y:scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`