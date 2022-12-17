import { useState, useEffect } from 'react';
import WarningMessage from '../../../components/Hotel/WarningMessage';
import { PaymentTitle } from '../../../components/payment/paymentStyle';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicketType from '../../../hooks/api/useTicketTypes';
import SelectTicketType from '../../../components/payment/SelectTicketType';

export default function Payment() {
  const [hasEnrollment, setHasEnrollment] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const [isHotelSelected, setIsHotelSelected] = useState(0);
  const [isRemote, setIsRemote] = useState(true);
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
        <SelectTicketType
          ticketType={ticketType}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          setIsRemote={setIsRemote}
          setIsHotelSelected={setIsHotelSelected}
          isHotelSelected={isHotelSelected}
          isRemote={isRemote}
        />
      ) : (
        <WarningMessage message={'Você precisa completar sua inscrição antes\nde prosseguir pra escolha de ingresso'} />
      )}
    </>
  );
}
