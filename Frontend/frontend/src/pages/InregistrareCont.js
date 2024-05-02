import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Container = styled.div`
  background-color: #f0f5ff;
  height: 130vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterForm = styled.form`
  background-color: #007bff;
  padding: 60px;
  border-radius: 8px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PasswordInput = styled(Input)`
  font-family: inherit;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Inregistrare() {
  const [formData, setFormData] = useState({
    NumeClient: '',
    PrenumeClient: '',
    Adresa: '',
    EmailClient: '',
    NumarTelefon: '',
    ParolaCont: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim()
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const dataToSave = { ...formData };
      const response = await fetch('http://localhost:9000/api/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSave)
      });

      if (response.ok) {
        window.location.href = '/';
      } else {
        const errorMessage = await response.text();
        alert('Eroare la înregistrare: ' + errorMessage);
      }
    } catch (error) {
      alert('Eroare la înregistrare: ' + error.message);
    }
  };

  return (
    <Container>
      <Menu />
      <br />
      <br />
      <RegisterForm onSubmit={handleRegister}>
        <Input
          type="text"
          name="NumeClient"
          placeholder="Nume"
          value={formData.NumeClient}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="PrenumeClient"
          placeholder="Prenume"
          value={formData.PrenumeClient}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="Adresa"
          placeholder="Adresă"
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="EmailClient"
          placeholder="Email"
          value={formData.EmailClient}
          onChange={handleInputChange}
          required
        />
        <Input
          type="tel"
          name="NumarTelefon"
          placeholder="Număr de telefon"
          value={formData.NumarTelefon}
          onChange={handleInputChange}
          required
        />
        <PasswordInput
          type="password"
          name="ParolaCont"
          placeholder="Parolă"
          value={formData.ParolaCont}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          value={formData.ParolaCont}
          style={{ display: 'none' }}
          disabled
        />
        <Button type="submit">Înregistrare</Button>
      </RegisterForm>
    </Container>
  );
}
