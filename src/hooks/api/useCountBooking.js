import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useCountBooking(roomId) {
  const token = useToken();

  const {
    data: booking,
    loading: bookingLoading,
    error: bookingError,
    act: countBooking,
  } = useAsync(() => bookingApi.countBooking(roomId, token));

  return {
    booking,
    bookingLoading, 
    bookingError,
    countBooking,
  };
}
