import React from 'react'
import { useHistory } from 'react-router-dom'
import { TableContainer, Table, TableRow, TableHead, TableHeader, TableData, TableBody } from '../../styles/admin/ViewBook'
import Layout from '../../Layout'
import useBooks from '../../../hooks/useBooks'
import { ReactComponent as ViewIcon } from '../../../assets/images/view.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/images/delete.svg'
import Error from '../Error'

const ViewBooks = () => {

    const { books, deleteBook } = useBooks()
    const history = useHistory()

    const onDeleteHandler = bookId => {
        deleteBook(bookId)
    }

    const onViewHandler = bookId => {
        history.push(`editbook?id=${bookId}`)
    }

    if (books.error !== undefined) return <Error error={books.error} />

    return (
        <Layout>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Author</TableHeader>
                            <TableHeader>Publisher</TableHeader>
                            <TableHeader>ISBN</TableHeader>
                            <TableHeader>Year</TableHeader>
                            <TableHeader>Page</TableHeader>
                            <TableHeader>Genre</TableHeader>
                            <TableHeader>Language</TableHeader>
                            <TableHeader>Actions</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map(book => <BookRow  
                            key={book.id}
                            book={book}
                            deleteHandler={onDeleteHandler}
                            viewHandler={onViewHandler}
                        />)}
                    </TableBody>        
                </Table>
            </TableContainer>
        </Layout>
    )
}

export default ViewBooks


const BookRow = ({ book, key, viewHandler, deleteHandler }) => {

    const iconStyles = {padding: '0px 2px', cursor: 'pointer'}

    return (
        <TableRow key={key}>
            <TableData>{book.name}</TableData>
            <TableData>{book.author}</TableData>
            <TableData>{book.publisher}</TableData>
            <TableData>{book.isbn}</TableData>
            <TableData>{book.year}</TableData>
            <TableData>{book.page}</TableData>
            <TableData>{book.genre}</TableData>
            <TableData>{book.language}</TableData>
            <TableData>
                <>
                    <DeleteIcon title="Delete" onClick={() => deleteHandler(book.id)} style={iconStyles} color='#983839' />
                    <ViewIcon title="View" onClick={() => viewHandler(book.id)} style={iconStyles} color='#835C52' /> 
                </>
            </TableData>
        </TableRow>
    )
}