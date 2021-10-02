import React, { useState, useCallback, useEffect  } from 'react'
import { Container, InputDiv, Input, InputIconDiv, InputIcon, MainHeader, FeaturedBooksContainer } from '../styles/FeaturedBooks'
import Layout from '../Layout'
import searchImage from '../../assets/images/search.png'
import BookCardList from '../BookCardList'
import useBooks from '../../hooks/useBooks'

const FeaturedBooks = () => {

    const [search, setSearch] = useState('')
    const books = useBooks();

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
