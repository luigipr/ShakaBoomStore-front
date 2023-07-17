import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import shoppingcart from "../assets/shoppingcart.png";
import { createConfig } from "../services/api";

export default function Product() {
    const [products, setProducts] = useState();
    const BASE_URL = import.meta.env.VITE_API_URL;
    const token = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        const promise = axios.get(`${BASE_URL}/products`)
        promise.then((res) => { 
            console.log(res.data);
            setProducts(res.data) 
        })
        promise.catch((err) => { console.log(err) })
    }, [])

    function addProduto(productId, productImage, price, description, quantity){
        //body: {productId, productImage, price, description, quantity}
        //product: {productImage, price, description, quantity, productId, _id}
        const headers = createConfig(token);
        const url = `${BASE_URL}/shoppingcart`;
        const body = {
            productId,
            productImage, 
            price, 
            description, 
            quantity
        }
        axios.post(url, body, headers)
            .then(resp => {
                console.log(resp.data);
                alert('produto adicionado no carrinho com sucesso!');
            })
            .catch(err => {
                alert(err.response.data);
            })
    }

    return (
        <>
            {products && products.map((product, index) => (
                <ProductContainer key={index}>
                    <img src={product.productImage} />
                    <InfoContainer>
                        <p><strong>Descrição: </strong>{product.description}</p>
                        <p><strong>Preço: </strong>R$ {product.price.toFixed(2).toString().replace('.',',')}</p>
                        <img src = {shoppingcart} onClick={() => addProduto(product.productId, product.productImage, product.price, product.description, product.quantity)}/>
                    </InfoContainer>
                </ProductContainer>
            ))}
        </>
    )
}

const ProductContainer = styled.div`
    background-color: white;
    width: 90%;
    border-radius: 15px;
    margin-top: 7px;
    margin-bottom: 7px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
    margin-bottom: 10px;
    p{
        margin: 4px;
        margin-top: 15px;
        margin-right: 30px;
    }
    img{
        position: absolute;
        bottom: -9px;
        right: 2px;
        width: 16px;
        height: 19px;
    }
`