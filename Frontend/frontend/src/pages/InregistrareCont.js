import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Container = styled.div`
  background-color: #f0f5ff; /* Culoare albastră */
  height: 130vh; /* Înălțimea containerului pe întreaga înălțime a ecranului */
  display: flex;
  justify-content: center; /* Aliniere centrul orizontal */
  align-items: center; /* Aliniere centru vertical */
`;

const RegisterForm = styled.form`
  background-color: #007bff; /* Fundal albastru pentru formular */
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

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Inregistrare() {
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // Aici puteți adăuga logica pentru înregistrare și trimiteți datele către server
    console.log('Datele introduse sunt:', data);
    // După înregistrare, puteți redirecționa utilizatorul către o altă pagină
    window.location.href = '/dashboard'; // Exemplu de redirecționare către pagina de bord
  };

  return (
    <Container>
        <Menu></Menu>
      <br />
      <br />
      <RegisterForm onSubmit={handleRegister}>
        <Input type="text" name="NumeClient" placeholder="Nume" required />
        <Input type="text" name="PrenumeClient" placeholder="Prenume" required />
        <Input type="text" name="Adresa" placeholder="Adresă" required />
        <Input type="email" name="EmailClient" placeholder="Email" required />
        <Input type="tel" name="NumarTelefon" placeholder="Număr de telefon" required />
        <Input type="password" name="Parola" placeholder="Parolă" required />
        <Button type="submit">Register</Button>
      </RegisterForm>
    </Container>
  );
}
