import styled from "styled-components";

const fontFamily = 'Montserrat'

export const Container = styled.div`
    display: flex;

    @media only screen and (max-width: 768px) {
        display: block;
    }
`;

export const InnerContainer = styled.div`
    width: 50%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const ContainerImage = styled.div`
    background-color: black;

    @media only screen and (max-width: 768px) {
        position: absolute;
        top: 0%;
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 99.5vh;
    object-fit: cover;
    opacity: 0.7;

    @media only screen and (max-width: 768px) {
        width: 100%;
        position: absolute;
        top: 0%;
        z-index: -1;
        opacity: 1;
        clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
        height: 93.5vh;
    }
`;

export const ContainerContent = styled.div`
    margin-top: 250px;
    margin-left: 100px;
    width: 80%;

    @media only screen and (max-width: 768px) {
        margin-left: 40px;
    }
`;

export const MainHeader = styled.h1`
    font-size: 50px;
    text-transform: uppercase;

    @media only screen and (max-width: 768px) {
        position: relative;
        color: #fff;
        width: 350px;
    }

`;

export const MainText = styled.p`
    position: relative;
    top: -30px;

    @media only screen and (max-width: 768px) {
        color: #fff;
        width: 350px;
    }

`;

export const ContainerButton = styled.div`
    margin-top: 40px;

    @media only screen and (max-width: 768px) {
        position: relative;        
    }
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

    @media only screen and (max-width: 768px) {
        
    }
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

    @media only screen and (max-width: 768px) {
        bottom: 2%;
    }
`;

export const SocialLink = styled.a`
    cursor: pointer;
`;

export const SocialImage = styled.img`
    width: 24px;
    height: 24px;
    margin: 0px 10px;
`;

export const MobileResponsiveContainer = styled.span`
    

    @media only screen and (max-width: 768px) {
        position: absolute;
        top: 0%;
        width: 100%;
        height: 100px;
        background-color: #000;
        opacity: 0.6;
        height: 100vh;
        clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
    }
`;