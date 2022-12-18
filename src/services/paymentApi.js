import api from './api';

export async function save(data, token) {
  console.log(data);
	
  const response = await api.post('/payments/process', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
//
