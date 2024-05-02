import React, { useState } from 'react';
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
      [name]: value.trim() // Utilizează metoda trim() pentru a elimina spațiile goale de la început și sfârșit
    }));
    console.log('Input changed:', name, value); // Adăugare console.log pentru a afișa schimbările în valorile câmpurilor de intrare
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Salvarea datelor într-o variabilă
      const dataToSave = { ...formData };
      console.log('Data to save:', dataToSave); // Adăugare console.log pentru a afișa datele trimise către backend

      // Trimiterea datelor către backend
      const response = await fetch('http://localhost:9000/api/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSave) // Trimiterea datelor salvate în variabilă
      });
      
      console.log('Response:', response); // Adăugare console.log pentru a afișa răspunsul de la server

      if (response.ok) {
        console.log('Utilizatorul a fost înregistrat cu succes!');
        window.location.href = '/'; // Redirecționare către pagina principală după înregistrare
      } else {
        const errorMessage = await response.text();
        console.error('Eroare la înregistrare:', errorMessage);
        // Afișează un mesaj de eroare în interfața utilizatorului
        alert('Eroare la înregistrare: ' + errorMessage);
      }
    } catch (error) {
      console.error('Eroare la înregistrare:', error);
      // Afișează un mesaj de eroare în interfața utilizatorului
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
  value={formData.Adresa}
  onChange={handleInputChange}
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
          name="ParolaCont" // Schimbat de la "Parola" la "ParolaCont"
          placeholder="Parolă"
          value={formData.ParolaCont} // Schimbat de la "Parola" la "ParolaCont"
          onChange={handleInputChange}
          required
        /> 
        <Input
          type="text"
          value={formData.ParolaCont} // Schimbat de la "Parola" la "ParolaCont"
          style={{ display: 'none' }}
          disabled
        />
        <Button type="submit">Register</Button>
      </RegisterForm>
    </Container>
  );
}
