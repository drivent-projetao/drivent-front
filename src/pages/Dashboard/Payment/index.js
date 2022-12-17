import { useState, useEffect } from 'react';
import WarningMessage from '../../../components/Hotel/WarningMessage';
import { CardsContainer, PaymentCard, PaymentText, PaymentTitle } from '../../../components/payment/paymentStyle';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicketType from '../../../hooks/api/useTicketTypes';

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
        <>
          <PaymentText>Primeiro, escolha sua modalidade de ingresso</PaymentText>
          <CardsContainer>
            {ticketType?.map((type, index) => (
              <PaymentCard
                isSelected={isSelected}
                onClick={() => {
                  setIsSelected(type.id);
                  if (type.isRemote === false) {
                    setIsRemote(false);
                  } else {
                    setIsRemote(true);
                    setIsHotelSelected(0);
                  }
                }}
                id={type.id}
                key={index}
                isHotelSelected={isHotelSelected}
              >
                <h2>{type.name}</h2>
                <h3>R$ {type.price}</h3>
              </PaymentCard>
            ))}
          </CardsContainer>
          {isRemote ? (
            ''
          ) : (
            <>
              <PaymentText>Ótimo! Agora escolha sua modalidade de hospedagem</PaymentText>
              <CardsContainer>
                <PaymentCard
                  onClick={() => setIsHotelSelected(1)}
                  isHotelSelected={isHotelSelected}
                  index={1}
                  isSelected={isSelected}
                >
                  <h2>Sem Hotel</h2>
                  <h3>+ R$ 0</h3>
                </PaymentCard>
                <PaymentCard
                  onClick={() => setIsHotelSelected(2)}
                  isHotelSelected={isHotelSelected}
                  index={2}
                  isSelected={isSelected}
                >
                  <h2>Com Hotel</h2>
                  <h3>+ R$ 350</h3>
                </PaymentCard>
              </CardsContainer>
            </>
          )}
        </>
      ) : (
        <WarningMessage message={'Você precisa completar sua inscrição antes\nde prosseguir pra escolha de ingresso'} />
      )}
    </>
  );
}
