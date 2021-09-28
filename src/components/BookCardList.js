import React from 'react'
import { BooksContainer } from './styles/BookCardList'
import BookCard from './BookCard'

const BookCardList = ({ books }) => {

    return (
        <BooksContainer>
            {books.map((book, index) => (
                <React.Fragment key={index}>
                    <BookCard image={book.img} />
                </React.Fragment>
            ))}
        </BooksContainer>
    )
}

export default BookCardList
