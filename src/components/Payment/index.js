import { useState, useEffect } from 'react';
import { PaymentTitle } from './paymentStyle';
import useEnrollment from '../../hooks/api/useEnrollment';
import useTicketType from '../../hooks/api/useTicketTypes';
import SelectTicketType from './SelectTicketType';
import ReserveTicket from './ReserveTicket';
import useTicket from '../../hooks/api/useTicket';
import MakePayment from './MakePayment';
import WarningMessage from '../WarningMessage';

export default function PaymentPage() {
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
  }, [enrollment, ticketType, hasEnrollment, ticket]);

  if (hasTicketReserved) {
    return (
      <>
        <PaymentTitle>Ingresso e pagamento</PaymentTitle>
        <MakePayment />
      </>
    );
  }

  if (!hasEnrollment) {
    return (
      <>
        <PaymentTitle>Ingresso e pagamento</PaymentTitle>
        <WarningMessage message={'Você precisa completar sua inscrição antes\nde prosseguir pra escolha de ingresso'} />
      </>
    );
  }

  return (
    <>
      <PaymentTitle>Ingresso e pagamento</PaymentTitle>
      <SelectTicketType setIsAbleToReserve={setIsAbleToReserve} ticketType={ticketType} />
      {isAbleToReserve ? (
        <ReserveTicket setHasTicketReserved={setHasTicketReserved} isAbleToReserve={isAbleToReserve} />
      ) : (
        ''
      )}
    </>
  );
}
