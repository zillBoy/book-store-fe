import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, LogoText, Image } from './styles/Navbar'
import blackLogo from '../assets/images/blackLogo.png'
import whiteLogo from '../assets/images/whiteLogo.png'

const Navbar = ({ logoColor }) => {
    
    const history = useHistory()

    const toHomePage = () => {
        history.push('/')
    }

    return (
        <Container>
            <Image onClick={toHomePage} src={logoColor === 'black' ? blackLogo : whiteLogo} alt='logo' />
            <LogoText>Books</LogoText>
        </Container>
    )
}

export default Navbar
