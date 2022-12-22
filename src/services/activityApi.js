import api from './api';

export async function getActivitiesDates(token) {
  const response = await api.get('/activities/dates', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getActivitiesByLocation(date, token) {
  const response = await api.get(`/activities/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
//
