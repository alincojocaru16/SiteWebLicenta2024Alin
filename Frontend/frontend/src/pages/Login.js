import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Container = styled.div`
  background-color: #f0f5ff; /* Albastru deschis aproape de alb */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  background-color: #fff;
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

const LogoContainer = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  width: 100px;
  height: 100px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  transform: scale(1.5);
`;

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Utilizatorul a încercat să se autentifice!');
    window.location.href = '/dashboard';
  };

  return (
    <Container>
      <Menu />
      <LoginForm onSubmit={handleLogin}>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Parolă" required />
        <Button type="submit">Autentificare</Button>
      </LoginForm>
    </Container>
  );
}
