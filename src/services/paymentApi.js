import api from './api';

export async function createPayment(token, paymentData) {
  console.log(paymentData);
	
  const response = await api.post('/payments/process', paymentData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
//
