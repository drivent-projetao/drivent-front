import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useActivitiesWithDates() {
  const token = useToken();

  const {
    data: activitiesWithDates,
    loading: activitiesLoading,
    error: activitiesError,
    act: getActivities,
  } = useAsync(() => activityApi.getActivitiesWithDates(token));

  return {
    activitiesWithDates,
    activitiesLoading,
    activitiesError,
    getActivities,
  };
}
