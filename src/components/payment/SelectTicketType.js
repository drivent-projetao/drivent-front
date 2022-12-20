import { CardsContainer, PaymentCard, PaymentText } from './paymentStyle';
import SelectIncludesHotel from './SelectIncludesHotel';
import { useState } from 'react';

export default function SelectTicketType({ ticketType, setIsAbleToReserve }) {
  const [isHotelSelected, setIsHotelSelected] = useState(0);
  const [isRemote, setIsRemote] = useState(true);
  const [isSelected, setIsSelected] = useState(0);

  return (
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
                if (isHotelSelected === 0) {
                  setIsAbleToReserve(false);
                }
              } else {
                setIsRemote(true);
                setIsAbleToReserve(true);
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
        <SelectIncludesHotel
          setIsAbleToReserve={setIsAbleToReserve}
          setIsHotelSelected={setIsHotelSelected}
          isHotelSelected={isHotelSelected}
          isSelected={isSelected}
        />
      )}
    </>
  );
}
