// src/App.js
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Zmeu from './pages/pcZmeu';
import ZmeuN from './pages/pcZmeuN';
import PcBlue from './pages/pcBlue';
import PcBlueN from './pages/pcBlueN';
import Login from './pages/Login';
import Inregistrare from './pages/InregistrareCont';
import Calculatoare from './pages/Calculatoare';
import Console from './pages/Console';
import Laptop from './pages/Laptopuri';
import Componente from './pages/ComponentePc';
import HomeClient from './pages/HomeClient';
import CosClient from './pages/Cos';
import PcWhite from './pages/PcWhite';
import PcWhiteN from './pages/PcWhiteN';
import PcBalaur from './pages/PcBalaur'; 
import PcBalaurN from './pages/PcBalaurN';
import { CartProvider } from './pages/CartContext';
import PcGreuceanu from './pages/PcGreuceanu'; 
import PcGreuceanuN from './pages/PcGreuceanuN';
import PcZmeuExtra from './pages/PcZmeuExtra';
import PcZmeuExtraN from './pages/PcZmeuExtraN';// Ensure the correct path
import PS5 from './pages/PS5';
import PS5N from './pages/PS5N';
import Xbox from './pages/Xbox'; 
import XboxN from './pages/XboxN';
import AsusTuf from './pages/AsusTuf';
import AsusTufN from './pages/AsusTufN';
import AsusVivo from './pages/AsusVivo'; 
import AsusVivoN from './pages/AsusVivoN';
import PlacaVideo from './pages/PlacaVideo'; 
import PlacaVideoN from './pages/PlacaVideoN';
import ProcesorIntel from './pages/ProcesorIntel';
import ProcesorIntelN from './pages/ProcesorIntelN';
import SursaSegotep from './pages/SursaSegotep';
import SursaSegotepN from './pages/SursaSegotepN';
import ComponenteClient from './pages/ComponentePcClient';
import ConsoleClient from './pages/ConsoleClient';
import CalculatoareClient from './pages/CalculatoareClient';
import LaptopClient from './pages/LaptopuriClient';
function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/zmeu' element={<Zmeu />} />
          <Route path='/zmeuN' element={<ZmeuN />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pcBlue' element={<PcBlue />} />
          <Route path='/pcBlueN' element={<PcBlueN />} />
          <Route path='/register' element={<Inregistrare />} />
          <Route path='/calculatoare' element={<Calculatoare />} />
          <Route path='/calculatoareC' element={<CalculatoareClient />} />
          <Route path='/PcZmeuExtra' element={<PcZmeuExtra />} /> 
          <Route path='/PcZmeuExtraN' element={<PcZmeuExtraN />} /> 
          <Route path='/SursaSegotep' element={<SursaSegotep />} /> 
          <Route path='/SursaSegotepN' element={<SursaSegotepN />} /> 
          <Route path='/console' element={<Console />} />
          <Route path='/consoleC' element={<ConsoleClient />} />
          <Route path='/laptop' element={<Laptop />} />
          <Route path='/laptopC' element={<LaptopClient />} />
          <Route path='/componente' element={<Componente />} />
          <Route path='/componenteC' element={<ComponenteClient />} />
          <Route path='/ProcesorIntel' element={<ProcesorIntel />} />
          <Route path='/ProcesorIntelN' element={<ProcesorIntelN />} />
          <Route path='/homeclient' element={<HomeClient />} />
          <Route path='/pcWhite' element={<PcWhite />} />
          <Route path='/pcWhiteN' element={<PcWhiteN />} />
          <Route path='/AsusTuf' element={<AsusTuf />} /> 
          <Route path='/PcBalaur' element={<PcBalaur />} /> 
          <Route path='/PlacaVideo' element={<PlacaVideo />} /> 
          <Route path='/AsusVivo' element={<AsusVivo />} />
          <Route path='/PcGreuceanu' element={<PcGreuceanu />} /> 
          <Route path='/PS5' element={<PS5 />} />

          <Route path='/AsusTufN' element={<AsusTufN />} /> 
          <Route path='/PcBalaurN' element={<PcBalaurN />} /> 
          <Route path='/PlacaVideoN' element={<PlacaVideoN />} /> 
          <Route path='/AsusVivoN' element={<AsusVivoN />} />
          <Route path='/PcGreuceanuN' element={<PcGreuceanuN />} /> 
          <Route path='/PS5N' element={<PS5N />} />

          <Route path='/cart' element={<CosClient />} />
          <Route path='/Xbox' element={<Xbox />} />
          <Route path='/XboxN' element={<XboxN />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
