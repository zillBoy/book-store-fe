import { useState, useCallback, useEffect  } from 'react'
import { httpGetAllBooks } from './request'

function useBooks() {
    const [books, setBooks] = useState([])

    const getAllBooks = useCallback(async () => {
        const fetchedBooks = await httpGetAllBooks();
        setBooks(fetchedBooks)
    }, []);

    useEffect(() => {
        getAllBooks()
    }, [getAllBooks])

    return books;
}

export default useBooks;