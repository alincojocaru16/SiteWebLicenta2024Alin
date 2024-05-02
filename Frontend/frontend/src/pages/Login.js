import React, { useState } from 'react';
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
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Apel către endpoint-ul de autentificare din backend
      const response = await fetch('http://localhost:9000/api/client/login', {
        method: 'POST', // Modificăm metoda către POST
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) // Trimiterea datelor în corpul cererii
      });

      if (response.ok) {
        const data = await response.json();
        console.log('data:', data);
        if (data) {
          console.log('Autentificare reușită!');
          window.location.href = '/'; // Redirecționează către pagina de acasă
        } else {
          alert('Email sau parolă incorectă');
        }
      } else {
        console.error('Eroare la autentificare:', response.statusText);
        alert('Eroare la autentificare. Vă rugăm să verificați datele introduse.');
      }
    } catch (error) {
      console.error('Eroare la autentificare:', error);
      alert('Eroare la autentificare. Vă rugăm să încercați din nou mai târziu.');
    }
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
      </LoginForm>
    </Container>
  );
}
