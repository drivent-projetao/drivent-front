import styled from 'styled-components';
import ChooseHotelMenu from './ChooseHotelMenu';

export default function HotelPage() {
  return (
    <>
      <PageHeader>Escolha de hotel e quarto</PageHeader>
      <ChooseHotelMenu />
    </>
  );
}

const PageHeader = styled.div`
  font-size: 34px;
  margin-bottom: 36px;
`;
