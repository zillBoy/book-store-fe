import React, { useState } from 'react'
import { Container, InputDiv, Input, InputIconDiv, InputIcon, MainHeader } from '../styles/FeaturedBooks'
import Layout from '../Layout'
import searchImage from '../../assets/images/search.png'

const FeaturedBooks = () => {

    const [search, setSearch] = useState('')

    return (
        <Layout hideAuth={true}>
            <Container>
                <MainHeader>Featured Books</MainHeader>
                <InputDiv>
                    <InputIconDiv>
                        <InputIcon src={searchImage} alt='search' />
                    </InputIconDiv>
                    <Input placeholder='Search' type='text' value={search} onChange={event => setSearch(event.target.value)} />
                </InputDiv>

                
            </Container>
        </Layout>
    )
}

export default FeaturedBooks
