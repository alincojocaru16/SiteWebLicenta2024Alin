import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MenuClient from './MenuClient';

const PageContainer = styled.div`
  background-color: #e6f0ff;
  min-height: 100vh;
  padding-bottom: 20px;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 1;
  background-color: #e6f0ff;
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 4px 0;
`;

const EmailCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const LogoutButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #ff0000;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  top: 130px;
  left: 0;
  right: 0;
  text-align: center;
  color: red;
`;

const OfferItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 200px;
`;

const OfferItem = styled.div`
  width: calc(20% - 20px);
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 1200px) {
    width: calc(25% - 20px);
  }
  @media (max-width: 992px) {
    width: calc(33.33% - 20px);
  }
  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 576px) {
    width: calc(100% - 20px);
  }
`;

const OfferImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const OfferDescription = styled.div`
  margin: 0;
  font-weight: bold;
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

const SearchBar = styled.div`
  position: relative;
  top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
  margin-top: 30px;
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
  margin-top: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 10px;
    margin-left: 5px;
  }
`;

const LeftImage = styled.img`
  position: absolute;
  top: 25%;
  right: 60%;
  transform: translateX(-50%);
  max-height: 80px;
`;

const RightImage = styled.img`
  position: absolute;
  top: 25%;
  left: 60%;
  transform: translateX(50%);
  max-height: 80px;
`;

export default function HomeClient() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData } = location.state || {};

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <PageContainer>
      <MenuClient />
      <MenuContainer>
        <HamburgerMenu>
          <Bar />
          <Bar />
          <Bar />
        </HamburgerMenu>
        <EmailCartContainer>
          <div>
            <Link to='/cart'>COSUL MEU</Link>
          </div>
          {userData && (
            <>
              <div>
                <Link to="/login">{userData.EmailClient}</Link>
              </div>
              <LogoutButton onClick={handleLogout}>Deconectare</LogoutButton>
            </>
          )}
        </EmailCartContainer>
      </MenuContainer>

      <SearchBar>
        <SearchInput type="text" placeholder="Caută produsul" />
        <SearchButton>Caută</SearchButton>
      </SearchBar>

      <LeftImage src={require('../Poze/superOferta.png')} alt="Super Oferta" />
      <RightImage src={require('../Poze/superOferta.png')} alt="Super Oferta" />
      <TitleContainer>
        <h2>CELE MAI BUNE OFERTE</h2>
      </TitleContainer>

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
          <Link to='/PcBlue'>
            <OfferImage src={require('../Poze/pcBlue.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>5398,99 RON</Price>
              PC Gaming Blue Legendar Ultra, Intel i5-13400F 2.5GHz, 32GB DDR4, 1TB SSD, RTX 4060 8GB GDDR6, Illuminare RGB (
              <Discount>15% reducere</Discount>
              )
            </OfferDescription>
          </Link>
        </OfferItem>
        <OfferItem>
          <Link to='/PcWhite'>
            <OfferImage src={require('../Poze/pcWhite.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>3699,99 RON</Price>
              PC Gaming Legendar White Hyper, Intel i5-12400F 2.5GHz, 16GB DDR5, 1TB SSD, RTX 3050 8GB GDDR6, Iluminare RGB (
              <Discount>5% reducere</Discount>
              )
            </OfferDescription>
          </Link>
        </OfferItem>
        <OfferItem>
          <Link to='/AsusTuf'>
            <OfferImage src={require('../Poze/laptopAsusTuf.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>3498,99 RON</Price>
              Laptop ASUS Gaming 15.6'' TUF F15 FX507ZC4, FHD 144Hz, Procesor Intel® Core™ i5-12500H (18M Cache, up to 4.50 GHz), 16GB DDR4, 512GB SSD, GeForce RTX 3050 4GB, No OS, Mecha Gray (
              <Discount>9% reducere</Discount>
              )
            </OfferDescription>
          </Link>
        </OfferItem>
        <OfferItem>
          <Link to='/PS5'>
            <OfferImage src={require('../Poze/ps5Bun.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>2699,99 RON</Price>
              Consola Sony PlayStation 5 Slim Disk Edition 1TB White (
              <Discount>5% reducere</Discount>
              )
            </OfferDescription>
          </Link>
        </OfferItem>
      </OfferItemsContainer>
    </PageContainer>
  );
}
