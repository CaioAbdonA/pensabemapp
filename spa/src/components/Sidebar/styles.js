import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import imagemLogo from './Logo1.png';


export const Container = styled.aside`
  display: flex;
  position:fixed;
  flex-shrink: 0;
  align-items: center;
  width: 100%;
  height: 100px;
  background:#fff;
  flex-direction: row;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.5);
  transition: all 0.2s ease 0s;
`;

export const SidebarLink = styled(NavLink)`
  width: auto;
  height: 100%;
  margin:1px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  font-size: 120%;
  line-height: 100px;
  text-decoration: none;
  color: #363636;
  transition: all 0.2s ease 0s;
  &:hover {
    text-decoration: none;
    font-size: 122%;
    color: #fff;
    background: #4ca8ff; 
    
  }
`;

export const Logo = styled.aside`
  display: flex;
  background-image:url(${imagemLogo});
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;
  width: 240px;
  margin-top:1%;
  margin-left: 2%;
  height: 120px;

`;

