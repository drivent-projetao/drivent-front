import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useHotelById(hotelId) {
  const token = useToken();

  const {
    data: hotel,
    loading: hotelLoading,
    error: hotelError,
    act: getHotelById,
  } = useAsync(() => hotelApi.getHotelById(hotelId, token));

  return {
    hotel,
    hotelLoading,
    hotelError,
    getHotelById,
  };
}
