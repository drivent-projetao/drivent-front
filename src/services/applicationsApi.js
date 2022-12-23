import api from './api';

export async function save(body, token) {
  const response = await api.post('/applications', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function getApplications(token) {
  const response = await api.get('/applications', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export async function getApplication(activityId, token) {
  const response = await api.get(`/applications/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export async function deleteApplication(activityId, token) {
  const response = await api.delete(`/applications/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
