import styled from 'styled-components';
import imagemMogi from './Rodape.png';


export const Container = styled.aside`
  display: flex;
  background-image: url(${imagemMogi});
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;
  margin-top: 7.4%;
  width: 100%;
  height: 5em;
  flex-direction: column;

  font-size: 400%;
  font-family: Arial Black;

`;


export const Input = styled.input`
  /* Adapt the colors based on primary prop */
  margin: 5px;
  width: 40px;
  height: 25px;
  border: 1px solid black;
  border-radius: 20px;
  transition: all 0.2s ease 0s;

  &:hover {
    width: 300px; 
     
  }
`;



