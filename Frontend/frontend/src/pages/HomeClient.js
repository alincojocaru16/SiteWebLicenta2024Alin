import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Zmeu from './pcZmeu';
import { Link } from 'react-router-dom'; // Importăm Link din React Router

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

const OfferItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Așază elementele la începutul, mijlocul și sfârșitul containerului */
    gap: 20px; /* Spațiu între elementele din container */
    margin-top: 20px; /* Margin de sus */
`;

const OfferItem = styled.div`
    width: calc(16.67% - 10px); /* Lățimea fiecărui element, pentru a încadra 6 pe un rând */
    padding: 10px; /* Padding pentru a separa conținutul */
    background-color: #f9f9f9; /* Culoare de fundal pentru element */
    border-radius: 8px; /* Colțuri rotunjite */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Umbra pentru efect de adâncime */
    transition: transform 0.3s ease; /* Tranziție pentru efect de hover */
    &:hover {
        transform: translateY(-5px); /* Efect de ridicare la hover */
    }
`;

export default function Home() {
    return (
        <Container>
            <Menu />
            <ActionButtons>
                <a href=''>Cosul meu</a>
                {/* Folosim componente Link în loc de etichete <a> */}
                <StyledButton as={Link} to="/login">Login</StyledButton>
                <StyledButton as={Link} to="/register">Register</StyledButton>
            </ActionButtons>
            <Background />
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
            <OfferItemsContainer>
                <OfferItem>
            <a href='/zmeu'>
                <OfferImage src={require('../Poze/pcZmeu.jpg')} alt="PC ZMEU" />
                <OfferDescription>
                    <Price>PRET: 1499,99 RON</Price>
                    PC Gaming ZMEU Max, AMD Ryzen 3 3200G 3.6GHz, 8GB DDR4, 1TB SSD, AMD Radeon Vega 8, Iluminare RGB (
                    <Discount>25% reducere</Discount>
                    ) 
                </OfferDescription>
            </a>
        </OfferItem>
        <OfferItem>
            <a href='/zmeu'>
                <OfferImage src={require('../Poze/pcBlue.jpg')} alt="PC ZMEU" />
                <OfferDescription>
                    <Price>PRET: 5398,99 RON</Price>
                    PC Gaming Blue Legendar Ultra, Intel i5-13400F 2.5GHz, 32GB DDR4, 1TB SSD, RTX 4060 8GB GDDR6, Illuminare RGB (
                    <Discount>15% reducere</Discount>
                    ) 
                </OfferDescription>
            </a>
        </OfferItem>

        <OfferItem>
        <a href='/zmeu'>
                <OfferImage src={require('../Poze/pcWhite.jpg')} alt="PC ZMEU" />
                <OfferDescription>
                    <Price>PRET: 3699,99 RON</Price>
                    PC Gaming  Legendar White Hyper, Intel i5-12400F 2.5GHz, 16GB DDR5, 1TB SSD, RTX 3050 8GB GDDR6, Iluminare RGB (
                    <Discount>5% reducere</Discount>
                    ) 
                </OfferDescription>
            </a>
        </OfferItem>
        <OfferItem>
        <a href='/zmeu'>
                <OfferImage src={require('../Poze/laptopAsusTuf.jpg')} alt="PC ZMEU" />
                <OfferDescription>
                    <Price>PRET: 3498,99 RON</Price>
                    Laptop ASUS Gaming 15.6'' TUF F15 FX507ZC4, FHD 144Hz, Procesor Intel® Core™ i5-12500H (18M Cache, up to 4.50 GHz), 16GB DDR4, 512GB SSD, GeForce RTX 3050 4GB, No OS, Mecha Gray (
                    <Discount>9% reducere</Discount>
                    ) 
                </OfferDescription>
            </a>
        </OfferItem>

        <OfferItem>
        <a href='/zmeu'>
                <OfferImage src={require('../Poze/asusVivabook.jpg')} alt="PC ZMEU" />
                <OfferDescription>
                    <Price>PRET: 1698,99 RON</Price>
                    Laptop ASUS 15.6'' Vivobook Go 15 E1504FA, FHD, Procesor AMD Ryzen™ 5 7520U (4M Cache, up to 4.3 GHz), 8GB DDR5, 512GB SSD, Radeon 610M, No OS, Mixed Black(
                    <Discount>12% reducere</Discount>
                    ) 
                </OfferDescription>
            </a>
        </OfferItem>
        <OfferItem>
        <a href='/zmeu'>
                <OfferImage src={require('../Poze/ps5Bun.jpg')} alt="PC ZMEU" />
                <OfferDescription>
                    <Price>PRET: 2699,99 RON</Price>
                    Consola Sony PlayStation 5 Slim Disk Edition 1TB White(
                    <Discount>5% reducere</Discount>
                    ) 
                </OfferDescription>
            </a>
        </OfferItem>
                
            </OfferItemsContainer>
        </Container>
    );
}