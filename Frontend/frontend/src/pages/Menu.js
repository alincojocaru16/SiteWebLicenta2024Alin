import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../Poze/logobun.png';
import Calculatoare from './Calculatoare';
import Console from './Console';
import Laptop from './Laptopuri';
import Componente from './ComponentePc';
const Navbar = styled.nav`
    width: 100%;
    height: 40px;
    position: absolute;
    top: 100px; /* Ajustăm această valoare pentru a poziționa meniul sub butoane */
    background-color: rgba(0, 0, 0, 0.5); /* Fundal transparent */
    display: flex;
    justify-content: center; /* Aliniere orizontală la centru */
    align-items: center; /* Aliniere verticală la centru */
    z-index: 10;
`;

const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
`;

const MenuItem = styled.li`
    margin-right: 20px;
`;

const MenuLink = styled(Link)`
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;

    &:hover {
        color: lightgray;
    }
    
`;
const LogoContainer = styled.div`
    position: absolute;
    top: -130px; /* Ajustează poziția logo-ului */
    left: 10px; /* Ajustează poziția logo-ului */
    width: 100px; /* Lățimea logo-ului */
    height: 100px; /* Înălțimea logo-ului */
    
`;

const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    
`;

const Menu = () => {
    return (
        
        <Navbar>
            <LogoContainer>
            <LogoImage src={logoImage} alt="Logo" />
        </LogoContainer>
            <MenuList>
            <MenuItem>
                    <MenuLink to="/calculatoare">PC Gaming</MenuLink>
                
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/laptop">Laptop</MenuLink>
                
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/">Home</MenuLink>
                
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/console">Console</MenuLink>
                
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/componente">Componente</MenuLink>
                
                </MenuItem>
                
            </MenuList>
        </Navbar>
    );
}

export default Menu;
