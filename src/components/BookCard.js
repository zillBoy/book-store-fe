import React from 'react'
import { Container, Image } from './styles/BookCard'

const BookCard = ({ image }) => {

    return (
        <Container>
            <Image src={image} alt='bookcover' />
        </Container>
    )
}

export default BookCard
