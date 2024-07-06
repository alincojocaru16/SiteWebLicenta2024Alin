import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
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
    min-height: 100vh; /* Înălțimea minimă pentru a ocupa întreaga pagină */
    background-color: #e6f0ff; /* Fundal albastru deschis */
`;

const ActionButtons = styled.div`
    position: fixed;
    top: 10px; /* Ajustează pentru spațiu între butoane și marginea de sus */
    right: 10px; /* Ajustează pentru spațiu între butoane și marginea din dreapta */
    z-index: 1;
`;

const SearchBar = styled.div`
    position: relative;
    top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const SearchInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 50%;

    @media (max-width: 768px) {
        width: 70%;
    }
`;

const SearchButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 10px;
        margin-left: 5px;
    }
`;

const LeftImage = styled.img`
    position: absolute;
    top: 25%;
    left: 20%;
    transform: translate(-50%, -50%);
    max-height: 80px; /* Setează o înălțime maximă pentru imagine */
`;

const RightImage = styled.img`
    position: absolute;
    top: 25%;
    left: 74%;
    transform: translate(50%, -50%);
    max-height: 80px; /* Setează o înălțime maximă pentru imagine */
`;

const OfferTitle = styled.h2`
    position: relative; /* Setează poziția relativă pentru a poziționa pozele relative la acest element */
    font-size: 24px;
    font-weight: bold;
    color: red; /* Setăm culoarea textului roșu */
    margin-bottom: -10px; /* Spațiu între text și următorul element */
    margin-top: 90px; /* Adaugă spațiu superior */
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
    margin-top: 120px; /* Margin de sus */
    padding: 0 20px;

    @media (max-width: 1200px) {
        justify-content: space-around; /* Ajustează poziția elementelor pe ecrane mai mici */
    }
`;

const OfferItem = styled.div`
    width: calc(16.67% - 20px); /* Lățimea fiecărui element, pentru a încadra 6 pe un rând */
    padding: 10px; /* Padding pentru a separa conținutul */
    background-color: #f9f9f9; /* Culoare de fundal pentru element */
    border-radius: 8px; /* Colțuri rotunjite */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Umbra pentru efect de adâncime */
    transition: transform 0.3s ease; /* Tranziție pentru efect de hover */
    &:hover {
        transform: translateY(-5px); /* Efect de ridicare la hover */
    }

    @media (max-width: 992px) {
        width: calc(33.33% - 20px); /* Ajustează lățimea pentru a încadra 3 pe un rând */
    }
    @media (max-width: 768px) {
        width: calc(50% - 20px); /* Ajustează lățimea pentru a încadra 2 pe un rând */
    }
    @media (max-width: 576px) {
        width: calc(100% - 20px); /* Ajustează lățimea pentru a încadra 1 pe un rând */
    }
`;

export default function Home() {
    return (
        <Container>
            <Menu />
            <ActionButtons>
                <Link to='/cart'>Cosul meu</Link>
                <StyledButton as={Link} to="/login">Login</StyledButton>
                <StyledButton as={Link} to="/register">Register</StyledButton>
            </ActionButtons>
            <SearchBar>
                <SearchInput type="text" placeholder="Caută produsul" />
                <SearchButton>Caută</SearchButton>
            </SearchBar>
            <LeftImage src={require('../Poze/superOferta.png')} alt="Super Oferta" />
            <RightImage src={require('../Poze/superOferta.png')} alt="Super Oferta" />
            <OfferTitle>CELE MAI BUNE OFERTE</OfferTitle>
            <OfferItemsContainer>
                <OfferItem>
                    <Link to='/zmeu'>
                        <OfferImage src={require('../Poze/pcZmeu.jpg')} alt="PC ZMEU" />
                        <OfferDescription>
                            <Price>PRET: 1499,99 RON</Price>
                            PC Gaming ZMEU Max, AMD Ryzen 3 3200G 3.6GHz, 8GB DDR4, 1TB SSD, AMD Radeon Vega 8, Iluminare RGB (
                            <Discount>25% reducere</Discount>
                            )
                        </OfferDescription>
                    </Link>
                </OfferItem>
                <OfferItem>
                    <Link to='/zmeu'>
                        <OfferImage src={require('../Poze/pcBlue.jpg')} alt="PC ZMEU" />
                        <OfferDescription>
                            <Price>PRET: 5398,99 RON</Price>
                            PC Gaming Blue Legendar Ultra, Intel i5-13400F 2.5GHz, 32GB DDR4, 1TB SSD, RTX 4060 8GB GDDR6, Illuminare RGB (
                            <Discount>15% reducere</Discount>
                            )
                        </OfferDescription>
                    </Link>
                </OfferItem>

                <OfferItem>
                    <Link to='/zmeu'>
                        <OfferImage src={require('../Poze/pcWhite.jpg')} alt="PC ZMEU" />
                        <OfferDescription>
                            <Price>PRET: 3699,99 RON</Price>
                            PC Gaming  Legendar White Hyper, Intel i5-12400F 2.5GHz, 16GB DDR5, 1TB SSD, RTX 3050 8GB GDDR6, Iluminare RGB (
                            <Discount>5% reducere</Discount>
                            )
                        </OfferDescription>
                    </Link>
                </OfferItem>
                <OfferItem>
                    <Link to='/zmeu'>
                        <OfferImage src={require('../Poze/laptopAsusTuf.jpg')} alt="PC ZMEU" />
                        <OfferDescription>
                            <Price>PRET: 3498,99 RON</Price>
                            Laptop ASUS Gaming 15.6'' TUF F15 FX507ZC4, FHD 144Hz, Procesor Intel® Core™ i5-12500H (18M Cache, up to 4.50 GHz), 16GB DDR4, 512GB SSD, GeForce RTX 3050 4GB, No OS, Mecha Gray (
                            <Discount>9% reducere</Discount>
                            )
                        </OfferDescription>
                    </Link>
                </OfferItem>

                <OfferItem>
                    <Link to='/zmeu'>
                        <OfferImage src={require('../Poze/asusVivabook.jpg')} alt="PC ZMEU" />
                        <OfferDescription>
                            <Price>PRET: 1698,99 RON</Price>
                            Laptop ASUS 15.6'' Vivobook Go 15 E1504FA, FHD, Procesor AMD Ryzen™ 5 7520U (4M Cache, up to 4.3 GHz), 8GB DDR5, 512GB SSD, Radeon 610M, No OS, Mixed Black(
                            <Discount>12% reducere</Discount>
                            )
                        </OfferDescription>
                    </Link>
                </OfferItem>
                <OfferItem>
                    <Link to='/zmeu'>
                        <OfferImage src={require('../Poze/ps5Bun.jpg')} alt="PC ZMEU" />
                        <OfferDescription>
                            <Price>PRET: 2699,99 RON</Price>
                            Consola Sony PlayStation 5 Slim Disk Edition 1TB White(
                            <Discount>5% reducere</Discount>
                            )
                        </OfferDescription>
                    </Link>
                </OfferItem>
            </OfferItemsContainer>
        </Container>
    );
}
