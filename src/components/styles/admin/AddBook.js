import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 5%;
`;

export const Card = styled.div`
    margin-left: 1.2%;
    margin-top: 2%;
    height: 653px;
    background-color: #fff;
    width: 195vh;
    border-radius: 5px;

    @media only screen and (max-width: 786px) {
        padding-left: 3%;
        margin-left: 5%;
        margin-top: 10%;
        width: 57vh;
        overflow-y: scroll;
    }

    @media only screen and (max-width: 486px) {
        padding-left: 3%;
        margin-left: 5%;
        margin-top: 10%;
        width: 43vh;
        overflow-y: scroll;
    }

`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2%;
    margin-top: 10px;
    width: 165vh;

    @media only screen and (max-width: 786px) {
        display: block;
        width: 52vh;
    }

    @media only screen and (max-width: 486px) {
        width: 40vh;
    }
`;

export const Header = styled.div`
    position: relative;
    top: 20px;
    font-size: 24px;
    font-weight: bold;
    margin-left: 2%;
    margin-bottom: 40px;
`;