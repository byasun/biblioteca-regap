import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';  // Importe a página de cadastro
import UserDashboard from './pages/usuarioDashboard';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) return <div>Carregando...</div>;

  console.log("Autenticado:", isAuthenticated);

  if (!isAuthenticated) {
    loginWithRedirect();
    return <div>Redirecionando para login...</div>;
  }

  return children;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cadastro" element={<CadastroUsuario />} />  {/* Adicionando a rota de cadastro */}
    <Route 
      path="/dashboard" 
      element={
        <PrivateRoute>
          <usuarioDashboard />
        </PrivateRoute>
      } 
    />
  </Routes>
);

export default AppRoutes;
