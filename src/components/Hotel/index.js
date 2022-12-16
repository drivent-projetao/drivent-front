import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import ChooseHotelMenu from './ChooseHotelMenu';
import WarningMessage from './WarningMessage';

export default function HotelPage() {
  const { ticket } = useTicket();

  let warningMessage = null;
  if (ticket?.status !== 'PAID') {
    warningMessage = 'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem';
  } else if (!ticket?.TicketType.includesHotel) {
    warningMessage = 'Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades';
  }

  return (
    <>
      <PageHeader>Escolha de hotel e quarto</PageHeader>
      {warningMessage ? <WarningMessage message={warningMessage} /> : <ChooseHotelMenu />}
    </>
  );
}

const PageHeader = styled.div`
  font-size: 34px;
  margin-bottom: 36px;
`;
