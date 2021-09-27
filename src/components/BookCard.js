import React from 'react'
import { Container, Image } from './styles/BookCard'
import BookImage from '../assets/images/book/book1.jpg'

const BookCard = () => {
    return (
        <Container>
            <Image src={BookImage} alt='bookcover' />
        </Container>
    )
}

export default BookCard
