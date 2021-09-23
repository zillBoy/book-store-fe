import React from 'react'
import Layout from '../Layout'
import { Container, InnerContainer, ContainerImage, Image } from '../styles/Home'
import productLandingPageImage from '../../assets/images/productLandingPage.jpg'


const Home = () => {
    return (
        <Layout>
            <Container>
                <InnerContainer>
                    Book Store
                </InnerContainer>
                <InnerContainer>
                    <ContainerImage>
                        <Image src={productLandingPageImage} alt='product landing page' />
                    </ContainerImage>
                </InnerContainer>
            </Container>
        </Layout>
    )
}

export default Home
