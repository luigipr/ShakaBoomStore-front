import styled from "styled-components";
import ShoppingCartHeader from "../components/ShoppingCartHeader";
import logo from "../assets/logo-transparente.png";
import trash from "../assets/trash.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { createConfig } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function ShoppingCartPage(){
    const [carrinho, setCarrinho] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const BASE_URL = import.meta.env.VITE_API_URL;
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));

    const navigate = useNavigate();



    function deletarProduto(productId){
        const confirmacaoDeDelecao = confirm('Tem certeza que deseja excluir este produto do seu carrinho de compras?');
        if(confirmacaoDeDelecao){
            const url = `${BASE_URL}/shoppingcart/${productId}`;
        const headers = createConfig(token);
        axios.delete(url, headers)
            .then(resp => {
                console.log(resp.data);
                if(deleted){
                    setDeleted(false)
                }else{
                    setDeleted(true);
                }
            })
            .catch(err => {
                console.log(err.response.data);
            })
        }  
    }

    function goToCheckout(){
        if(carrinho.length === 0){
            alert('Não há nenhum produto no carrinho, adicione produtos para finalizar a compra')
        }else{
            navigate('/checkout');
        }   
    }

    useEffect(() => {
        const url = `${BASE_URL}/shoppingcart`;
        const headers = createConfig(token);
        axios.get(url, headers)
            .then(resp => {
                console.log(resp.data);
                setCarrinho(resp.data);
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [deleted])

    if(carrinho.length ===0 ){
        return(
            <>
                <ShoppingCartHeader />
                <ShoppingCartContainer>
                    <Texto>Você ainda não adicionou nada ao carrinho</Texto>
                    <BackButton onClick={() => navigate('/')}>
                        Escolher produtos
                    </BackButton>
                </ShoppingCartContainer>
            </>
        )
    }
    return(
        <>
        <ShoppingCartHeader />
        <ShoppingCartContainer>
            
            {carrinho.map(produto => (
                <ProductContainer key = {produto._id}>
                    <img src = {produto.productImage} />
                    <InfoContainer>
                        <p><strong>Descrição: </strong>{produto.description}</p>
                        <p><strong>Preço: </strong>R$ {produto.price.toFixed(2).toString().replace('.',',')}</p>
                        <p><strong>Quantidade: </strong>{produto.quantity}</p>
                        <img src = {trash} onClick={() => deletarProduto(produto.productId)}/>
                    </InfoContainer>
                </ProductContainer>)
            )} 

            <BuyButton onClick={goToCheckout}>
                Comprar
            </BuyButton>

        </ShoppingCartContainer>
       
        </>
    );
}


const Texto = styled.p`
    font-size: 30px;
    color: gray;
    margin-top: 180px;
    margin-bottom: 70px;
    padding: 5%;
    text-align: center;
`
const ShoppingCartContainer = styled.div`
    background-color: #c5e8c5;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    padding-bottom: 60px;
    padding-top: 60px;
`

const ProductContainer = styled.div`
    background-color: white;
    width: 90%;
    border-radius: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    img {
        height: 120px;
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    strong{
        font-weight: 800;
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
        margin: 4px;
        margin-top: 15px;
        margin-right: 30px;
    }
    img{
        position: absolute;
        top: -9px;
        right: 2px;
        width: 16px;
        height: 19px;
    }
`

const BuyButton = styled.button`
    background-color: green;
    width: 120px;
    border-radius: 25px;
    border: none;
    position: fixed;
    bottom: 15px;
`

const BackButton = styled.button`
    background-color: orange;
    color: black;
    width: 200px;
    border-radius: 25px;
    border: none;
`