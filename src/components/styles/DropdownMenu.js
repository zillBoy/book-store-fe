import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 70%;
    right: 0%;
    background-color: #fff;
    border-radius: 5px;
    width: 180px;
`;

export const List = styled.div`
      list-style-type: none;
      margin: 0px;
`; 

export const ListItem = styled.li`
    color: #000;
    padding: 10px 20px;
    border-top: ${props => props.borderTop ? props.borderTop : '0px'};

    &:hover {
        background-color: rgba(210, 112, 112, 0.8);
        border-top-left-radius: ${props => props.borderTopLeftRadius ? props.borderTopLeftRadius : '0px'};
        border-top-right-radius: ${props => props.borderTopRightRadius ? props.borderTopRightRadius : '0px'};
        border-bottom-left-radius: ${props => props.borderBottomLeftRadius ? props.borderBottomLeftRadius : '0px'};
        border-bottom-right-radius: ${props => props.borderBottomRightRadius ? props.borderBottomRightRadius : '0px'};
    }   
`;