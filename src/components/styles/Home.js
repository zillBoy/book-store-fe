import styled from "styled-components";

const fontFamily = 'Montserrat'

export const Container = styled.div`
    display: flex;
`;

export const InnerContainer = styled.div`
    width: 50%;
`;

export const ContainerImage = styled.div`
    background-color: black;
`;

export const Image = styled.img`
    width: 100%;
    height: 99.5vh;
    object-fit: cover;
    opacity: 0.7;
`;

export const ContainerContent = styled.div`
    margin-top: 250px;
    margin-left: 100px;
    width: 80%;
`;

export const MainHeader = styled.h1`
    font-size: 50px;
    text-transform: uppercase;
`;

export const MainText = styled.p`
    position: relative;
    top: -30px;
`;

export const ContainerButton = styled.div`
    margin-top: 40px;
`;

export const Button = styled.button`
    background-color: #6D2223;
    color: #fff;
    width: 196px;
    height: 37px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    font-family: ${fontFamily};
    cursor: pointer;
`;

export const ContainerSquareImage = styled.div`
    position: absolute;
    bottom: 0%;
    
`;

export const SquareImage = styled.img`
    width: 135px;
    height: 135px;
`;

export const ContainerSocialImage = styled.div`
    position: absolute;
    bottom: 5%;
    right: 2%;
`;

export const SocialImage = styled.img`
    width: 24px;
    height: 24px;
    margin: 0px 10px;
`;