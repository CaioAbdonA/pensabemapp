import styled from 'styled-components';
import imagemMogi from './3.png';
import imagemLogo from './0.png';

export const Container = styled.aside`
  display: flex;
  background-image: url(${imagemMogi});
  background-size: 100% 120%;
  position:absoluted;
  justify-content: center;
  border-radius: 0px 0px 1px 1px;
  align-items: center;
  margin-top: -5%;
  width: 100%;
  height: 580px;
  flex-direction: column;

  font-size: 400%;
  font-family: Arial Black;

`;

export const Logo = styled.aside`
  display: flex;
  background-image:url(${imagemLogo});
  background-size: 100% 100%;
  justify-content: center;
  margin-top: 10%;
  margin-left: 5%;
  align-items: center;
  width: 800px;
  height: 400px;

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



