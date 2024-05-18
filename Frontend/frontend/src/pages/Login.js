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
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 5px;
`;

const RegisterButton = styled(Button)`
  background-color: #007bff;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
          console.log(`Bine ai venit, ${loggedInUser.NumeClient}!`);
        } else {
          setError('Email sau parolă incorectă');
          setShowModal(true);
        }
      } else {
        setError('Eroare la autentificare. Vă rugăm să verificați datele introduse.');
        setShowModal(true);
      }
    } catch (error) {
      setError('Eroare la autentificare. Vă rugăm să încercați din nou mai târziu.');
      setShowModal(true);
    }
  };

  const handleRedirectToRegister = () => {
    window.location.href = 'http://localhost:3000/register';
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Autentificare</Button>
        <RegisterButton type="button" onClick={handleRedirectToRegister}>Înregistrare</RegisterButton>
      </LoginForm>
      <ModalOverlay visible={showModal} onClick={handleCloseModal} />
      <ModalContent visible={showModal}>
       
      </ModalContent>
    </Container>
  );
}
