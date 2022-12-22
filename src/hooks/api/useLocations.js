import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useLocations() {
  const token = useToken();

  const {
    data: locations,
    loading: locationsLoading,
    error: locationsError,
    act: getLocations,
  } = useAsync((date) => activityApi.getActivitiesByLocation(date, token));

  return {
    locations,
    locationsLoading,
    locationsError,
    getLocations,
  };
}
