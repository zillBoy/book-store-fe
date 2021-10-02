import React from 'react'
import { Container, Image } from './styles/BookCard'
import { URL } from '../utility/utils'

const BookCard = ({ onClick, image }) => {
    
    const img = `${URL}/images/${image}`
    
    return (
        <Container onClick={onClick}>
            <Image src={img} alt='bookcover' />
        </Container>
    )
}

export default BookCard
