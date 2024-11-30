// src/App.js
import React from 'react';
import GlobalStyles from './styles/global/GlobalStyles';  // Estilos globais
import NavbarStyles from './styles/components/NavbarStyles';  // Estilos para a Navbar
import ButtonStyles from './styles/components/ButtonStyles';  // Estilos para botões
import Navbar from './styles/layout/Navbar';  // Componente Navbar
import AppRoutes from './routes';  // Rotas principais

const App = () => (
  <>
    <GlobalStyles />
    <NavbarStyles />
    <ButtonStyles />
    <Navbar />
    <AppRoutes />  {/* Renderiza as rotas dentro do AppRoutes */}
  </>
);

export default App;
