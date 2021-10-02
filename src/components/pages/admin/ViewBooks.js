import React from 'react'
import { TableContainer, Table, TableRow, TableHead, TableHeader, TableData, TableBody } from '../../styles/admin/ViewBook'
import Layout from '../../Layout'
import useBooks from '../../../hooks/useBooks'

const ViewBooks = () => {

    const books = useBooks()
    console.log('books: ', books)

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
                        {books.map(book => (
                            <TableRow>
                                <TableData>{book.name}</TableData>
                                <TableData>{book.author}</TableData>
                                <TableData>{book.publisher}</TableData>
                                <TableData>{book.isbn}</TableData>
                                <TableData>{book.year}</TableData>
                                <TableData>{book.page}</TableData>
                                <TableData>{book.genre}</TableData>
                                <TableData>{book.language}</TableData>
                                <TableData>a</TableData>
                            </TableRow>
                        ))}
                    </TableBody>        
                </Table>
            </TableContainer>
        </Layout>
    )
}

export default ViewBooks
