import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children, logoColor, authColor }) => {

    return (
        <>
            <Navbar 
                logoColor={logoColor === undefined ? 'black' : logoColor} 
                authColor={authColor === undefined ? 'black' : authColor}
            />
            {children}
        </>
    )
}

export default Layout
