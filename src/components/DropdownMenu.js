import React from 'react'
import { Container, List, ListItem } from './styles/DropdownMenu'
import { useHistory } from 'react-router-dom'

const DropdownMenu = ({ onMouseOver }) => {
    
    const history = useHistory()

    const toHomePageHandler = () => {
        history.push('/home')
    }

    const toAddBookPageHandler = () => {
        history.push('/addbook')
    }

    const toViewBooksPageHandler = () => {
        history.push('/viewbooks')
    }

    const logoutHandler = () => {
        localStorage.removeItem('adminData')
        history.push('/')
    }
    
    return (
        <Container onMouseOver={onMouseOver}>
            <List>
                <ListItem borderTopLeftRadius='5px' borderTopRightRadius='5px' onClick={toHomePageHandler}>Home</ListItem>
                <ListItem borderTop='1px solid #000' onClick={toAddBookPageHandler}>Add Book</ListItem>
                <ListItem borderTop='1px solid #000' onClick={toViewBooksPageHandler}>View Books</ListItem>
                <ListItem borderTop='1px solid #000' borderBottomLeftRadius='5px' borderBottomRightRadius='5px' onClick={logoutHandler}>Logout</ListItem>
            </List>
        </Container>
    )
}

export default DropdownMenu
