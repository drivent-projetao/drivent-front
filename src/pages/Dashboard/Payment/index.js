import { useState, useEffect } from 'react';
import WarningMessage from '../../../components/WarningMessage';
import { PaymentTitle } from '../../../components/payment/paymentStyle';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicketType from '../../../hooks/api/useTicketTypes';
import SelectTicketType from '../../../components/payment/SelectTicketType';
import ReserveTicket from '../../../components/payment/ReserveTicket';

export default function Payment() {
  const [hasEnrollment, setHasEnrollment] = useState(false);
  const [isAbleToReserve, setIsAbleToReserve] = useState(false);
  const { ticketType } = useTicketType();
  const { enrollment } = useEnrollment();

  useEffect(() => {
    if (enrollment) {
      setHasEnrollment(true);
    }
  }, [enrollment, ticketType, hasEnrollment]);

  return (
    <>
      <PaymentTitle>Ingresso e pagamento</PaymentTitle>
      {hasEnrollment ? (
        <>
          <SelectTicketType setIsAbleToReserve={setIsAbleToReserve} ticketType={ticketType} />
          {isAbleToReserve ? <ReserveTicket /> : ''}
        </>
      ) : (
        <WarningMessage message={'Você precisa completar sua inscrição antes\nde prosseguir pra escolha de ingresso'} />
      )}
    </>
  );
}
