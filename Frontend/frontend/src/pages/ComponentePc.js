import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Zmeu from './pcZmeu';
import { Link } from 'react-router-dom';

// Definirea stilurilor pentru containerul principal
const Container = styled.div`
    position: relative;
    background-color: #f0f5ff; /* Culoare de fundal pentru container */
    padding: 20px; /* Padding pentru a separa conținutul de marginea containerului */
    overflow-x: hidden; /* Dezactivare derulare orizontală */
`;

const OfferItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* Aliniere la începutul containerului */
    gap: 20px; /* Spațiu între elementele din container */
    margin-top: 150px; /* Margin de sus */
    margin-bottom: 20px; /* Margin de jos */
`;

const OfferItem = styled.div`
    width: calc(20% - -20px); /* Reducerea lățimii elementelor */
    padding: 10px; /* Padding pentru a separa conținutul */
    background-color: #f9f9f9; /* Culoare de fundal pentru element */
    border-radius: 8px; /* Colțuri rotunjite */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Umbra pentru efect de adâncime */
    transition: transform 0.3s ease; /* Tranziție pentru efect de hover */
    &:hover {
        transform: translateY(-5px); /* Efect de ridicare la hover */
    }
`;

const OfferImage = styled.img`
    width: 100px; /* Lățimea imaginii */
    height: auto; /* Înălțimea se ajustează automat pentru a menține proporțiile */
    margin-bottom: 10px; /* Spațiu între imagine și descriere */
`;

const OfferDescription = styled.p`
    margin: 0; /* Elimină marginile implicit adăugate de paragraf */
    font-weight: bold; /* Face textul bold */
    max-width: 200px; /* Setează lățimea maximă pentru text */
    word-wrap: break-word; /* Permite cuvintelor să se împartă pe mai multe linii */
    
    /* Elimină sublinierea textului în legăturile din descriere */
    a {
        text-decoration: none;
    }
`;


const Price = styled.p`
    font-size: 18px; /* Setează dimensiunea textului pentru preț */
    font-weight: bold; /* Face textul bold */
    margin: 0; /* Elimină marginile implicit adăugate de paragraf */
    margin-bottom: 5px; /* Spațiu între preț și descriere */
`;

const Discount = styled.span`
    color: red; /* Setează culoarea textului la roșu */
`;



export default function Componente(){
    return (
        <Container> {/* Folosim noul container pentru a înfășura conținutul */}
        
            <OfferItemsContainer>
            <Menu></Menu>
           
            <OfferItem>
        <a href='/zmeu'>
                <OfferImage src={require('../Poze/placaGeForceRTX4060.jpg')} alt="PC ZMEU" />
                <OfferDescription>
                    <Price>PRET: 2699,99 RON</Price>
                    Placa video GIGABYTE GeForce RTX 4060 EAGLE OC 8GB GDDR6 128-bit DLSS 3.0(
                    <Discount>5% reducere</Discount>
                    ) 
                </OfferDescription>
            </a>
        </OfferItem>

        
        <OfferItem>
        <a href='/zmeu'>
                <OfferImage src={require('../Poze/placaGeForceRTX4060.jpg')} alt="PC ZMEU" />
                <OfferDescription>
                    <Price>PRET: 2699,99 RON</Price>
                    Placa video GIGABYTE GeForce RTX 4060 EAGLE OC 8GB GDDR6 128-bit DLSS 3.0(
                    <Discount>5% reducere</Discount>
                    ) 
                </OfferDescription>
            </a>
        </OfferItem>
        <OfferItem>
        <a href='/zmeu'>
                <OfferImage src={require('../Poze/placaGeForceRTX4060.jpg')} alt="PC ZMEU" />
                <OfferDescription>
                    <Price>PRET: 2699,99 RON</Price>
                    Placa video GIGABYTE GeForce RTX 4060 EAGLE OC 8GB GDDR6 128-bit DLSS 3.0(
                    <Discount>5% reducere</Discount>
                    ) 
                </OfferDescription>
            </a>
        </OfferItem>
        <OfferItem>
        <a href='/zmeu'>
                <OfferImage src={require('../Poze/placaGeForceRTX4060.jpg')} alt="PC ZMEU" />
                <OfferDescription>
                    <Price>PRET: 2699,99 RON</Price>
                    Placa video GIGABYTE GeForce RTX 4060 EAGLE OC 8GB GDDR6 128-bit DLSS 3.0(
                    <Discount>5% reducere</Discount>
                    ) 
                </OfferDescription>
            </a>
        </OfferItem>
        <OfferItem>
        <a href='/zmeu'>
                <OfferImage src={require('../Poze/placaGeForceRTX4060.jpg')} alt="PC ZMEU" />
                <OfferDescription>
                    <Price>PRET: 2699,99 RON</Price>
                    Placa video GIGABYTE GeForce RTX 4060 EAGLE OC 8GB GDDR6 128-bit DLSS 3.0(
                    <Discount>5% reducere</Discount>
                    ) 
                </OfferDescription>
            </a>
        </OfferItem>


        
            </OfferItemsContainer>
        </Container>
    );
}
