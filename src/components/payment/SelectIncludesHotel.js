import { CardsContainer, PaymentCard, PaymentText } from './paymentStyle';

export default function SelectIncludesHotel({
  setIsHotelSelected,
  isHotelSelected,
  isSelected,
  setIsAbleToReserve,
  ticketTypeInPerson,
}) {
  return (
    <>
      <PaymentText>Ótimo! Agora escolha sua modalidade de hospedagem</PaymentText>
      <CardsContainer>
        {ticketTypeInPerson.map((type, index) => (
          <PaymentCard
            onClick={() => {
              setIsHotelSelected(index);
              setIsAbleToReserve(type);
            }}
            isHotelSelected={isHotelSelected}
            index={index}
            key={index}
            isSelected={isSelected}
          >
            <h2>{type.includesHotel === true ? 'Com Hotel' : 'Sem Hotel'}</h2>
            <h3>{type.includesHotel === true ? `+ R$ ${Math.abs(ticketTypeInPerson[0].price - ticketTypeInPerson[1].price)}` : '+ R$ 0'}</h3>
          </PaymentCard>
        ))}
      </CardsContainer>
    </>
  );
}
