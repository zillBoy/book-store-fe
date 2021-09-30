import React from 'react'
import { InputContainer, Label, InputField, InputTextArea, ImageCover, InputImage } from './styles/Input'

const Input = ({ label, id, placeholder, type, value, onChange, width, height, inputType }) => {
    return (
        <InputContainer>
            <Label htmlFor={id}>{label}</Label>
            {inputType === "textarea" ? 
                <InputTextArea id={id} placeholder={placeholder} value={value} onChange={onChange} type={type} width={width} height={height} /> : 
             inputType === "image" ?
                <>
                    <ImageCover width={width} height={height} />
                    <InputImage type={type} />
                </> :
                <InputField id={id} placeholder={placeholder} value={value} onChange={onChange} type={type} width={width} />
            }
        </InputContainer>
    )
}

export default Input
