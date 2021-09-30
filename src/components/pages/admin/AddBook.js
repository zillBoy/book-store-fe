import React, { useState } from 'react'
import Layout from '../../Layout'
import { Container, Card, InputContainer, Header } from '../../styles/admin/AddBook'
import Input from '../../Input'

const AddBook = () => {
    
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [publisher, setPublisher] = useState('')
    const [isbn, setIsbn] = useState('')
    const [summary, setSummary] = useState('')
    const [year, setYear] = useState('')
    const [language, setLanguage] = useState('')
    const [genre, setGenre] = useState('')
    const [page, setPage] = useState('')
    const [image, setImage] = useState('')
    
    return (
        <Layout>
            <Container>
                <Card>
                    <Header>Add Book</Header>
                    <InputContainer>
                        <Input 
                            id='add-book-name'
                            label='Name'
                            placeholder='Enter name'
                            value={name}
                            onChange={event => setName(event.target.value)}
                            type='text'
                            width='500px'
                        />
                        <Input 
                            id='add-book-year'
                            label='Year'
                            placeholder='Enter year'
                            value={year}
                            onChange={event => setYear(event.target.value)}
                            type='text'
                            width='500px'
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input 
                            id='add-book-author'
                            label='Author'
                            placeholder='Enter author'
                            value={author}
                            onChange={event => setAuthor(event.target.value)}
                            type='text'
                            width='500px'
                        />
                        <Input 
                            id='add-book-language'
                            label='Language'
                            placeholder='Enter language'
                            value={language}
                            onChange={event => setLanguage(event.target.value)}
                            type='text'
                            width='500px'
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input 
                            id='add-book-publisher'
                            label='Publisher'
                            placeholder='Enter publisher'
                            value={publisher}
                            onChange={event => setPublisher(event.target.value)}
                            type='text'
                            width='500px'
                        />
                        <Input 
                            id='add-book-genre'
                            label='Genre'
                            placeholder='Enter genre'
                            value={genre}
                            onChange={event => setGenre(event.target.value)}
                            type='text'
                            width='500px'
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input 
                            id='add-book-isbn'
                            label='ISBN'
                            placeholder='Enter ISBN number'
                            value={isbn}
                            onChange={event => setIsbn(event.target.value)}
                            type='text'
                            width='500px'
                        />
                        <Input 
                            id='add-book-page'
                            label='Page'
                            placeholder='Enter page'
                            value={page}
                            onChange={event => setPage(event.target.value)}
                            type='number'
                            width='500px'
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input 
                            id='add-book-summary'
                            label='Summary'
                            placeholder='Enter summary'
                            value={summary}
                            onChange={event => setSummary(event.target.value)}
                            type='text'
                            inputType='textarea'
                            width='500px'
                            height='130px'
                        />
                        <Input 
                            id='add-book-image'
                            label='Image'
                            placeholder='Choose Image'
                            value={image}
                            onChange={event => setImage(event.target.value)}
                            type='file'
                            inputType='image'
                            width='500px'
                            height='90px'
                        />
                    </InputContainer>
                </Card>
            </Container>
        </Layout>
    )
}

export default AddBook
