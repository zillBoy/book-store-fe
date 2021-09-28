import styled from "styled-components";

export const BooksContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;

    @media only screen and (max-width: 768px) {
        width: 90%;
    }
`;