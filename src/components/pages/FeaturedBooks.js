import React, { useState, useEffect } from 'react'
import { Container, InputDiv, Input, InputIconDiv, InputIcon, MainHeader, FeaturedBooksContainer } from '../styles/FeaturedBooks'
import Layout from '../Layout'
import searchImage from '../../assets/images/search.png'
import BookCardList from '../BookCardList'
import useBooks from '../../hooks/useBooks'
import Error from './Error'

const FeaturedBooks = () => {

    const [search, setSearch] = useState('')
    const { books } = useBooks();

    const [booksData, setBooksData] = useState([])
    const [filteredBookData, setFilteredBookData] = useState([])

    const onSearchHandler = event => {

        let updatedBook = []
        let value = event.target.value

        if (booksData.length) {
            updatedBook = booksData.filter((item) => {
                const startsWith = 
                    (item.name && item.name.toString().toLowerCase().startsWith(value.toLowerCase())) ||
                    (item.year && item.year.toString().toLowerCase().startsWith(value.toLowerCase())) ||
                    (item.isbn && item.isbn.toString().toLowerCase().startsWith(value.toLowerCase())) ||
                    (item.author && item.author.toString().toLowerCase().startsWith(value.toLowerCase())) ||
                    (item.language && item.language.toString().toLowerCase().startsWith(value.toLowerCase())) ||
                    (item.publisher && item.publisher.toString().toLowerCase().startsWith(value.toLowerCase()))
                    
                const includes = 
                    (item.name && item.name.toString().toLowerCase().includes(value.toLowerCase())) ||
                    (item.year && item.year.toString().toLowerCase().includes(value.toLowerCase())) ||
                    (item.isbn && item.isbn.toString().toLowerCase().includes(value.toLowerCase())) ||
                    (item.author && item.author.toString().toLowerCase().includes(value.toLowerCase())) ||
                    (item.language && item.language.toString().toLowerCase().includes(value.toLowerCase())) ||
                    (item.publisher && item.publisher.toString().toLowerCase().includes(value.toLowerCase()))
                
                if (startsWith) return startsWith
                else if (!startsWith && includes) return includes
                else return null
            })
        }
        setFilteredBookData(updatedBook)
        setSearch(value)
    }

    useEffect(() => {
        setBooksData(books)
    }, [])

    if (books.error !== undefined) return <Error error={books.error} />

    return (
        <Layout hideAuth={true}>
            <Container>
                <MainHeader>Featured Books</MainHeader>
                <InputDiv>
                    <InputIconDiv>
                        <InputIcon src={searchImage} alt='search' />
                    </InputIconDiv>
                    <Input placeholder='Search' type='text' value={search} onChange={event => onSearchHandler(event)} />
                </InputDiv>
                <FeaturedBooksContainer>
                    <BookCardList books={search.length ? filteredBookData : books} />
                </FeaturedBooksContainer>
            </Container>
        </Layout>
    )
}

export default FeaturedBooks
