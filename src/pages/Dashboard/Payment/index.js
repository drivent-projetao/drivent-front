import { useState, useEffect } from 'react';
import WarningMessage from '../../../components/WarningMessage';
import { PaymentTitle } from '../../../components/payment/paymentStyle';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicketType from '../../../hooks/api/useTicketTypes';
import SelectTicketType from '../../../components/payment/SelectTicketType';
import ReserveTicket from '../../../components/payment/ReserveTicket';
import useTicket from '../../../hooks/api/useTicket';
import PaymentPage from '../../../components/Payment/index';

export default function Payment() {
  const [hasEnrollment, setHasEnrollment] = useState(false);
  const [isAbleToReserve, setIsAbleToReserve] = useState(false);
  const [hasTicketReserved, setHasTicketReserved] = useState(false);
  const { ticketType } = useTicketType();
  const { enrollment } = useEnrollment();
  const { ticket } = useTicket();
  useEffect(() => {
    if (enrollment) {
      setHasEnrollment(true);
    }
    if (ticket) {
      setHasTicketReserved(true);
    }
    console.log(ticket);
  }, [enrollment, ticketType, hasEnrollment, ticket]);

  return (
    <>
      <PaymentTitle>Ingresso e pagamento</PaymentTitle>
      {hasTicketReserved ? (
        <PaymentPage />
      ) : hasEnrollment ? (
        <>
          <SelectTicketType setIsAbleToReserve={setIsAbleToReserve} ticketType={ticketType} />
          {isAbleToReserve ? <ReserveTicket setHasTicketReserved={setHasTicketReserved} isAbleToReserve={isAbleToReserve} /> : ''}
        </>
      ) : (
        <WarningMessage message={'Você precisa completar sua inscrição antes\nde prosseguir pra escolha de ingresso'} />
      )}
    </>
  );
}
