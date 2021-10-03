import { useState, useCallback, useEffect  } from 'react'
import { httpGetAllBooks, httpDeleteBookById } from './request'

function useBooks() {
    const [books, setBooks] = useState([])

    const getAllBooks = useCallback(async () => {
        const fetchedBooks = await httpGetAllBooks();
        setBooks(fetchedBooks)
    }, []);

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
        deleteBook
    };
}

export default useBooks;