import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Container = styled.aside`
  display: flex;
  position:fixed;
  flex-shrink: 0;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #D8D8D8;
  flex-direction: row;
  padding-top:5px;
  opacity: 0.5;
  z-index: 100;
  transition: all 0.2s ease 0s;

  &:hover {
    opacity: 0.8;
    background:#4ca8ff;
  }
`;

export const SidebarLink = styled(NavLink)`
  width: 40%;
  height: 100%;
  text-align: center;
  font-size: 120%;
  text-decoration: none;
  padding: 5px;
  color: #363636;
  transition: all 0.2s ease 0s;
  &:hover {
    text-decoration: none;
    font-size: 122%;
    color: #000;
    border-bottom: 1px solid black;
    border-radius: 2px;
    
  }
`;

