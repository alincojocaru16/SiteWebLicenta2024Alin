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
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row; /* Așezare pe orizontală */
  align-items: center;
  padding: 10px;
  z-index: 1;
  gap: 10px; /* Spațiu între "Cosul meu" și adresa de email */

  a {
    text-decoration: none; /* Elimină sublinierea */
    color: inherit; /* Păstrează culoarea textului moștenită */
  }
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
  flex-wrap: wrap; /* Permite elementelor să treacă pe un nou rând */
  justify-content: flex-start; /* Așază elementele la începutul containerului */
  gap: 20px; /* Spațiu între elementele din container */
  margin-top: 520px; /* Margin de sus */
`;

const OfferItem = styled.div`
width: calc(16.67% - 10px); /* Asigură 6 elemente pe un rând cu spațiu între ele */
  padding: 10px; /* Padding pentru a separa conținutul */
  background-color: #f9f9f9; /* Culoare de fundal pentru element */
  border-radius: 8px; /* Colțuri rotunjite */
  margin-left: 13px;
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
const PageContainer = styled.div`
  background-color: #f0f5ff; /* Setează culoarea de fundal */
  min-height: 100vh; /* Asigură că se extinde pe înălțimea întregii pagini */
  padding-bottom: 20px; /* Adaugă padding în partea de jos pentru a preveni suprapunerea conținutului */
`;

export default function HomeClient(props) {
  const { userData } = props;

  return (
    <div>
      <PageContainer>
      {/* Container pentru meniu */}
      <MenuContainer>
      </MenuContainer>

      {/* Container pentru email și coș */}
      <EmailCartContainer>
        <div>
          <a href='/cart'>COSUL MEU</a>
        </div>
        {userData && (
          <div>
            <a href="/login">{userData.EmailClient}</a>
          </div>
        )}
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

    
      <TitleContainer>
        <h2>CELE MAI BUNE OFERTE</h2>
      </TitleContainer>
      </PageContainer>
    </div>
  );
}
