import styled from 'styled-components';

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

export { PaymentTitle, PaymentText, PaymentCard, CardsContainer };
