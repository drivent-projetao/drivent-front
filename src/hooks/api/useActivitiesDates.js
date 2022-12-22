import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useActivitiesDates() {
  const token = useToken();

  const {
    data: activitiesDates,
    loading: activitiesDatesLoading,
    error: activitiesDatesError,
    act: getActivitiesDates,
  } = useAsync(() => activityApi.getActivitiesDates(token));

  return {
    activitiesDates,
    activitiesDatesLoading,
    activitiesDatesError,
    getActivitiesDates,
  };
}
