import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children, logoColor }) => {
    
    return (
        <>
            <Navbar logoColor={logoColor === undefined ? 'black' : logoColor} />
            {children}
        </>
    )
}

export default Layout
