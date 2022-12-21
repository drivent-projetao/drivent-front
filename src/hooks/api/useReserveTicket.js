import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useReserveTicket() {
  const token = useToken();

  const {
    loading: reserveTicketLoading,
    error: reserveTicketError,
    act: reserveTicket,
  } = useAsync((data) => ticketApi.postTicket(data, token), false);

  return {
    reserveTicketLoading,
    reserveTicketError,
    reserveTicket,
  };
}
