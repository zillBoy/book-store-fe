import React from 'react'
import { ErrorContainer, ErrorPara } from '../styles/Error'
import Layout from '../Layout'

const Error = ({ error }) => {
    return (
        <Layout>
            <ErrorContainer>
                <ErrorPara>{error}</ErrorPara>
            </ErrorContainer>
        </Layout>
    )
}

export default Error
