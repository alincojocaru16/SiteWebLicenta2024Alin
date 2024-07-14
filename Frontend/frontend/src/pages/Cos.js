import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuClient from './MenuClient';
import { CartContext } from './CartContext';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #e6f0ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
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
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
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

const TotalPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  align-self: center;
`;

const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  width: 100%;
  max-width: 600px;
  align-self: center;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #45a049;
  }
`;

const DiscountButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  align-self: center;
  &:hover {
    background-color: #0056b3;
  }
`;

const CosClient = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
    paymentMethod: 'cash'
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState('');
  const [mathQuestion, setMathQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [discountApplied, setDiscountApplied] = useState(false);

  useEffect(() => {
    const calculateTotal = () => {
      const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(',', '.').replace(/[^\d.]/g, ''));
        return sum + price;
      }, 0);
      setTotalPrice(total);
    };

    calculateTotal();
  }, [cartItems]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePlaceOrder = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, address, email, phoneNumber, paymentMethod } = formData;

    if (firstName && lastName && address && email && phoneNumber && paymentMethod) {
      clearCart();
      setShowForm(false);
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phoneNumber: '',
        paymentMethod: 'cash'
      });

      alert('Multumim de comanda! Produsele vor ajunge la dumneavoastra in 2-3 zile lucratoare!');
    } else {
      alert('Please fill in all the details.');
    }
  };

  const generateMathQuestion = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setMathQuestion(`Rezolva: ${a} * ${b}`);
    setCorrectAnswer(a * b);
  };

  const handleDiscount = () => {
    if (attemptsLeft > 0 && !discountApplied) {
      generateMathQuestion();
      const userAnswer = parseInt(prompt(mathQuestion));

      if (userAnswer === correctAnswer) {
        setDiscount(0.1); // 10% reducere
        setDiscountCode('REDUCERE10');
        alert('Felicitari! Ai castigat un cod de reducere: REDUCERE10');
      } else {
        setAttemptsLeft(attemptsLeft - 1);
        alert(`Raspuns gresit. Ai ${attemptsLeft - 1} incercari ramase.`);
      }
    } else if (discountApplied) {
      alert('Codul de reducere a fost deja aplicat.');
    } else {
      alert('Ai epuizat toate incercarile.');
    }
  };

  const applyDiscount = () => {
    if (discountCode === 'REDUCERE10' && !discountApplied) {
      setTotalPrice(totalPrice * (1 - discount));
      setDiscountApplied(true);
      alert('Cod de reducere aplicat cu succes!');
    } else {
      alert('Cod de reducere invalid sau deja aplicat.');
    }
  };

  return (
    <Container>
      <MenuClient />
      {cartItems.length > 0 ? (
        <CartContainer>
          {cartItems.map((item, index) => (
            <CartItem key={index}>
              <OfferImage src={item.image} alt={item.title} />
              <CartItemDetails>
                <CartItemTitle>{item.title}</CartItemTitle>
                <CartItemPrice>{item.price}</CartItemPrice>
              </CartItemDetails>
              <RemoveButton onClick={() => removeFromCart(index)}>Sterge</RemoveButton>
            </CartItem>
          ))}
          <TotalPrice>Total: {totalPrice.toFixed(2)} RON</TotalPrice>
          <DiscountButton onClick={handleDiscount}>Rezolva Problema de Matematica</DiscountButton>
          {discountCode && (
            <OrderForm onSubmit={(e) => { e.preventDefault(); applyDiscount(); }}>
              <FormField>
                <Label htmlFor="discountCode">Cod de Reducere</Label>
                <Input
                  type="text"
                  id="discountCode"
                  name="discountCode"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
              </FormField>
              <SubmitButton type="submit">Aplica Reducerea</SubmitButton>
            </OrderForm>
          )}
          <PlaceOrderButton onClick={handlePlaceOrder}>Plaseaza Comanda</PlaceOrderButton>
          {showForm && (
            <OrderForm onSubmit={handleSubmit}>
              <FormField>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <Label htmlFor="paymentMethod">Payment Method</Label>
                <Select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                >
                  <option value="cash">Cash</option>
                  <option value="card">Card</option>
                </Select>
              </FormField>
              <SubmitButton type="submit">Plaseaza</SubmitButton>
            </OrderForm>
          )}
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
