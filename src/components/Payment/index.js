import styled from 'styled-components';
import { useContext } from 'react';
import useTicket from '../../hooks/api/useTicket';
import PaymentForm from './PaymentForm';
import { useEffect, useState } from 'react';
import PaymentContext from '../../contexts/PaymentContext';
import PaidMessage from './PaidMessage';
import useEnrollment from '../../hooks/api/useEnrollment';
import WarningMessage from './WarningMessage';

export default function PaymentPage() {
  const { 
    setTicketId,
    paidTicket,
    setPaidTicket,
  } = useContext(PaymentContext);
  const { ticket } = useTicket();
  const { enrollment } = useEnrollment();

  const [ticketPrice, setTicketPrice] = useState(0);
  const [ticketType, setTicketType] = useState('');

  const hotelPrice = 350;
  const warningMessage = 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso';

  useEffect(() => {
    if(ticket) {
      setTicketId(ticket.id);
      setTicketPrice(ticket.TicketType.price);
      
      if(ticket.TicketType.isRemote === true) {
        setTicketType('Online');
      } else if (ticket.TicketType.isRemote === false && ticket.TicketType.includesHotel === true) {
        setTicketType('Presencial + Hotel');
        setTicketPrice(hotelPrice + ticket.TicketType.price);
      } else {
        setTicketType('Presencial');
      }

      if(ticket.status === 'PAID') {
        setPaidTicket(true);
      } else {
        setPaidTicket(false);
      }
    }
  }, [ticket, ticketPrice]);

  return (
    <>
      <PageHeader>Ingresso e pagamento</PageHeader>
      {enrollment ? (
        <>
          <Title>Ingresso escolhido</Title>
          <PaymentBox>
            <PaymentType>{ticketType}</PaymentType>
            <PaymentValue>R${ticketPrice}</PaymentValue>
          </PaymentBox>
          <Title>Pagamento</Title>
          {paidTicket === false ? <PaymentForm /> : <PaidMessage />}
        </>
      ) : (
        <WarningMessage message={warningMessage} />
      )}
    </>
  );
}

//<AlignWarning><WarningText>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</WarningText></AlignWarning>

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

