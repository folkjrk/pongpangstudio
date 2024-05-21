import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './scences/HomePage/HomePage';
import UxUi from './scences/UX_UI/UX_UI';
import './App.css';
import Cursor from './components/Cursor/Cursor'

function App() {
  return (
    <div className="container">
      <Cursor/>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/UxUi" element={<UxUi/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
