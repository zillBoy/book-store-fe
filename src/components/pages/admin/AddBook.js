import React, { useState } from 'react'
import { Container, Card, InputContainer, Header } from '../../styles/admin/AddBook'
import { ButtonContainer, BuyButton } from '../../styles/BookDetail'

import Layout from '../../Layout'
import Input from '../../Input'

import useWindowDimensions from '../../../hooks/useWindowDimensions'
import useBooks from '../../../hooks/useBooks'

const AddBook = () => {
    
    const { width } = useWindowDimensions()
    const { addBook } = useBooks()
    const mobile = width <= 786 ? true : false
    
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

        let acceptedFormat = 'image/jpeg' || 'image/png'
        
        if (file.type !==  acceptedFormat) {
            return alert(`Please choose an ${acceptedFormat} file`)
        }

        setImageCover(imageUrl)
        setImage(file)
    }

    const createFormData = (photo, body) => {
        const data = new FormData();

        const name = photo.name.split('.')
        const ext = name[name.length - 1]
        const uniqueName = `${name[0]}_${new Date().getTime()}.${ext}`

        data.append('photo', photo, uniqueName)
        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });

        return data;
    };

    const onAddHandler = async () => {
        
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
            summary
        }

        const data = await addBook(createFormData(image, book))
        if (data.error !== undefined) {
            alert(data.error)
        } else {
            setName('')
            setAuthor('')
            setPublisher('')
            setIsbn('')
            setYear('')
            setLanguage('')
            setGenre('')
            setPage('')
            setSummary('')
            setImage('')
            setImageCover('https://i.stack.imgur.com/y9DpT.jpg')
            alert(`${data.name} successfully added!`)
        }
    }

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

                    <ButtonContainer mobile={mobile} onClick={onAddHandler}>
                        <BuyButton>Add</BuyButton>
                    </ButtonContainer>
                </Card>
            </Container>
        </Layout>
    )
}

export default AddBook