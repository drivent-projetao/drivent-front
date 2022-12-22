import styled from 'styled-components';
import { CgEnter } from 'react-icons/cg';
import ActivitiesCards from './ActivitiesCards';

export default function LocationCard({ locations }) {
  return (
    <>
      {locations.map((l, i) => {
        return (
          <MainContainer>
            <Title key={i}>{l.name}</Title>
            <LocalContainer>
              <ActivitiesCards activities={l.Activity}/>
            </LocalContainer>
          </MainContainer>);
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

const ActivityCard = styled.div`
  background-color: #f1f1f1;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  width: 265px;
  height: 80px;
  display: flex;
  padding: 9px;
  padding-right: 0px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-right: 1px solid #cfcfcf;
  padding-right: 9px;
`;

const ActivityName = styled.h5`
  color: #343434;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
`;

const Times = styled.h6`
  color: #343434;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
`;

const Icon = styled(CgEnter)`
    font-size: 20px;
    color: #078632;
    margin-bottom: 4.5px;
`;

const IconText = styled.h6`
  color: #078632;
  font-size: 9px;
  font-weight: 400;
`;

const AlignIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 66px;
`;
