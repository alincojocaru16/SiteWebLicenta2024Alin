import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    width: 100%;
    height: 60px;
    position: absolute;
    top: 80px; /* Ajustăm această valoare pentru a poziționa meniul sub butoane */
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

const Menu = () => {
    return (
        <Navbar>
            <MenuList>
                <MenuItem>
                    <MenuLink to="/">Home</MenuLink>
                </MenuItem>
            </MenuList>
        </Navbar>
    );
}

export default Menu;
