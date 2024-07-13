// src/pages/PcWhite.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #e6f0ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OfferItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 90%;
  max-width: 1200px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const OfferImage = styled.img`
  width: 50%;
  height: auto;
  margin-right: 20px;
`;

const OfferDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const OfferTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: red;
  margin-bottom: 10px;
  text-align: left;
`;

const OfferDescription = styled.p`
  margin: 0;
  font-weight: bold;
  max-width: 100%;
  word-wrap: break-word;
`;

const Discount = styled.span`
  color: red;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const PcWhiteN = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const item = {
      title: "PC Gaming Legendar White Hyper",
      price: "3699,99 RON",
      image: require('../Poze/pcWhite.jpg')
    };
    addToCart(item);
    navigate('/cart');
  };

  return (
    <Container>
      <OfferItem>
        <OfferImage src={require('../Poze/pcWhite.jpg')} alt="PC Gaming Legendar White Hyper" />
        <OfferDetails>
          <OfferTitle>PC Gaming Legendar White Hyper</OfferTitle>
          <Price>PRET: 3699,99 RON</Price>
          <OfferDescription>
            PC Gaming Legendar White Hyper, Intel i5-12400F 2.5GHz, 16GB DDR5, 1TB SSD, RTX 3050 8GB GDDR6, Iluminare RGB (
            <Discount>5% reducere</Discount>
            )
          </OfferDescription>
          
        </OfferDetails>
      </OfferItem>
    </Container>
  );
};

export default PcWhiteN;
