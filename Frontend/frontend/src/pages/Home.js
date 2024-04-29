import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
`;

const Container = styled.div`
    position: relative;
    height: 100px; /* Înălțimea containerului pentru spațiu */
`;

const ActionButtons = styled.div`
    position: absolute;
    top: 10px; /* Ajustează pentru spațiu între butoane și marginea de sus */
    right: 10px; /* Ajustează pentru spațiu între butoane și marginea din dreapta */
`;

// Background-ul pentru fundal
const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 20px); /* Înălțimea Background-ului */
    background-color: #e6f0ff; /* Albastru deschis */
    z-index: -1; /* Asigură-te că este plasat sub butoane */
`;

const LogoContainer = styled.div`
    position: absolute;
    top: -40px; /* Ajustează poziția logo-ului mai sus */
    left: 0;
    width: 100px; /* Lățimea logo-ului */
    height: 100px; /* Înălțimea logo-ului */
    padding: 20px; /* Spațierea pentru logo */
    box-sizing: border-box; /* Asigură că padding-ul nu afectează dimensiunea totală */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Modificare pentru a face dimensiunea logo-ului mai mare în înălțime */
    height: 160px; /* Înălțimea containerului logo-ului */
    transform: scale(1.5); /* Efect de zoom la logo */
`;

const Logo = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export default function Home() {
    return (
        <Container>
            <ActionButtons>
                <StyledButton id="login">Login</StyledButton>
                <StyledButton id="register">Register</StyledButton>
            </ActionButtons>
            <Background />
            <LogoContainer>
                <Logo src={require('../Poze/logobun.png')} alt="Logo" />
            </LogoContainer>
        </Container>
    );
}
