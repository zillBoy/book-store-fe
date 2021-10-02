import React from 'react'
import { InputContainer, Label, InputField, InputTextArea, ImageCover, Image, InputImage } from './styles/Input'

const Input = ({ style, label, id, placeholder, type, value, onChange, width, height, inputType, image }) => {
    return (
        <InputContainer style={style}>
            <Label htmlFor={id}>{label}</Label>
            {inputType === "textarea" ? 
                <InputTextArea id={id} placeholder={placeholder} value={value} onChange={onChange} type={type} width={width} height={height} /> : 
             inputType === "image" ?
                <>
                    <ImageCover width={width} height={height}>
                        <Image src={image} width={width} height={height} />
                    </ImageCover>
                    <InputImage id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} width={width} />
                </> :
                <InputField id={id} placeholder={placeholder} value={value} onChange={onChange} type={type} width={width} />
            }
        </InputContainer>
    )
}

export default Input
