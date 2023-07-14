import styled from "styled-components"
import useToken from "../hooks/useToken"
import home from "../assets/Home.jpg"


export default function ShoppingCartHeader() {

    const {user} = useToken();

    console.log(user);

    return(
        <HeaderContainer>
            <div>Nome</div>
            <img src = {home}/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    left:0px;
    z-index: 2;
    div{
        margin-left: 23px;
    }
    img{
        width: 30px;
        height: 30px;
        margin-right: 22px;
    }
`