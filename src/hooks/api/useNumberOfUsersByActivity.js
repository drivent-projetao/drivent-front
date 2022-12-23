import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useNumberOfUsersByActivity(activityId) {
  const token = useToken();

  const {
    data: numberOfUsersByActivity,
    loading: numberOfUsersByActivityLoading,
    error: numberOfUsersByActivityError,
    act: getNumberOfUsersByActivity,
  } = useAsync(() => activityApi.getNumberOfUsersByActivity(token, activityId));

  return {
    numberOfUsersByActivity,
    numberOfUsersByActivityLoading,
    numberOfUsersByActivityError,
    getNumberOfUsersByActivity,
  };
}
