import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Product() {
    const [products, setProducts] = useState();
    const url = import.meta.env.VITE_API_URL

    useEffect(() => {
        const promise = axios.get(`${url}/getProducts`)
        promise.then((res) => { setProducts(res.data) })
        promise.catch((err) => { console.log(err) })
    }, [])

    return (
        <>
            {products && products.map((product, index) => (
                <ProductHolder key={index}>
                    <ProductImage src={product.productImage} />
                    <h1>{product.description}</h1>
                </ProductHolder>
            ))}
        </>
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