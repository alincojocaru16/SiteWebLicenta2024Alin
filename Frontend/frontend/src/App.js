import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import _ from 'lodash';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Zmeu from './pages/pcZmeu';
import Login from './pages/Login';
import Inregistrare from './pages/InregistrareCont';
import Calculatoare from './pages/Calculatoare';
import Console from './pages/Console';
import Laptop from './pages/Laptopuri';
import Componente from './pages/ComponentePc';
function App() {
  return (
    <div className="App"> 
      {/* <Menu></Menu> */}
      <Routes>

        <Route path='/' element={<Home></Home>}/>
        <Route path='/zmeu' element={<Zmeu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Inregistrare />} />
        <Route path='/calculatoare' element={<Calculatoare/>} />
        <Route path='/console' element={<Console/>} />
        <Route path='/laptop' element={<Laptop/>} />
        <Route path='/componente' element={<Componente/>} />
      </Routes>


    </div>
  );
}

export default App; 
