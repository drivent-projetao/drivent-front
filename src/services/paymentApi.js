import api from './api';

export async function save(data, token) {	
  const response = await api.post('/payments/process', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
//
