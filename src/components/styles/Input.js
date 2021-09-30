import styled from "styled-components";

export const InputContainer = styled.div`
    margin: 10px 0px;
`;

export const Label = styled.label`
    display: block;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
`;

export const InputField = styled.input`
    width: ${props =>  props.width ? props.width : '390px'};
    height: 43px;

    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 2px;
    font-size: 16px;
    padding-left: 10px;

    @media only screen and (max-width: 568px) {
        width: 290px;
        top: 150px;
    }
`;

export const InputTextArea = styled.textarea`
    width: ${props =>  props.width ? props.width : '390px'};
    height: ${props =>  props.height ? props.height : '43px'};

    font-family: 'Montserrat';
    padding-top: 10px;
    font-weight: 500;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 2px;
    font-size: 16px;
    padding-left: 10px;

    @media only screen and (max-width: 568px) {
        width: 290px;
        top: 150px;
    }
`;

export const ImageCover = styled.div`
    width: ${props =>  props.width ? props.width : '390px'};
    height: ${props =>  props.height ? props.height : '43px'};
    border: 1px solid #000;
    border-radius: 2px;
`;

export const InputImage = styled.input`
    margin-top: 10px;
`;