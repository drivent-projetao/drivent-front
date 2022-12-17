import styled from 'styled-components';
import { useContext } from 'react';
import useTicket from '../../hooks/api/useTicket';
import PaymentForm from './PaymentForm';
import { useEffect, useState } from 'react';
import PaymentContext from '../../contexts/PaymentContext';

export default function PaymentPage() {
  const { 
    setTicketId
  } = useContext(PaymentContext);

  const { ticket } = useTicket();
  const [ticketPrice, setTicketPrice] = useState(0);
  const [ticketType, setTicketType] = useState('');

  const hotelPrice = 350;

  useEffect(() => {
    if(ticket) {
      setTicketId(ticket.id);
      setTicketPrice(ticket.TicketType.price);
      ticket.TicketType.isRemote === true ? setTicketType('Online') : setTicketType('Presencial');
      ticket.TicketType.includesHotel === true ? setTicketType('Presencial + Hotel') : setTicketType('Presencial');

      ticketType === 'Presencial + Hotel' ? setTicketPrice(hotelPrice + ticket.TicketType.price) : setTicketPrice(ticket.TicketType.price);
    }
  }, [ticket, ticketPrice]);

  return (
    <>
      <PageHeader>Ingresso e pagamento</PageHeader>
      <Title>Ingresso escolhido</Title>
      <PaymentBox>
        <PaymentType>{ticketType}</PaymentType>
        <PaymentValue>R${ticketPrice}</PaymentValue>
      </PaymentBox>
      <Title>Pagamento</Title>
      <PaymentForm />
    </>
  );
}

const PageHeader = styled.div`
  font-size: 34px;
  margin-bottom: 36px;
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: 400;
  color: #8e8e8e;
  margin-bottom: 17px;
`;

const PaymentBox = styled.div`
  width: 290px;
  height: 108px;
  border-radius: 20px;
  background-color: #FFEED2;
  border: 1px solid #FFEED2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const PaymentType = styled.h6`
  font-size: 16px;
  color: #454545;
  line-height: 18.75px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const PaymentValue = styled.h6`
  font-size: 14px;
  color: #898989;
  line-height: 16.41px;
  font-weight: 400;
`;
