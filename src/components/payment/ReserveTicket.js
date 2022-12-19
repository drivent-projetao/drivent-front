import Button from '../Form/Button';
import { PaymentText } from './paymentStyle';

export default function ReserveTicket() {
  return (
    <>
      <PaymentText>
        Fechado! O total ficou em <span>R$ 100</span>. Agora é só confirmar:
      </PaymentText>
      <Button>
        RESERVAR INGRESSO
      </Button>
    </>
  );
}
