import styled, { keyframes } from 'styled-components';

function Date({ content, index, selected, handleSelectDate }) {
  return (
    <>
      <DateContainer index={index} selected={selected} onClick={handleSelectDate}>
        <h3>{content}</h3>
      </DateContainer>
    </>
  );
}

export default function FilterActivitiesMenu({ dates, selectedDate, setSelectedDate }) {
  const handleSelectDate = (date) => {
    if (date === selectedDate) {
      setSelectedDate('');
    } else {
      setSelectedDate(date);
    }
  };
  const datesUnique = [...new Set(dates)];

  return (
    <>
      {selectedDate === '' ? <MenuHeader>Primeiro, filtre pelo dia do evento</MenuHeader> : <></>}
      <DayBrowser>
        {datesUnique.map((date, index) => (
          <Date
            key={index}
            index={index}
            content={date}
            selected={date === selectedDate}
            handleSelectDate={() => handleSelectDate(date)}
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
  margin-bottom: 61px;
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

  opacity: 0;
  animation-name: ${fadeInAnimation};
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-delay: ${(props) => `${String(0.5 + 0.2 * props.index)}s`};
  &:hover {
    background-color: ${(props) => (props.selected ? '#FFD37D' : '#ccc')};
  }
`;
