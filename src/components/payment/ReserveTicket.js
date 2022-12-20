import { postTicket } from '../../services/ticketApi';
import Button from '../Form/Button';
import { PaymentText } from './paymentStyle';
import useToken from '../../hooks/useToken';
import { toast } from 'react-toastify';

export default function ReserveTicket({ isAbleToReserve }) {
  const body = {
    ticketTypeId: isAbleToReserve.id,
  };
  const token = useToken();
  //todo: fazer hook do postticket, usar o loading pra desabilitar o botao
  async function handleForm(e) {
    e.preventDefault();

    try {
      await postTicket(body, token);
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
        <Button type="submit">RESERVAR INGRESSO</Button>
      </form>
    </>
  );
}
