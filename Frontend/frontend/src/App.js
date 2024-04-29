import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import _ from 'lodash';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <div className="App"> 
      <Menu></Menu>
      <Routes>

        <Route path='/' element={<Home></Home>}/>

      </Routes>


    </div>
  );
}

export default App; 
