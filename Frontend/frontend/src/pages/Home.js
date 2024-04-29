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

    &:hover {
        background-color: #45a049;
    }
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

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent; /* Schimbarea fundalului la transparent */
    z-index: -1; /* Asigură-te că este plasat sub butoane */
    display: flex;
    justify-content: flex-start; /* Aliniere la început */
    align-items: flex-start; /* Aliniere la început */
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
            <Background>
                <Logo src={require('../Poze/logobun.png')} alt="Logo" />
            </Background>
        </Container>
    );
}
