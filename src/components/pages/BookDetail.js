import React, { useEffect, useState } from 'react'
import { Container, ContentContainer, ImageContainer, Image, SummaryContainer, Summary, SummaryTitle, DetailContainer, LabelContainer, LabelComponentContainer, BoldPara, Para, Circle, CircleImage, ButtonContainer, BuyButton, BuyCircleImage } from '../styles/BookDetail'
import Layout from '../Layout';
import Error from './Error';
import { URL as API_URL } from '../../utility/utils'

import useWindowDimensions from '../../hooks/useWindowDimensions'
import useBooks from '../../hooks/useBooks'

import contentIcon from '../../assets/images/content.png'
import summaryIcon from '../../assets/images/summary.png'
import {ReactComponent as Logo} from '../../assets/images/buy.svg'

const BookDetail = () => {
    
    const { width } = useWindowDimensions()
    const { getBookById } = useBooks()

    const params = new URL(window.location.href);
    const id = params.searchParams.get("id");
    
    const [book, setBook] = useState({})
    const [showContent, setShowContent] = useState('')

    const contentHandler = () => {
        if (showContent === 'summary') {
            setShowContent('content')
        } else {
            setShowContent('summary')
        }
    }

    const onBuyHandler = () => {
        // Buy book
    }

    useEffect(() => {
        if (width <= 468) {
            setShowContent('summary')
        } else {
            setShowContent('')
        }
    }, [width])

    async function getBookHandler() {
        const book = await getBookById(id)
        
        if (book.error === undefined) {
            const parsedBook = book[0]
            setBook(parsedBook)
        } else {
            setBook(book)
        }
    }

    useEffect(() => {
        getBookHandler()
    }, [])

    if (book.error !== undefined) return <Error error='Book Not Found!' />

    return (
        <Layout logoTextColor={width <= 768 ? 'white' : 'black'} logoColor={width <= 768 ? 'white' : 'black'} authColor={width <= 768 ? 'white' : 'black'}>
            <Container>
                <ContentContainer>
                {showContent === '' ? <>
                    <SummaryContainerComponent book={book} />
                    <DetailContainerComponent book={book} />
                    <ButtonContainer onClick={onBuyHandler}>
                        <BuyButton>Buy</BuyButton>
                    </ButtonContainer>
                </> : showContent === 'summary' ? <>
                    <SummaryContainerComponent book={book} />
                </> : <>
                    <DetailContainerComponent book={book} />
                </>
                }
                </ContentContainer>
                <ImageContainer>
                    {width <= 768 && <>
                        <Circle onClick={contentHandler}>
                            {showContent === 'summary' ? <CircleImage src={summaryIcon} alt='summary' /> : <CircleImage src={contentIcon} alt='content' />}
                        </Circle>
                        <Circle color='#6D2223' right='18%' onClick={onBuyHandler}>
                            <BuyCircleImage>
                                <Logo stroke='#fff' />    
                            </BuyCircleImage>
                        </Circle>
                    </>}
                    <Image src={`${API_URL}/images/${book.image}`} alt={book.name} />
                </ImageContainer>
            </Container>
        </Layout>
    )
}

export default BookDetail

export const LabelComponent = ({ fieldName, name, marginRight }) => {
    return (
        <LabelContainer marginRight={marginRight}>
            <BoldPara>{fieldName}:</BoldPara>
            <Para>{name}</Para>
        </LabelContainer>
    )
}

export const DetailContainerComponent = ({ book }) => {
    return (
        <DetailContainer>
            <LabelComponentContainer>
                <LabelComponent fieldName='Name' name={book.name} />
                <LabelComponent marginRight='132px' fieldName='Year' name={book.year} />
            </LabelComponentContainer>
            <LabelComponentContainer>
                <LabelComponent fieldName='Author' name={book.author} />
                <LabelComponent marginRight='70px' fieldName='Language' name={book.language} />
            </LabelComponentContainer>
            <LabelComponentContainer>
                <LabelComponent fieldName='Publisher' name={book.publisher} />
                <LabelComponent marginRight='114px' fieldName='Genre' name={book.genre} />
            </LabelComponentContainer>
            <LabelComponentContainer>
                <LabelComponent fieldName='ISBN' name={book.isbn} />
                <LabelComponent marginRight='133px' fieldName='Page' name={book.page} />
            </LabelComponentContainer>
        </DetailContainer>
    )
}

export const SummaryContainerComponent = ({ book }) => {
    return (
        <SummaryContainer>
            <SummaryTitle>Summary</SummaryTitle>
            <Summary>{book.summary}</Summary>
        </SummaryContainer>
    )
}