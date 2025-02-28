import { CADASTRO_SUCCESS, CADASTRO_ERROR, LOGIN_SUCCESS, LOGOUT, LOGIN_FAILURE } from './usuarioTypes';
import api from '../../api'; // ou onde você configurou o axios

// Ação para fazer o login
export const loginSuccess = (usuario) => ({
  type: LOGIN_SUCCESS,
  payload: usuario,
});

// Ação para falha no login
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Ação para fazer logout
export const logout = () => (dispatch) => {
  localStorage.removeItem('token'); // Remove o token do localStorage
  localStorage.removeItem('user');  // Remove o usuário do localStorage
  dispatch({ type: 'LOGOUT' });     // Despacha a ação de logout
};

// Ação de sucesso no cadastro
export const cadastroSuccess = (usuario) => ({
  type: CADASTRO_SUCCESS,
  payload: usuario,
});

// Ação de erro no cadastro
export const cadastroError = (error) => ({
  type: CADASTRO_ERROR,
  payload: error,
});

// Função assíncrona para cadastrar o usuário
export const cadastrarUsuario = (dadosUsuario) => async (dispatch) => {
  try {
    const response = await api.post('/api/usuarios/cadastrar', dadosUsuario);
    dispatch(cadastroSuccess(response.data));
    return response.data;
  } catch (error) {
    dispatch(cadastroError(error.response?.data || error.message));
    throw error;
  }
};

// Ação assíncrona para fazer login
export const loginUsuario = (email, password) => async (dispatch) => {
  try {
    const response = await api.post('/api/usuarios/login', { email, password });
    const { token, user } = response.data;

    // Salvar token no localStorage
    localStorage.setItem('token', token);

    // Atualizar o estado global
    dispatch(loginSuccess({ token, user }));
    return { token, user };
  } catch (error) {
    console.error('Erro ao fazer login:', error.response || error.message);
    dispatch(loginFailure(error.response?.data?.error || 'Erro ao fazer login.'));
    throw error;
  }
};
