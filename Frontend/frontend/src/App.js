// src/App.js
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Zmeu from './pages/pcZmeu';
import PcBlue from './pages/pcBlue';
import Login from './pages/Login';
import Inregistrare from './pages/InregistrareCont';
import Calculatoare from './pages/Calculatoare';
import Console from './pages/Console';
import Laptop from './pages/Laptopuri';
import Componente from './pages/ComponentePc';
import HomeClient from './pages/HomeClient';
import CosClient from './pages/Cos';
import PcWhite from './pages/PcWhite';
import PcBalaur from './pages/PcBalaur'; 
import { CartProvider } from './pages/CartContext';
import PcGreuceanu from './pages/PcGreuceanu'; 
import PcZmeuExtra from './pages/PcZmeuExtra';// Ensure the correct path
import PS5 from './pages/PS5';
import Xbox from './pages/Xbox'; 
import AsusTuf from './pages/AsusTuf';
import AsusVivo from './pages/AsusVivo'; 
import PlacaVideo from './pages/PlacaVideo'; 
import ProcesorIntel from './pages/ProcesorIntel';
import SursaSegotep from './pages/SursaSegotep';
function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/zmeu' element={<Zmeu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pcBlue' element={<PcBlue />} />
          <Route path='/register' element={<Inregistrare />} />
          <Route path='/calculatoare' element={<Calculatoare />} />
          <Route path='/PcZmeuExtra' element={<PcZmeuExtra />} /> 
          <Route path='/SursaSegotep' element={<SursaSegotep />} /> 
          <Route path='/console' element={<Console />} />
          <Route path='/laptop' element={<Laptop />} />
          <Route path='/componente' element={<Componente />} />
          <Route path='/ProcesorIntel' element={<ProcesorIntel />} />
          <Route path='/homeclient' element={<HomeClient />} />
          <Route path='/pcWhite' element={<PcWhite />} />
          <Route path='/AsusTuf' element={<AsusTuf />} /> 
          <Route path='/PcBalaur' element={<PcBalaur />} /> 
          <Route path='/PlacaVideo' element={<PlacaVideo />} /> 
          <Route path='/AsusVivo' element={<AsusVivo />} />
          <Route path='/PcGreuceanu' element={<PcGreuceanu />} /> 
          <Route path='/PS5' element={<PS5 />} />
          <Route path='/cart' element={<CosClient />} />
          <Route path='/Xbox' element={<Xbox />} />
          
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
