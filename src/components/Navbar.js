import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, ContainerLogo, LogoImage, LogoText, ContainerAuth, AuthText  } from './styles/Navbar'
import blackLogo from '../assets/images/blackLogo.png'
import whiteLogo from '../assets/images/whiteLogo.png'

const Navbar = ({ logoColor, authColor }) => {
    
    const history = useHistory()
    const adminData = JSON.parse(localStorage.getItem('adminData'))

    const toHomePage = () => {
        history.push('/')
    }

    return (
        <Container>
            <ContainerLogo>
                <LogoImage onClick={toHomePage} src={logoColor === 'black' ? blackLogo : whiteLogo} alt='logo' />
                <LogoText>Books</LogoText>
            </ContainerLogo>
            <ContainerAuth>
                <AuthText color={authColor}>{adminData !== null ? adminData.name : 'Login'}</AuthText>
            </ContainerAuth>
        </Container>
    )
}

export default Navbar
