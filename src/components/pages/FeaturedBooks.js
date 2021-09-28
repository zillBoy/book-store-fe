import React, { useState } from 'react'
import { Container, InputDiv, Input, InputIconDiv, InputIcon, MainHeader, FeaturedBooksContainer } from '../styles/FeaturedBooks'
import Layout from '../Layout'
import searchImage from '../../assets/images/search.png'
import BookCardList from '../BookCardList'

const FeaturedBooks = () => {

    const [search, setSearch] = useState('')
    const books = [
        {
            img: '/images/book/book1.jpg'
        },
        {
            img: '/images/book/book2.jpg'
        },
        {
            img: '/images/book/book3.jpg'
        },
        {
            img: '/images/book/book4.jpg'
        },
        {
            img: '/images/book/book5.jpg'
        },
        {
            img: '/images/book/book6.jpg'
        },
        {
            img: '/images/book/book7.jpg'
        },
        {
            img: '/images/book/book8.jpg'
        },
        {
            img: '/images/book/book9.jpg'
        },
        {
            img: '/images/book/book10.jpg'
        }
    ]

    return (
        <Layout hideAuth={true}>
            <Container>
                <MainHeader>Featured Books</MainHeader>
                <InputDiv>
                    <InputIconDiv>
                        <InputIcon src={searchImage} alt='search' />
                    </InputIconDiv>
                    <Input placeholder='Search' type='text' value={search} onChange={event => setSearch(event.target.value)} />
                </InputDiv>
                <FeaturedBooksContainer>
                    <BookCardList books={books} />
                </FeaturedBooksContainer>
            </Container>
        </Layout>
    )
}

export default FeaturedBooks
