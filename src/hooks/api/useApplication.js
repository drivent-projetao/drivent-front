import useAsync from '../useAsync';
import useToken from '../useToken';

import * as applicationApi from '../../services/applicationsApi';

export default function useApplications() {
  const token = useToken();

  const {
    data: application,
    loading: applicationLoading,
    error: applicationError,
    act: getApplications,
  } = useAsync(() => applicationApi.getApplications(token));

  return {
    application,
    applicationLoading, 
    applicationError,
    getApplications,
  };
}
