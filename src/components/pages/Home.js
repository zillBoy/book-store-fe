import React from 'react'
import { useHistory } from 'react-router-dom' 
import Layout from '../Layout'
import { Container, InnerContainer, ContainerImage, Image, ContainerContent, MainHeader, MainText, ContainerButton, Button, ContainerSquareImage, SquareImage, ContainerSocialImage, SocialImage, SocialLink, MobileResponsiveContainer } from '../styles/Home'
import productLandingPageImage from '../../assets/images/productLandingPage.jpg'
import squareImage from '../../assets/images/square.png'

import githubImage from '../../assets/images/github.png'
import behanceImage from '../../assets/images/behance.png'
import linkedinImage from '../../assets/images/linkedin.png'

import blackGithubImage from '../../assets/images/blackGithub.png'
import blackBehanceImage from '../../assets/images/blackBehance.png'
import blackLinkedinImage from '../../assets/images/blackLinkedin.png'

import useWindowDimensions from '../../hooks/useWindowDimensions'

import bookstoreImage from '../../assets/images/bookstore.png'
import { Helmet } from "react-helmet";

const Home = () => {

    const { width } = useWindowDimensions();
    const history = useHistory()

    const toFeaturedBooksPage = () => {
        history.push('/featuredbooks')
    }

    return (
        <>
            <Helmet>
                <title>Book Store</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Book Store Project" />

                <meta property="og:title" content="Book Store" />
                <meta property="og:description" content="Book Store Project" />
                <meta property="og:image" content={bookstoreImage} />

            </Helmet>
            <Layout logoTextColor={width <= 768 ? 'white' : 'black'} logoColor={width <= 768 ? 'white' : 'black'} authColor='white'>
                <Container>
                    <MobileResponsiveContainer />
                    <InnerContainer>
                        <ContainerContent>
                            <MainHeader>Book Store</MainHeader>
                            <MainText>Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.</MainText>
                            <ContainerButton>
                                <Button onClick={toFeaturedBooksPage}>Featured Books</Button>
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
                            <SocialLink target='_blank' href='https://github.com/zillBoy'>
                                <SocialImage src={width <= 768 ? blackGithubImage : githubImage} alt='github' />
                            </SocialLink>
                            <SocialLink target='_blank' href='https://www.behance.net/muhammausmanz'>
                                <SocialImage src={width <= 768 ? blackBehanceImage : behanceImage} alt='behance' />
                            </SocialLink>
                            <SocialLink target='_blank' href='https://www.linkedin.com/in/muhammad-usman-28a737177'>
                                <SocialImage src={width <= 768 ?  blackLinkedinImage : linkedinImage} alt='linkedin' />
                            </SocialLink>
                        </ContainerSocialImage>
                    </InnerContainer>
                </Container>
            </Layout>
        </>
    )
}

export default Home
