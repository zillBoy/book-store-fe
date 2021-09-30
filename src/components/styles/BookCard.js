import styled from "styled-components";

export const Container = styled.div`
    margin: 10px 20px;
`;

export const Image = styled.img`
    width: 175px;
    height: 210px;
    object-fit: cover;
    border-radius: 5px;
    transition: 0.2s ease;

    &:hover {
        box-shadow:
            0.1px 0.1px 0.5px rgba(0, 0, 0, 0.024),
            0.3px 0.3px 1.3px rgba(0, 0, 0, 0.035),
            0.6px 0.6px 3px rgba(0, 0, 0, 0.046),
            2px 2px 10px rgba(0, 0, 0, 0.07);
            transform: scale(1.1);
            transition: 0.2s ease;
            cursor: pointer;
    }

    
    @media only screen and (max-width: 468px) {
        width: 145px;
        height: 180px;
    }

`;