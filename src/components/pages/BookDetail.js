import React, { useEffect, useState } from 'react'
import { Container, ContentContainer, ImageContainer, Image, SummaryContainer, Summary, DetailContainer, LabelContainer, BoldPara, Para } from '../styles/BookDetail'
import { books } from '../../hooks/request'
import Layout from '../Layout';

const BookDetail = () => {
    
    let params = new URL(window.location.href);
    let id = params.searchParams.get("id");
    
    const [book, setBook] = useState({})

    useEffect(() => {
        const book = books.find(book => book.id === Number(id))
        setBook(book)
    }, [])

    if (book === undefined) return (
        <div>
            <p>Book Not Found!</p>
        </div>
    )

    return (
        <Layout hideAuth={true}>
            <Container>
                <ContentContainer>
                    <SummaryContainer>
                        <Summary>{book.summary}</Summary>
                    </SummaryContainer>
                    <DetailContainer>
                        <LabelComponent fieldName='Name' name={book.name} />
                        <LabelComponent fieldName='Year' name={book.year} />
                        <LabelComponent fieldName='Author' name={book.author} />
                        <LabelComponent fieldName='Language' name={book.language} />
                        <LabelComponent fieldName='Publisher' name={book.publisher} />
                        <LabelComponent fieldName='Genre' name={book.genre} />
                        <LabelComponent fieldName='ISBN' name={book.isbn} />
                        <LabelComponent fieldName='Page' name={book.page} />
                    </DetailContainer>
                </ContentContainer>
                <ImageContainer>
                    <Image src={book.image} alt={book.name} />
                </ImageContainer>
            </Container>
        </Layout>
    )
}

export default BookDetail


export const LabelComponent = ({ fieldName, name }) => {
    return (
        <LabelContainer>
            <BoldPara>{fieldName}</BoldPara>
            <Para>{name}</Para>
        </LabelContainer>
    )
}