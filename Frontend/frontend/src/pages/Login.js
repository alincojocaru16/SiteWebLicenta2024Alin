import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importă hook-ul useNavigate
import styled from 'styled-components';
import Menu from './Menu';

const Container = styled.div`
  background-color: #f0f5ff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  background-color: #007bff;
  padding: 50px;
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

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px; /* Adaugă spațiu între butoane */
`;

const RegisterButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook pentru navigare

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/api/client/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const userData = await response.json();
        const loggedInUser = userData.find(user => user.EmailClient === email && user.ParolaCont === password);

        if (loggedInUser) {
          navigate('/homeClient', { state: { userData: loggedInUser } });
        } else {
          setError('Email sau parolă incorectă');
        }
      } else {
        setError('Email sau parolă incorectă');
      }
    } catch (error) {
      setError('Eroare la autentificare. Vă rugăm să încercați din nou mai târziu.');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirecționează către pagina de înregistrare
  };

  return (
    <Container>
      <Menu />
      <LoginForm onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Parolă"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Autentificare</Button>
        <RegisterButton type="button" onClick={handleRegisterRedirect}>
          Înregistrare
        </RegisterButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoginForm>
    </Container>
  );
}
