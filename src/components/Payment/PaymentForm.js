import { useContext } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import PaymentContext from '../../contexts/PaymentContext';
import usePayment from '../../hooks/api/usePayment';

export default function PaymentForm() {
  const { 
    cardNumber, setCardNumber, 
    cardName, setCardName, 
    cardDate, setCardDate, 
    cardCVC, setCardCVC, 
    focus, setFocus,
    ticketId
  } = useContext(PaymentContext);

  const { createPayment } = usePayment();

  function handleInputFocus(e) {
    setFocus(e.target.id);
  }

  async function handleForm(e) {
    e.preventDefault();

    const paymentData = {
      ticketId: ticketId,
      cardData: {
        issuer: 'MASTERCARD',
        number: cardNumber,
        name: cardName,
        expirationDate: cardDate,
        cvv: cardCVC
      }
    };

    await createPayment(paymentData);
  }

  return (
    <CardBox id="PaymentForm">
      <Cards
        cvc={cardCVC}
        expiry={cardDate}
        focused={focus}
        name={cardName}
        number={cardNumber}
      />
      <Form onSubmit={handleForm}>
        <Input
          type="number"
          id="number"
          placeholder="Número do Cartão"
          onChange={(e) => setCardNumber(e.target.value)} value={cardNumber}
          onFocus={(e) => handleInputFocus(e)}
        />
        <Input
          type="name"
          id="name"
          placeholder="Nome do Titular"
          onChange={(e) => setCardName(e.target.value)} value={cardName}
          onFocus={(e) => handleInputFocus(e)}
        />
        <AlignItems>
          <Input
            type="number"
            id="expiry"
            placeholder="Validade (mm/aa)"
            onChange={(e) => setCardDate(e.target.value)} value={cardDate}
            onFocus={(e) => handleInputFocus(e)}
          />
          <Input
            type="number"
            id='cvc'
            placeholder="CVV"
            onChange={(e) => setCardCVC(e.target.value)} value={cardCVC}
            onFocus={(e) => handleInputFocus(e)}
          />
        </AlignItems>
        <Button>FINALIZAR PAGAMENTO</Button>
      </Form>
    </CardBox>
  );
}

const CardBox = styled.div`
  width: 706px;
  display: flex;
	padding: 12px;
	padding-left: 0;
	margin-bottom: 37px;
`;

const Form = styled.form`
  display: flex;
	flex-direction: column;
  width: 60%;
  margin-left: 24px;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  box-sizing: border-box;
  color: #8e8e8e;
  width: 100%;
  height: 48px;
  padding: 2px;
  padding-left: 6px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #8e8e8e;
`;

const AlignItems = styled.div`
  display: flex;
  justify-content: space-between;

  Input {
  width: 49%
  }
`;

const Button = styled.button`
width: 182px;
height: 37px;
border-radius: 4px;
border: 1px solid #e0e0e0;
background-color: #e0e0e0;
color: #000000;
font-size: 14px;
box-shadow: 1px 1px rgba(0, 0, 0, 0.1);
`;
