import React from 'react'
import { Container, Image } from './styles/BookCard'

const BookCard = ({ onClick, image }) => {

    return (
        <Container onClick={onClick}>
            <Image src={image} alt='bookcover' />
        </Container>
    )
}

export default BookCard
