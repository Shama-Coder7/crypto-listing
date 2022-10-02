import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import StockList from './components/StockList';
import ViewData from './components/ViewData';
import SaveData from './components/SaveData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<StockList />} />

          <Route path="/view" element={<ViewData />} />
          <Route path="/save" element={<SaveData />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
