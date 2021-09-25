import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Container, ContainerLogo, LogoImage, LogoText, ContainerAuth, AuthText  } from './styles/Navbar'
import blackLogo from '../assets/images/blackLogo.png'
import whiteLogo from '../assets/images/whiteLogo.png'
import DropdownMenu from './DropdownMenu'

const Navbar = ({ logoColor, authColor }) => {
    
    const history = useHistory()
    const adminData = JSON.parse(localStorage.getItem('adminData'))
    
    const [hover, setHover] = useState(false)

    const toLoginPageHandler = () => {
        console.log('called')
    }

    const toHomePageHandler = () => {
        history.push('/')
    }

    const onHovered = () => {
        setHover(true)
    }

    const onHoverLeft = () => {
        setHover(false)
    }

    return (
        <Container>
            <ContainerLogo>
                <LogoImage onClick={toHomePageHandler} src={logoColor === 'black' ? blackLogo : whiteLogo} alt='logo' />
                <LogoText>Books</LogoText>
            </ContainerLogo>
            <ContainerAuth onClick={onHovered} onMouseOver={onHovered} onMouseLeave={onHoverLeft}>
                <AuthText onClick={adminData === null && toLoginPageHandler} color={authColor}>{adminData !== null ? adminData.name : 'Login'}</AuthText>
                {adminData !== null && (hover && <DropdownMenu onMouseOver={onHovered} />)}
            </ContainerAuth>
        </Container>
    )
}

export default Navbar
