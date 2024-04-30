import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import pcZmeu from './pcZmeu';
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
    height: 160px; /* Înălțimea containerului logo-ului */
    transform: scale(1.5); /* Efect de zoom la logo */
`;

const Logo = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const SearchBar = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SearchButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
`;

const LeftImage = styled.img`
    position: absolute;
    top: 160%;
    right: 25%;
    transform: translateX(-50%);
    max-height: 80px; /* Setează o înălțime maximă pentru imagine */
`;

const RightImage = styled.img`
    position: absolute;
    top: 160%;
    left: 25%;
    transform: translateX(50%);
    max-height: 80px; /* Setează o înălțime maximă pentru imagine */
`;

const OfferTitle = styled.h2`
    position: relative; /* Setează poziția relativă pentru a poziționa pozele relative la acest element */
    font-size: 24px;
    font-weight: bold;
    color: red; /* Setăm culoarea textului roșu */
    margin-bottom: 20px; /* Spațiu între text și următorul element */
    text-align: center; /* Aliniere text la centru */
`;

const OfferItemContainer = styled.div`
    position: relative;
    text-align: left;
    margin-right: 800px;
    margin-top:100px; /* Adaugă o margine de 20px în partea de sus */
`;

const OfferImage = styled.img`
    width: 100px; /* Lățimea imaginii */
    height: auto; /* Înălțimea se ajustează automat pentru a menține proporțiile */
    margin-bottom: 10px; /* Spațiu între imagine și descriere */
`;

const OfferDescription = styled.p`
    margin: 0; /* Elimină marginile implicit adăugate de paragraf */
    font-weight: bold; /* Face textul bold */
    display: inline-block; /* Afișează textul pe o singură linie */
    max-width: 200px; /* Setează lățimea maximă pentru text */
    word-wrap: break-word; /* Permite cuvintelor să se împartă pe mai multe linii */
`;

const Discount = styled.span`
    color: red; /* Setează culoarea textului la roșu */
`;

const Price = styled.p`
    font-size: 18px; /* Setează dimensiunea textului pentru preț */
    font-weight: bold; /* Face textul bold */
    margin: 0; /* Elimină marginile implicit adăugate de paragraf */
    margin-bottom: 5px; /* Spațiu între preț și descriere */
`;

export default function Home() {
    return (
        <Container>
            <Menu />
            <ActionButtons>
                <StyledButton id="login">Login</StyledButton>
                <StyledButton id="register">Register</StyledButton>
            </ActionButtons>
            <Background />
            <LogoContainer>
                <Logo src={require('../Poze/logobun.png')} alt="Logo" />
            </LogoContainer>
            <SearchBar>
                <SearchInput type="text" placeholder="Caută produsul" />
                <SearchButton>Caută</SearchButton>
            </SearchBar>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <LeftImage src={require('../Poze/superOferta.png')} alt="Super Oferta" />
            <RightImage src={require('../Poze/superOferta.png')} alt="Super Oferta" />
            <OfferTitle>CELE MAI BUNE OFERTE</OfferTitle>
            <OfferItemContainer>
                
                <a href=''>
                <OfferImage src={require('../Poze/pcZmeu.jpg')} alt="PC ZMEU" />
    <OfferDescription>
        <Price>PRET: 1499,99 RON</Price>
        PC Gaming ZMEU Max, AMD Ryzen 3 3200G 3.6GHz, 8GB DDR4, 1TB SSD, AMD Radeon Vega 8, Iluminare RGB (
        <Discount>25% reducere</Discount>
        ) 
    </OfferDescription>
</a>
            </OfferItemContainer>
            
        </Container>
    );
}
