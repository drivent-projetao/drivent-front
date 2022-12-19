import { CardsContainer, PaymentCard, PaymentText } from './paymentStyle';

export default function SelectIncludesHotel({ setIsHotelSelected, isHotelSelected, isSelected, setIsAbleToReserve }) {
  return (
    <>
      <PaymentText>Ótimo! Agora escolha sua modalidade de hospedagem</PaymentText>
      <CardsContainer>
        <PaymentCard
          onClick={() => {
            setIsHotelSelected(1);
            setIsAbleToReserve(true);
          }}
          isHotelSelected={isHotelSelected}
          index={1}
          isSelected={isSelected}
        >
          <h2>Sem Hotel</h2>
          <h3>+ R$ 0</h3>
        </PaymentCard>
        <PaymentCard
          onClick={() => {
            setIsHotelSelected(2);
            setIsAbleToReserve(true);
          }}
          isHotelSelected={isHotelSelected}
          index={2}
          isSelected={isSelected}
        >
          <h2>Com Hotel</h2>
          <h3>+ R$ 350</h3>
        </PaymentCard>
      </CardsContainer>
    </>
  );
}
