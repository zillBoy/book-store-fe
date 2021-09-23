import React from 'react'
import Layout from '../Layout'
import { Container, InnerContainer, ContainerImage, Image, ContainerContent, MainHeader, MainText, ContainerButton, Button, ContainerSquareImage, SquareImage, ContainerSocialImage, SocialImage } from '../styles/Home'
import productLandingPageImage from '../../assets/images/productLandingPage.jpg'
import squareImage from '../../assets/images/square.png'
import githubImage from '../../assets/images/github.png'
import behanceImage from '../../assets/images/behance.png'
import linkedinImage from '../../assets/images/linkedin.png'

const Home = () => {
    return (
        <Layout>
            <Container>
                <InnerContainer>
                    <ContainerContent>
                        <MainHeader>Book Store</MainHeader>
                        <MainText>Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.</MainText>
                        <ContainerButton>
                            <Button>Featured Books</Button>
                        </ContainerButton>
                    </ContainerContent>
                    <ContainerSquareImage>
                        <SquareImage src={squareImage} alt='white square' />
                    </ContainerSquareImage>
                </InnerContainer>
                <InnerContainer>
                    <ContainerImage>
                        <Image src={productLandingPageImage} alt='product landing page' />
                    </ContainerImage>
                    <ContainerSocialImage>
                        <SocialImage src={githubImage} alt='github' />
                        <SocialImage src={behanceImage} alt='behance' />
                        <SocialImage src={linkedinImage} alt='linkedin' />
                    </ContainerSocialImage>
                </InnerContainer>
            </Container>
        </Layout>
    )
}

export default Home
