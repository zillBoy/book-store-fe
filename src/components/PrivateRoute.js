import React from 'react'
import { useHistory, Route } from 'react-router-dom'

const PrivateRoute = ({ path, component }) => {
    
    const history = useHistory()
    const adminData = localStorage.getItem('adminData')

    const noAuth = () => {
        history.push('/')
    }

    if (adminData === null) return <div onClick={noAuth()}></div>
    return <Route path={path} component={component} />
}

export default PrivateRoute
