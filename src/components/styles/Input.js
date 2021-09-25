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
    width: 390px;
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