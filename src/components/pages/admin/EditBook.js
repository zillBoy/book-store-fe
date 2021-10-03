import React, { useState, useEffect } from 'react'
import { Container, Card, InputContainer, Header } from '../../styles/admin/AddBook'
import { ButtonContainer, BuyButton } from '../../styles/BookDetail'

import Layout from '../../Layout'
import Input from '../../Input'
import Error from '../Error'

import useWindowDimensions from '../../../hooks/useWindowDimensions'
import useBooks from '../../../hooks/useBooks'
import { URL as API_URL } from '../../../utility/utils'

const EditBook = () => {
    
    const { getBookById } = useBooks()
    const { width } = useWindowDimensions()

    const [book, setBook] = useState({})

    const mobile = width <= 786 ? true : false
    const params = new URL(window.location.href)
    const id = params.searchParams.get("id")
    
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
    const [imageCover, setImageCover] = useState('https://i.stack.imgur.com/y9DpT.jpg')
    
    const onSetImageHandler = event => {

        let file = event.target.files[0]
        let imageUrl = URL.createObjectURL(file)

        let acceptedFormat = "image/jpeg"
        
        if (file.type !==  acceptedFormat) {
            return alert(`Please choose an ${acceptedFormat} file`)
        }

        setImageCover(imageUrl)
        setImage(file)
    }

    const onEditHandler = () => {
        
        if (name.length === 0) return alert('Please add book name')
        else if (author.length === 0) return alert('Please add author name')
        else if (publisher.length === 0) return alert('Please add publisher name')
        else if (isbn.length === 0) return alert('Please add isbn number')
        else if (year.length === 0) return alert('Please add book published year')
        else if (language.length === 0) return alert('Please add book language')
        else if (genre.length === 0) return alert('Please add book genre')
        else if (page.length === 0) return alert('Please enter book pages')
        else if (summary.length === 0) return alert('Please add book summary')
        else if (image.length === 0) return alert('Please add book image')

        let book = {
            name,
            author,
            publisher,
            isbn,
            year,
            language,
            genre,
            page,
            summary,
            image
        }

        console.log('book: ', book)
    }

    async function getBookHandler() {
        const book = await getBookById(id)

        console.log('book: ', book)

        if (book.error === undefined) {
            const parsedBook = book[0]
            setName(parsedBook.name)
            setAuthor(parsedBook.author)
            setPublisher(parsedBook.publisher)
            setIsbn(parsedBook.isbn)
            setYear(parsedBook.year)
            setLanguage(parsedBook.language)
            setGenre(parsedBook.genre)
            setPage(parsedBook.page)
            setSummary(parsedBook.summary)
            setImage(parsedBook.image)
            setImageCover(`${API_URL}/images/${parsedBook.image}`)
        }

        setBook(book)
    }

    useEffect(() => {
        try {
            getBookHandler()
        } catch(err) {
            console.log('edit book error!')
        }
    }, [])

    if (book.error !== undefined) return <Error error={book.error} />

    return (
        <Layout>
            <Container>
                <Card>
                    <Header>Edit Book</Header>
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
                            height='90px'
                            style={mobile ? {} : {marginTop: '-18px'}}
                        />
                        <Input 
                            id='add-book-image'
                            label='Image'
                            placeholder='Choose Image'
                            image={imageCover}
                            onChange={onSetImageHandler}
                            type='file'
                            inputType='image'
                            width='500px'
                            height='90px'
                        />
                    </InputContainer>

                    <ButtonContainer mobile={mobile} onClick={onEditHandler}>
                        <BuyButton>Edit</BuyButton>
                    </ButtonContainer>
                </Card>
            </Container>
        </Layout>
    )
}

export default EditBook