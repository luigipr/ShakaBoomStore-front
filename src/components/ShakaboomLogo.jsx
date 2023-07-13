import styled from "styled-components"
import logo from '../assets/logo-transparente.png'

export default function ShakaboomLogo() {
    return (
        <Logo><img src={logo}/></Logo>
    )
}

const Logo = styled.div`
    img {
    width: 250px;
    height: 220px
    }
`