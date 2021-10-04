import { useState, useCallback, useEffect  } from 'react'
import { httpGetAllBooks, httpGetBookById, httpDeleteBookById, httpAddBook, httpEditBook, httpEditBookImage } from './request'

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
        const data = await response.json()
        return data

    }, [])

    // EDIT BOOK
    const editBook = useCallback(async (bookId, book) => {
        const response = await httpEditBook(bookId, book)
        const data = await response.json()
        return data
    }, [])

    const editBookImage = useCallback(async (bookId, book) => {
        const response = await httpEditBookImage(bookId, book)
        const data = await response.json()
        return data
    })

    useEffect(() => {
        getAllBooks()
    }, [getAllBooks])

    return {
        books,
        getBookById,
        deleteBook,
        addBook,
        editBook,
        editBookImage
    };
}

export default useBooks;