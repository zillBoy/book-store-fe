import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, MainHeader, ContentContainer, Header, InputContainer, ButtonContainer, Button } from '../../styles/Login'
import Layout from '../../Layout'
import Input from '../../Input'
import { EMAIL, PASSWORD } from '../../../utility/utils'

const Login = () => {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = () => {
        if (email === EMAIL && password === PASSWORD)  {
            localStorage.setItem('adminData', JSON.stringify({name: 'Muhammad Usman'}))
            history.push('/')
        } else {
            alert('Incorrect email or password!')
        }
    }

    return (
        <Layout hideAuth={true}>
            <Container>
                <MainHeader>Login in Book Store</MainHeader>
                <ContentContainer>
                    <Header>Login</Header>
                    <InputContainer>
                        <Input 
                            id='login-email'
                            label='Email'
                            placeholder='Enter email'
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type='email'
                        />
                        <Input 
                            id='login-password'
                            label='Password'
                            placeholder='Enter password'
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            type='password'
                        />
                    </InputContainer>
                    <ButtonContainer>
                        <Button onClick={loginHandler}>Login</Button>
                    </ButtonContainer>
                </ContentContainer>
            </Container>
        </Layout>
    )
}

export default Login
