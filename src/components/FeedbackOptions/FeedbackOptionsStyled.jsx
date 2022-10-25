import styled from '@emotion/styled';


export const Feedback = styled.ul`
display: flex;
list-style: none;
justify-content: center;
`;

export const List = styled.li`
margin-right: 15px;


`;

export const Button = styled.button`
padding: 8px;
background-color: gray;
outline: none;
border: 1px solid white;
cursor: pointer;
color: black;
border-radius: 30%;

&:hover {
    background-color:aquamarine ;
    color: white;
}
`;