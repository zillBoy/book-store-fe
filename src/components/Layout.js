import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children, logoColor, logoTextColor, authColor, hideAuth }) => {

    return (
        <>
            <Navbar 
                logoColor={logoColor === undefined ? 'black' : logoColor}
                authColor={authColor === undefined ? 'black' : authColor}
                hideAuth={hideAuth}
                logoTextColor={logoTextColor === undefined ? '' : logoTextColor}
            />
            {children}
        </>
    )
}

export default Layout
