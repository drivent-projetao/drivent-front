import styled from 'styled-components';
import ActivitiesCards from './ActivitiesCards';

export default function LocationCard({ locations }) {
  return (
    <>
      {locations.map((l, i) => {
        return (
          <MainContainer>
            <Title key={i}>{l.name}</Title>
            <LocalContainer>
              <ActivitiesCards locations={locations} activities={l.Activity} />
            </LocalContainer>
          </MainContainer>
        );
      })}
    </>
  );
}

const MainContainer = styled.div`
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 17px;
  color: #7b7b7b;
  line-height: 19.92px;
  font-weight: 400;
  margin-bottom: 13px;
`;

const LocalContainer = styled.div`
  width: 288px;
  height: 391px;
  border: 1px solid #d7d7d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 9px;
`;
