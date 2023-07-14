import styled from "styled-components";

export default function Product() {
    return (
        <ProductHolder>
            <ProductImage src="https://blog.abler.com.br/wp-content/uploads/2021/06/teste-de-perfil-comportamental-1-e1660663169829.jpg"/>
            <h1>Teste</h1>
        </ProductHolder>
    )
}

const ProductHolder = styled.div`
    background-color:white;
    width: 45vw;
    height: 200px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 20px;
    margin-bottom: 5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    filter: drop-shadow(4px 4px 4px rgba(0,0,0,0.25));
    border-radius:10px;
    border: 1px solid green;
    overflow: clip;
    h1{
        color:rgba(0,0,0,0.75);
        font-size: 20px;
        margin-top:5px;
    }
`

const ProductImage = styled.img`
    height: 70%;
    width: 100%;
`