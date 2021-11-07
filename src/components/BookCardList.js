import React from 'react'
import { BooksContainer } from './styles/BookCardList'
import BookCard from './BookCard'
import { useHistory } from 'react-router-dom'

const BookCardList = ({ books }) => {
    const history = useHistory()

    const goToBookDetailHandler = book => {
        history.push(`/bookdetail?id=${book.id}`)
    }
    
    return (
        <BooksContainer>
            {books.length !== 0 && books.map((book, index) => (
                <React.Fragment key={index}>
                    <BookCard onClick={() => goToBookDetailHandler(book)} image={book.image} />
                </React.Fragment>
            ))}
        </BooksContainer>
    )
}

export default BookCardList
