import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import HomeClient from './HomeClient';

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
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

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
        if (userData && userData.length > 0) {
          const loggedInUser = userData.find(user => user.EmailClient === email);
          setUserData(loggedInUser);
          setIsLoggedIn(true);
        } else {
          setError('Email sau parolă incorectă');
        }
      } else {
        setError('Eroare la autentificare. Vă rugăm să verificați datele introduse.');
      }
    } catch (error) {
      setError('Eroare la autentificare. Vă rugăm să încercați din nou mai târziu.');
    }
  };

  return (
    <Container>
      <Menu />
      {!isLoggedIn ? (
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
          {error && <p>{error}</p>}
        </LoginForm>
      ) : (
        <HomeClient userData={userData} />
      )}
    </Container>
  );
}
