import styled, {css}  from 'styled-components';

const BigText = css`
   font-size:3rem;
`;

export const Cuadrado = styled.div`
   width : 70px;
   height: 70px;
   background-color: light-blue;
`;

export const Rectangulo = styled(Cuadrado)`
   width: 200px
`;


export const Button = styled.button.attrs(props =>({
   
}))`
   color: blue;
`;