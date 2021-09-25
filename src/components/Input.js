import React from 'react'
import { InputContainer, Label, InputField } from './styles/Input'

const Input = ({ label, id, placeholder, type, value, onChange }) => {
    return (
        <InputContainer>
            <Label htmlFor={id}>{label}</Label>
            <InputField id={id} placeholder={placeholder} value={value} onChange={onChange} type={type} />
        </InputContainer>
    )
}

export default Input
