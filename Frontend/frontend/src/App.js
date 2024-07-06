import './App.css';
import _ from 'lodash';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Zmeu from './pages/pcZmeu';
import Login from './pages/Login';
import Inregistrare from './pages/InregistrareCont';
import Calculatoare from './pages/Calculatoare';
import Console from './pages/Console';
import Laptop from './pages/Laptopuri';
import Componente from './pages/ComponentePc';
import HomeClient from './pages/HomeClient';
import CosClient from './pages/Cos';
import CartProvider from './pages/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App"> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/zmeu' element={<Zmeu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Inregistrare />} />
          <Route path='/calculatoare' element={<Calculatoare />} />
          <Route path='/console' element={<Console />} />
          <Route path='/laptop' element={<Laptop />} />
          <Route path='/componente' element={<Componente />} />
          <Route path='/homeclient' element={<HomeClient />} />
          <Route path='/cart' element={<CosClient />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
