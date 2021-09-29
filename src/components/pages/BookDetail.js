import React, { useEffect, useState } from 'react'
import { Container, ContentContainer, ImageContainer, Image, SummaryContainer, Summary, SummaryTitle, DetailContainer, LabelContainer, LabelComponentContainer, BoldPara, Para, Circle, CircleImage } from '../styles/BookDetail'
import { books } from '../../hooks/request'
import Layout from '../Layout';

import useWindowDimensions from '../../hooks/useWindowDimensions'

import contentIcon from '../../assets/images/content.png'
import summaryIcon from '../../assets/images/summary.png'

const BookDetail = () => {
    
    const { width } = useWindowDimensions()

    let params = new URL(window.location.href);
    let id = params.searchParams.get("id");
    
    const [book, setBook] = useState({})
    const [showContent, setShowContent] = useState('')

    useEffect(() => {
        const book = books.find(book => book.id === Number(id))
        setBook(book)
    }, [id])

    const contentHandler = () => {
        if (showContent === 'summary') {
            setShowContent('content')
        } else {
            setShowContent('summary')
        }
    }

    useEffect(() => {
        if (width <= 768) {
            setShowContent('summary')
        } else {
            setShowContent('')
        }
    }, [width])

    if (book === undefined) return (
        <div>
            <p>Book Not Found!</p>
        </div>
    )

    return (
        <Layout logoTextColor={width <= 768 ? 'white' : 'black'} logoColor={width <= 768 ? 'white' : 'black'} authColor={width <= 768 ? 'white' : 'black'}>
            <Container>
                <ContentContainer>
                {showContent === '' ? <>
                    <SummaryContainerComponent book={book} />
                    <DetailContainerComponent book={book} />
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
                            {showContent === 'summary' ? <CircleImage src={summaryIcon} alt='' /> : <CircleImage src={contentIcon} alt='' />}
                        </Circle>
                    </>}
                    <Image src={book.image} alt={book.name} />
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