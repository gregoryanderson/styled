import styled from 'styled-components';

export const Title = styled.h1`
color:dodgerblue;
height: 4em;
`

export const Button = styled.button`
background-color: ${props => props.card ? "rebeccapurple" : "papayawhip"};
`

