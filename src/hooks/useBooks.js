import { useState, useCallback, useEffect  } from 'react'
import { httpGetAllBooks, httpGetBookById, httpDeleteBookById } from './request'

function useBooks() {
    const [books, setBooks] = useState([])

    const getAllBooks = useCallback(async () => {
        const fetchedBooks = await httpGetAllBooks();
        setBooks(fetchedBooks)
    }, []);

    const getBookById = useCallback(async (id) => {
        return await httpGetBookById(id)
    }, [])

    const deleteBook = useCallback(async (id) => {
        const response = await httpDeleteBookById(id)

        const success = response.ok
        if (success) {
            getAllBooks()
        } else {
            console.log('book was not deleted!')
        }
    }, [getAllBooks])

    useEffect(() => {
        getAllBooks()
    }, [getAllBooks])

    return {
        books,
        getBookById,
        deleteBook
    };
}

export default useBooks;