import { CardsContainer, PaymentCard, PaymentText } from './paymentStyle';
import SelectIncludesHotel from './SelectIncludesHotel';
import { useState } from 'react';

export default function SelectTicketType({ ticketType, setIsAbleToReserve }) {
  const [isHotelSelected, setIsHotelSelected] = useState(false);
  const [isRemote, setIsRemote] = useState(true);
  const [isSelected, setIsSelected] = useState(0);
  const [ticketTypeInPerson, setTicketTypeInPerson] = useState();
  const ticketTypeFiltered = ticketType?.filter((type) => type.includesHotel === false);

  return (
    <>
      <PaymentText>Primeiro, escolha sua modalidade de ingresso</PaymentText>
      <CardsContainer>
        {ticketTypeFiltered?.map((type, index) => (
          <PaymentCard
            isSelected={isSelected}
            onClick={() => {
              setIsSelected(type.id);
              if (type.isRemote === false) {
                setIsRemote(false);
                setTicketTypeInPerson(ticketType.filter((type) => type.isRemote === false));
                if (isHotelSelected === false) {
                  setIsAbleToReserve(false);
                }
              } else {
                setIsRemote(true);
                setIsAbleToReserve(type);
                setIsHotelSelected(false);
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
          ticketTypeInPerson={ticketTypeInPerson}
          setIsAbleToReserve={setIsAbleToReserve}
          setIsHotelSelected={setIsHotelSelected}
          isHotelSelected={isHotelSelected}
          isSelected={isSelected}
        />
      )}
    </>
  );
}
