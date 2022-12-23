import Button from '../Form/Button';
import { PaymentText } from './paymentStyle';
import { toast } from 'react-toastify';
import useReserveTicket from '../../hooks/api/useReserveTicket';

export default function ReserveTicket({ isAbleToReserve, setHasTicketReserved }) {
  const body = {
    ticketTypeId: isAbleToReserve.id,
  };
  const { reserveTicket, reserveTicketLoading } = useReserveTicket();

  async function handleForm(e) {
    e.preventDefault();

    try {
      await reserveTicket(body);
      setHasTicketReserved(true);
      toast('Reserva do ingresso realizada com sucesso!');
    } catch (err) {
      toast('Não foi possível fazer a reserva do ingresso!');
    }
  }

  return (
    <>
      <PaymentText>
        Fechado! O total ficou em <span>R$ {isAbleToReserve.price}</span>. Agora é só confirmar:
      </PaymentText>
      <form onSubmit={handleForm}>
        <Button type="submit" disabled={reserveTicketLoading}>
          RESERVAR INGRESSO
        </Button>
      </form>
    </>
  );
}
