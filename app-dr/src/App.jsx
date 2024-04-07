

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./modulos/home.jsx";
import Empleados from "./modulos/empleados.jsx";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empleados" element={<Empleados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
