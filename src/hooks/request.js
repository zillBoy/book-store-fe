import { URL } from '../utility/utils'

// Get All Books Endpoint
async function httpGetAllBooks() {
    try {
        const response = await fetch(`${URL}/books`)
        const data = await response.json()

        return data
    } catch(err) {
        console.log(err)
        return {
            ok: false
        }
    }
}

async function httpGetBookById(id) {
    try {
        const response = await fetch(`${URL}/books/${id}`)
        const data = await response.json()

        return data
    } catch(err) {
        console.log(err)
        return {
            ok: false
        }
    }
}

// Delete Endpoint
async function httpDeleteBookById(id) {
    try {
        return await fetch(`${URL}/books/${id}`, {
            method: 'DELETE'
        })
    } catch(err) {
        console.log(err)
        return {
            ok: false
        }
    }
}

// Add Book Endpoint
async function httpAddBook(book) {
    try {
        return await fetch(`${URL}/books`, {
            method: 'POST',
            body: book,
        })
    } catch (err) {
        console.log(err)
        return {
            ok: false
        }
    }
}

// Edit Book Endpoint
async function httpEditBook(bookId, book) {
    try {
        return await fetch(`${URL}/books/${bookId}`, {
            method: 'PUT',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch(err) {
        console.log(err)
        return {
            ok: false
        }
    }
}

// Edit Book - Image Endpoint
async function httpEditBookImage(bookId, book) {
    try {
        return 'a'
    } catch(err) {
        console.log(err)
    }
}

export {
    httpGetAllBooks,
    httpGetBookById,
    httpDeleteBookById,
    httpAddBook,
    httpEditBook,
    httpEditBookImage
};