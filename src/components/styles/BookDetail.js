import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ContentContainer = styled.div`
    width: 50%;

    @media only screen and (max-width: 768px) {
        width: 0%;
    }
`;

export const SummaryContainer = styled.div`
    position: absolute;
    left: 20px;
    top: 116px;
    
    width: 600px;
    height: 289px;

    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    padding: 10px;
    overflow-y: scroll;

    @media only screen and (max-width: 768px) {
        position: absolute;
        height: 255px;
        top: 62%;
        left: 5%;
        right: 5%;
        width: 86%;
    }
`;

export const SummaryTitle = styled.h3`
    font-size: 14px;
`;

export const Summary = styled.p`
    font-size: 14px;
`;

export const DetailContainer = styled.div`
    position: absolute;
    left: 20px;
    top: 450px;
    
    width: 600px;
    height: 155px;

    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    padding: 10px;

    @media only screen and (max-width: 768px) {
        position: absolute;
        height: 255px;
        top: 62%;
        left: 5%;
        right: 5%;
        width: 86%;
    }
`;

export const LabelComponentContainer = styled.div`    
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        display: inline;
    }
`;

export const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    line-height: 8px;

    @media only screen and (max-width: 768px) {
        line-height: 4px;
    }
`;

export const BoldPara = styled.label`
    font-size: 14px;
    font-weight: bold;
`;

export const Para = styled.p`
    font-size: 14px;
    margin-left: 10px;
`;

export const ImageContainer = styled.div`
    width: 50%;
    background-color: #000;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 99.5vh;
    object-fit: cover;
    opacity: 0.8;

    @media only screen and (max-width: 768px) {
        height: 60vh;
    }

    @media only screen and (max-width: 468px) {
        height: 55vh;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 7%;
    left: 20px;
    background-color: #6D2223;
    width: 117px;
    height: 37px;
    border-radius: 5px;
    cursor: pointer;
`;

export const BuyButton = styled.p`
    text-align: center;
    font-family: 'Montserrat';
    font-size: 14px;
    color: #fff;
    border: none;
`;

export const Circle = styled.div`
    position: absolute;
    top: 50%;
    right: ${props => props.right ? props.right : '5%'} ;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.color ? props.color : '#fff'};
    cursor: pointer;

    z-index: 2;
`;

export const CircleImage = styled.img`
    position: absolute;
    top: 28%;
    left: 25%;

    width: 24px;
    height: 24px;
`;

export const BuyCircleImage = styled.div`
    position: absolute;
    top: 28%;
    left: 25%;
`;