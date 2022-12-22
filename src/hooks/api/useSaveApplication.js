import useAsync from '../useAsync';
import useToken from '../useToken';

import * as applicationApi from '../../services/applicationsApi';

export default function useSaveApplication() {
  const token = useToken();
  
  const {
    loading: saveApplicationLoading,
    error: saveApplicationError,
    act: saveApplication,
  } = useAsync((data) => applicationApi.save(data, token), false);
  
  return {
    saveApplicationLoading,
    saveApplicationError,
    saveApplication,
  };
}
