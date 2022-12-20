import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

function Date({ content, selected, handleSelectDate }) {
  return (
    <>
      <DateContainer selected={selected} onClick={handleSelectDate}>
        <h3>{content}</h3>
      </DateContainer>
    </>
  );
}

export default function FilterActivitiesMenu() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleSelectDate = (date) => {
    if (date === selectedDate) {
      setSelectedDate('');
    } else {
      setSelectedDate(date);
    }
  };
  const dates = [{ name: 'Sexta, 22/10' }, { name: 'Sábado, 23/10' }, { name: 'Domingo, 24/10' }];

  return (
    <>
      <MenuHeader>Primeiro, filtre pelo dia do evento</MenuHeader>
      <DayBrowser>
        {dates.map((date) => (
          <Date
            content={date.name}
            selected={date.name === selectedDate}
            handleSelectDate={() => handleSelectDate(date.name)}
          ></Date>
        ))}
      </DayBrowser>
    </>
  );
}

const fadeInAnimation = keyframes`
 0% { opacity: 0; transform: translateY(-20px)}
 100% { opacity: 1; transform: translateY(0px) }
`;

const MenuHeader = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 18px;

  animation-name: ${fadeInAnimation};
  animation-fill-mode: forwards;
  animation-duration: 1s;
`;

const DayBrowser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
`;

const DateContainer = styled.div`
  width: 131px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? '#FFD37D' : '#E0E0E0')};
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  color: black;
  line-height: 16.41px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.selected ? '#FFD37D' : '#ccc')};
  }
`;
