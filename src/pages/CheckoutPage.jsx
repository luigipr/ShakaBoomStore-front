import styled from "styled-components";
import ShoppingCartHeader from "../components/ShoppingCartHeader";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { createConfig } from "../services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CheckoutHeader from "../components/CheckoutHeader";

export default function CheckoutPage(){

    const token = JSON.parse(localStorage.getItem("token"));
    const BASE_URL = import.meta.env.VITE_API_URL;
    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState(0);
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const navigate = useNavigate();


    useEffect(() => {
        const url = `${BASE_URL}/shoppingcart`;
        const headers = createConfig(token);
        axios.get(url, headers)
            .then(resp => {
                let soma = 0;
                console.log(resp.data);
                setProdutos(resp.data);
                resp.data.forEach(produto => (
                    soma += produto.price * produto.quantity
                ))
                setTotal(soma);
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [])

    const [choosedPIX, setChoosedPIX] = useState(false);
    const [choosedBoleto, setChoosedBoleto] = useState(false);
    const [choosedCC, setChoosedCC] = useState(false);

    function choosePIX(){
        setChoosedPIX(true);
        setPaymentMethod('PIX');
        if(choosedBoleto || choosedCC){
            setChoosedBoleto(false);
            setChoosedCC(false);
        }
    }

    function chooseBoleto(){
        setChoosedBoleto(true);
        setPaymentMethod('Boleto');
        if(choosedPIX || choosedCC){
            setChoosedPIX(false);
            setChoosedCC(false);
        }
    }

    function chooseCC(){
        setChoosedCC(true);
        setPaymentMethod('Cartão de crédito');
        if(choosedPIX || choosedBoleto){
            setChoosedBoleto(false);
            setChoosedPIX(false);
        }
    }

    function finalizarVenda(){
        const url = `${BASE_URL}/checkout`;
        const headers = createConfig(token);
        const body = {paymentMethod: paymentMethod, address: address};
        axios.post(url, body, headers)
            .then(resp => {
                console.log(resp.data);
                navigate('/sucesso')
            })
            .catch(err => {
                alert(err.response.data);
            })
    }

    return(
        <div>
            
            <ContentContainer>
            <CheckoutHeader />
                <TituloProduto>Produtos</TituloProduto>
                {produtos.map(produto => (
                    <ProductContainer key={produto._id}>
                        <img src={produto.productImage}/>
                        <div>
                            <p>{produto.description}</p>
                            <p>R$ {produto.price.toFixed(2).toString().replace('.',',')}</p>
                            <p>{produto.quantity}</p>
                        </div>
                    </ProductContainer>)
                )}


                <Titulo>Forma de Pagamento</Titulo>
                <PaymentMetod>
                    {choosedPIX ? 
                        <BsCheckCircleFill style={style}/> : 
                        <BsCircle style={openStyle} onClick={choosePIX}/>}
                        <p>PIX</p>
                </PaymentMetod>
                <PaymentMetod>
                    {choosedBoleto ? 
                        <BsCheckCircleFill style={style}/> : 
                        <BsCircle style={openStyle} onClick={chooseBoleto}/>}
                        <p>Boleto</p>
                </PaymentMetod>
                <PaymentMetod>
                    {choosedCC ? 
                        <BsCheckCircleFill style={style}/> : 
                        <BsCircle style={openStyle} onClick={chooseCC}/>}
                        <p>Cartão de Crédito</p>
                </PaymentMetod>

                <Titulo>Endereço</Titulo>
                <Form>
                    <input required 
                    type='text' 
                    id= 'campoEndereço'
                    value = {address}
                    onChange = {e => setAddress(e.target.value)}
                    placeholder="Endereço completo" 
                    />
                </Form>

            <FooterContainer>
                <p>Total: R$ {total.toFixed(2).toString().replace('.',',')}</p>
                <button onClick={finalizarVenda}>Finalizar</button>
            </FooterContainer>
            </ContentContainer>
            
        </div>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    border-radius: 5px;
    input {
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
`

const FooterContainer = styled.div`
    background-color: #aff8a6;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 2;
    p{
        margin-left: 5%;
        font-size: 25px;
    }
    button{
        background-color: orange;
        width: 120px;
        border-radius: 25px;
        border: none;
        margin-right: 5%;
        color: black;
    }
`
const ContentContainer = styled.div`
    background-color: white;  
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    //margin-top: 60px;
    padding-bottom: 80px;
`

const Titulo = styled.p`
    font-size: 20px;
    font-weight: 800;
    margin-top: 15px;
    margin-bottom: 8px;
`  
const TituloProduto = styled.p`
    font-size: 20px;
    font-weight: 800;
    margin-top: 75px;
    margin-bottom: 8px;
` 

const ProductContainer = styled.div`
    //background-color: red;
    width: 100%;
    //height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    img{
        width: 70px;
        margin-left: 5%;
    }
    div{
        //background-color: green;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 5%;
        margin-left: 9px;
        width: 100%;
        height: 100%;
    }
    p{
        line-height: 25px;
    }
`
const PaymentMetod = styled.div`
    //background-color: pink;
    display: flex;
    width:100%;
    height: 20px;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    p{
        margin-left: 8px;
        margin-top: 4px;
    }
    
`

const openStyle = {
    fontSize: "15px",
    fontWeight: 'bold',
    color: "orange",
    marginLeft: "5%",
}

const style = {
    fontSize: "15px",
    fontWeight: 'bold',
    color: "orange",
    fill: "orange",
    marginLeft: "5%",
}