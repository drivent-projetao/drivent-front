import { useState, useEffect } from 'react';
import styled from 'styled-components';
import WarningMessage from '../../../components/Hotel/WarningMessage';
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
    console.log(ticketType);
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

const PaymentTitle = styled.h1`
  color: black;
  font-size: 34px;
  margin-bottom: 30px;
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
  background-color: ${(props) =>
    props.isSelected === props.id || props.isHotelSelected === props.index ? '#FFEED2' : '#FFFFFF'};
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

const PaymentText = styled.p`
  font-size: 20px;
  color: #8e8e8e;
  margin-bottom: 17px;
  margin-top: 35px;
`;
