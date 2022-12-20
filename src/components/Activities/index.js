import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import WarningMessage from '../WarningMessage';
import ActivitiesTab from './ActivitiesTab';

export default function ActivitiesPage() {
  const { ticket } = useTicket();

  let warningMessage = null;
  if (ticket?.status !== 'PAID') {
    warningMessage = 'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades';
  } else if (ticket?.TicketType.isRemote) {
    warningMessage =
      'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas atividades.';
  }

  return (
    <>
      <PageHeader>Escolha de atividades</PageHeader>
      {warningMessage ? <WarningMessage message={warningMessage} /> : <ActivitiesTab />}
    </>
  );
}

const PageHeader = styled.div`
  font-size: 34px;
  margin-bottom: 27px;
`;
