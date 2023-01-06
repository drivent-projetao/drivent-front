import useAsync from '../useAsync';

import * as authApi from '../../services/authApi';

export default function useAuthSignIn() {
  const {
    loading: authSignInLoading,
    error: authSignInError,
    act: authSignIn
  } = useAsync(authApi.authSignIn, false);

  return {
    authSignInLoading,
    authSignInError, 
    authSignIn
  };
}
