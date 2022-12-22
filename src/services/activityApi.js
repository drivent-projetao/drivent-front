import api from './api';

export async function getActivitiesWithDates(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getNumberOfUsersByActivity(token, activityId) {
  const response = await api.get(`/activities/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
