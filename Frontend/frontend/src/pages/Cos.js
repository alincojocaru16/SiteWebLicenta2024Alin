// src/pages/CosClient.js
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { CartContext } from './CartContext'; // Ensure the correct path

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #e6f0ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px; /* Add some padding */
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  width: 100%;
  max-width: 1200px; /* Limit the width */
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
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; /* Align items to the left */
  margin-bottom: 20px; /* Add space between items */
  width: 100%; /* Take full width */
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const CartItemTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
`;

const CartItemPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-left: 20px;
  font-size: 16px;
  &:hover {
    background-color: #ff0000;
  }
`;

const PlaceOrderButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 30px;
  align-self: center;
  &:hover {
    background-color: #45a049;
  }
`;

const CosClient = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [localCartItems, setLocalCartItems] = useState(cartItems);

  const handlePlaceOrder = () => {
    alert("Order placed!");
    setLocalCartItems([]); // Clear the local cart items
  };

  const handleRemoveFromCart = (index) => {
    const updatedItems = localCartItems.filter((item, i) => i !== index);
    setLocalCartItems(updatedItems);
  };

  return (
    <Container>
      <Menu />
      {localCartItems.length > 0 ? (
        <CartContainer>
          {localCartItems.map((item, index) => (
            <CartItem key={index}>
              <OfferImage src={item.image} alt={item.title} />
              <CartItemDetails>
                <CartItemTitle>{item.title}</CartItemTitle>
                <CartItemPrice>{item.price}</CartItemPrice>
              </CartItemDetails>
              <RemoveButton onClick={() => handleRemoveFromCart(index)}>Sterge</RemoveButton>
            </CartItem>
          ))}
          <PlaceOrderButton onClick={handlePlaceOrder}>Plaseaza Comanda</PlaceOrderButton>
        </CartContainer>
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
