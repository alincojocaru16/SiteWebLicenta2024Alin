import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

// Container pentru meniu
const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  z-index: 1;
`;

// Container pentru email și coș
const EmailCartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  z-index: 1;
`;

// Container pentru titlu
const TitleContainer = styled.div`
  position: absolute;
  top: 130px;
  left: 0;
  right: 0;
  text-align: center;
  color: red;
`;

const OfferItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Așază elementele la începutul, mijlocul și sfârșitul containerului */
    gap: 20px; /* Spațiu între elementele din container */
    margin-top: 520px; /* Margin de sus */
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
const OfferImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const OfferDescription = styled.p`
  margin: 0;
  font-weight: bold;
  max-width: 300px;
  word-wrap: break-word;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 5px;
`;

const Discount = styled.span`
  color: red;
`;

export default function HomeClient(props) {
  const { userData } = props;

  return (
    <div>
      {/* Container pentru meniu */}
      <MenuContainer>
      </MenuContainer>

      {/* Container pentru email și coș */}
      <EmailCartContainer>
        <div>
          <a href='/cart'>Cosul meu</a>
          {userData && <a href="/login">{userData.EmailClient}</a>}
        </div>
      </EmailCartContainer>

      {/* Container pentru itemele ofertei */}
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
            <OfferImage src={require('../Poze/pcZmeu.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>PRET: 1499,99 RON</Price>
              PC 2Gaming ZMEU Max, AMD Ryzen 3 3200G 3.6GHz, 8GB DDR4, 1TB SSD, AMD Radeon Vega 8, Iluminare RGB (
              <Discount>25% reducere</Discount>
              )
            </OfferDescription>
          </a>
        </OfferItem>
        <OfferItem>
          <a href='/zmeu'>
            <OfferImage src={require('../Poze/pcZmeu.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>PRET: 1499,99 RON</Price>
              PC 2Gaming ZMEU Max, AMD Ryzen 3 3200G 3.6GHz, 8GB DDR4, 1TB SSD, AMD Radeon Vega 8, Iluminare RGB (
              <Discount>25% reducere</Discount>
              )
            </OfferDescription>
          </a>
        </OfferItem>
        <OfferItem>
          <a href='/zmeu'>
            <OfferImage src={require('../Poze/pcZmeu.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>PRET: 1499,99 RON</Price>
              PC 2Gaming ZMEU Max, AMD Ryzen 3 3200G 3.6GHz, 8GB DDR4, 1TB SSD, AMD Radeon Vega 8, Iluminare RGB (
              <Discount>25% reducere</Discount>
              )
            </OfferDescription>
          </a>
        </OfferItem>
        <OfferItem>
          <a href='/zmeu'>
            <OfferImage src={require('../Poze/pcZmeu.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>PRET: 1499,99 RON</Price>
              PC 2Gaming ZMEU Max, AMD Ryzen 3 3200G 3.6GHz, 8GB DDR4, 1TB SSD, AMD Radeon Vega 8, Iluminare RGB (
              <Discount>25% reducere</Discount>
              )
            </OfferDescription>
          </a>
        </OfferItem>
        <OfferItem>
          <a href='/zmeu'>
            <OfferImage src={require('../Poze/pcZmeu.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>PRET: 1499,99 RON</Price>
              PC 2Gaming ZMEU Max, AMD Ryzen 3 3200G 3.6GHz, 8GB DDR4, 1TB SSD, AMD Radeon Vega 8, Iluminare RGB (
              <Discount>25% reducere</Discount>
              )
            </OfferDescription>
          </a>
        </OfferItem>
        <OfferItem>
          <a href='/zmeu'>
            <OfferImage src={require('../Poze/pcZmeu.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>PRET: 1499,99 RON</Price>
              PC 2Gaming ZMEU Max, AMD Ryzen 3 3200G 3.6GHz, 8GB DDR4, 1TB SSD, AMD Radeon Vega 8, Iluminare RGB (
              <Discount>25% reducere</Discount>
              )
            </OfferDescription>
          </a>
        </OfferItem>
        <OfferItem>
          <a href='/zmeu'>
            <OfferImage src={require('../Poze/pcZmeu.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>PRET: 1499,99 RON</Price>
              PC 2Gaming ZMEU Max, AMD Ryzen 3 3200G 3.6GHz, 8GB DDR4, 1TB SSD, AMD Radeon Vega 8, Iluminare RGB (
              <Discount>25% reducere</Discount>
              )
            </OfferDescription>
          </a>
        </OfferItem>
        
        

      </OfferItemsContainer>

      {/* Container pentru titlu */}
      <TitleContainer>
        <h2>CELE MAI BUNE OFERTE</h2>
      </TitleContainer>
    </div>
  );
}
