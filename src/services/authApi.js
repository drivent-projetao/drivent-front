import api from './api';

export async function signIn(email, password) {
  const response = await api.post('/auth/sign-in', { email, password });
  return response.data;
}

export async function authSignIn(email) {
  const response = await api.post('/auth/auth-sign-in', { email });
  return response.data;
}
//
