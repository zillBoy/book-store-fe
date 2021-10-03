import { useState, useCallback, useEffect  } from 'react'
import { httpGetAllBooks, httpGetBookById, httpDeleteBookById, httpAddBook } from './request'

function useBooks() {
    const [books, setBooks] = useState([])

    // GET BOOK

    const getAllBooks = useCallback(async () => {
        const fetchedBooks = await httpGetAllBooks();
        setBooks(fetchedBooks)
    }, []);

    const getBookById = useCallback(async (id) => {
        return await httpGetBookById(id)
    }, [])

    // DELETE BOOK

    const deleteBook = useCallback(async (id) => {
        const response = await httpDeleteBookById(id)

        const success = response.ok
        if (success) {
            getAllBooks()
        } else {
            console.log('book was not deleted!')
        }
    }, [getAllBooks])

    // ADD BOOK

    const addBook = useCallback(async (book) => {
        
        const response = await httpAddBook(book)

        const success = response.ok
        if (success) {
            getAllBooks()
        } else {
            console.log('book was not added!')
        }
    }, [])

    useEffect(() => {
        getAllBooks()
    }, [getAllBooks])

    return {
        books,
        getBookById,
        deleteBook,
        addBook
    };
}

export default useBooks;