import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu';

// Container pentru meniu
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
  background-color: #e6f0ff; /* Asigură-te că fundalul este același */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

// Container pentru email și coș
const EmailCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Spațiu între "Cosul meu" și adresa de email */
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2; /* Asigură-te că este peste alte elemente */
  a {
    text-decoration: none; /* Elimină sublinierea */
    color: inherit; /* Păstrează culoarea textului moștenită */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

// Container pentru titlu
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
  flex-wrap: wrap; /* Permite elementelor să treacă pe un nou rând */
  justify-content: space-between; /* Așază elementele la începutul, mijlocul și sfârșitul containerului */
  gap: 20px; /* Spațiu între elementele din container */
  margin-top: 200px; /* Margin de sus */
`;

const OfferItem = styled.div`
  width: calc(20% - 20px); /* Asigură 5 elemente pe un rând cu spațiu între ele */
  padding: 10px; /* Padding pentru a separa conținutul */
  background-color: #f9f9f9; /* Culoare de fundal pentru element */
  border-radius: 8px; /* Colțuri rotunjite */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Umbra pentru efect de adâncime */
  transition: transform 0.3s ease; /* Tranziție pentru efect de hover */
  text-align: center; /* Center-align text */
  &:hover {
    transform: translateY(-5px); /* Efect de ridicare la hover */
  }

  @media (max-width: 1200px) {
    width: calc(25% - 20px); /* 4 elemente pe un rând */
  }
  @media (max-width: 992px) {
    width: calc(33.33% - 20px); /* 3 elemente pe un rând */
  }
  @media (max-width: 768px) {
    width: calc(50% - 20px); /* 2 elemente pe un rând */
  }
  @media (max-width: 576px) {
    width: calc(100% - 20px); /* 1 element pe un rând */
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

const PageContainer = styled.div`
  background-color: #e6f0ff; /* Setează culoarea de fundal pentru a se potrivi cu cea a componentelor */
  min-height: 100vh; /* Asigură că se extinde pe înălțimea întregii pagini */
  padding-bottom: 20px; /* Adaugă padding în partea de jos pentru a preveni suprapunerea conținutului */
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
  position: relative;
  top: 20px; /* Ajustează poziția pentru a fi sub meniu */
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
  max-height: 80px; /* Setează o înălțime maximă pentru imagine */
`;

const RightImage = styled.img`
  position: absolute;
  top: 25%;
  left: 60%;
  transform: translateX(50%);
  max-height: 80px; /* Setează o înălțime maximă pentru imagine */
`;

export default function HomeClient() {
  const location = useLocation();
  const { userData } = location.state;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PageContainer>
      <Menu />
      <Background />
      {/* Container pentru meniu */}
      <MenuContainer>
        <HamburgerMenu onClick={toggleMenu}>
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
              <div>
                <Link to="/login">{userData.ClientId}</Link>
              </div>
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
          <a href='/PcBlue'>
            <OfferImage src={require('../Poze/pcBlue.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>5398,99 RON</Price>
              PC Gaming Blue Legendar Ultra, Intel i5-13400F 2.5GHz, 32GB DDR4, 1TB SSD, RTX 4060 8GB GDDR6, Illuminare RGB (
              <Discount>15% reducere</Discount>
              )
            </OfferDescription>
          </a>
        </OfferItem>

        <OfferItem>
          <a href='/PcWhite'>
            <OfferImage src={require('../Poze/pcWhite.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>3699,99 RON</Price>
              PC Gaming Legendar White Hyper, Intel i5-12400F 2.5GHz, 16GB DDR5, 1TB SSD, RTX 3050 8GB GDDR6, Iluminare RGB (
              <Discount>5% reducere</Discount>
              )
            </OfferDescription>
          </a>
        </OfferItem>
        <OfferItem>
          <a href='/AsusTuf'>
            <OfferImage src={require('../Poze/laptopAsusTuf.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>3498,99 RON</Price>
              Laptop ASUS Gaming 15.6'' TUF F15 FX507ZC4, FHD 144Hz, Procesor Intel® Core™ i5-12500H (18M Cache, up to 4.50 GHz), 16GB DDR4, 512GB SSD, GeForce RTX 3050 4GB, No OS, Mecha Gray (
              <Discount>9% reducere</Discount>
              )
            </OfferDescription>
          </a>
        </OfferItem>

       
        <OfferItem>
          <a href='/PS5'>
            <OfferImage src={require('../Poze/ps5Bun.jpg')} alt="PC ZMEU" />
            <OfferDescription>
              <Price>2699,99 RON</Price>
              Consola Sony PlayStation 5 Slim Disk Edition 1TB White (
              <Discount>5% reducere</Discount>
              )
            </OfferDescription>
          </a>
        </OfferItem>
       
        
      </OfferItemsContainer>
    </PageContainer>
  );
}
