// src/pages/CosClient.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { CartContext } from './CartContext';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #e6f0ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Message = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const OfferImage = styled.img`
  width: 15%;
  height: auto;
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CosClient = () => {
  const { cartItem } = useContext(CartContext);

  return (
    <Container>
      <Menu />
      {cartItem ? (
        <CartItem>
          <Message>{cartItem.title}</Message>
          <OfferImage src={cartItem.image} alt={cartItem.title} />
        </CartItem>
      ) : (
        <>
          <Message>COSUL ESTE GOL</Message>
          <OfferImage src={require('../Poze/cos.jpg.png')} alt="Cos Gol" />
        </>
      )}
    </Container>
  );
};

export default CosClient;
