import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404'; 
import LivroRoutes from './livroRoutes';
import UsuarioRoutes from './usuarioRoutes'; 
import UsuarioDashboard from '../pages/usuarioDashboard';
import PrivateRoute from '../components/auth/PrivateRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} /> 
    <LivroRoutes /> 
    <UsuarioRoutes /> 
    <Route 
      path="/usuario-dashboard" 
      element={
        <PrivateRoute>
          <UsuarioDashboard />
        </PrivateRoute>
      } 
    /> 
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AppRoutes;