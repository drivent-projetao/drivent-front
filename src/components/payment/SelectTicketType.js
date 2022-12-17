import { CardsContainer, PaymentCard, PaymentText } from './paymentStyle';
import SelectIncludesHotel from './SelectIncludesHotel';

export default function SelectTicketType({
  ticketType,
  isSelected,
  setIsSelected,
  setIsRemote,
  setIsHotelSelected,
  isHotelSelected,
  isRemote,
}) {
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
        <SelectIncludesHotel
          setIsHotelSelected={setIsHotelSelected}
          isHotelSelected={isHotelSelected}
          isSelected={isSelected}
        />
      )}
    </>
  );
}
