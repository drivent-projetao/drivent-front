import api from './api';

export async function getHotels(token) {
  const response = await api.get('/hotels/info', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
//
