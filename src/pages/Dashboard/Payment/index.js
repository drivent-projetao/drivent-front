import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicketType from '../../../hooks/api/useTicketTypes';

export default function Payment() {
  const [hasEnrollment, setHasEnrollment] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const { ticketType } = useTicketType();
  const { enrollment } = useEnrollment();

  useEffect(() => {
    if (enrollment) {
      setHasEnrollment(true);
    }
  }, [enrollment, ticketType, hasEnrollment]);
  return (
    <>
      {hasEnrollment ? (
        <>
          <PaymentTitle>Ingresso e pagamento</PaymentTitle>
          <PaymentText>Primeiro, escolha sua modalidade de ingresso</PaymentText>
          <CardsContainer>
            {ticketType?.map((type, index) => (
              <PaymentCard isSelected={isSelected} onClick={() => setIsSelected(type.id)} id={type.id} key={index}>
                <h2>{type.name}</h2>
                <h3>R$ {type.price}</h3>
              </PaymentCard>
            ))}
          </CardsContainer>
        </>
      ) : (
        <PaymentMessage>
          <span>Você precisa completar sua inscrição antes</span>
          <span>de prosseguir pra escolha de ingresso</span>
        </PaymentMessage>
      )}
    </>
  );
}

const PaymentTitle = styled.h1`
  color: black;
  font-size: 34px;
  margin-bottom: 35px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PaymentCard = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px solid #cecece;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 24px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.isSelected === props.id ? '#FFEED2' : '#FFFFFF')};
  h2 {
    color: #454545;
    font-size: 16px;
    margin-bottom: 4px;
  }
  h3 {
    color: #898989;
    font-size: 15px;
  }
`;

const PaymentMessage = styled.div`
  font-size: 20px;
  color: #8e8e8e;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const PaymentText = styled.p`
  font-size: 20px;
  color: #8e8e8e;
  margin-bottom: 17px;
`;
