import styled from "styled-components";

export const Container = styled.div`
    margin: 0px;
    padding: 10px;
    position: absolute;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98.1%;
    z-index: 1;
`;

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImage = styled.img`
    cursor: pointer;
    width: 28px;
    height: 28px;
    margin-left: 10px;
`;

export const LogoText = styled.p`
    margin-left: 5px;
`;

export const ContainerAuth = styled.div`

`;

export const AuthText = styled.p`
    color: ${props => props.color === 'black' ? 'black' : props.color};
    opacity: 0.8;
    cursor: pointer;
`;