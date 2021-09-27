import styled from "styled-components";

export const Container = styled.div`
    margin-top: -14px;
`;

export const MainHeader = styled.h1`
    position: relative;
    top: 60px;
    
    font-size: 20px;
    text-align: center;
    font-weight: 400;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export const ContentContainer = styled.div`
    margin: 0px auto;
    position: relative;
    top: 100px;
    width: 566px;
    height: 459px;
    
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
        width: 466px;
        top: 150px;
    }

    @media only screen and (max-width: 568px) {
        width: 366px;
        top: 150px;
    }
`;

export const Header = styled.h3`
    font-size: 26px;
    text-align: center;
    padding-top: 31.69px;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 20px;
`;

export const ButtonContainer = styled.div`
    position: relative;
    top: 50px;
    text-align: center;
`;

export const Button = styled.button`
    width: 176px;
    height: 37px;
    
    font-family: 'Montserrat';
    font-size: 14px;
    text-align: center;

    color: #fff;
    background: #6D2223;
    border: none;
    border-radius: 5px;
`;