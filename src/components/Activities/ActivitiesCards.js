import styled from 'styled-components';
import { CgEnter } from 'react-icons/cg';

export default function ActivitiesCards({ activities }) {
  console.log(activities);
  return (
    <>
      {activities.map((a, i) => {
        return (
          <ActivityCard key={i}>
            <Description>
              <ActivityName>{a.name}</ActivityName>
              <Times>{a.startTime} - {a.endTime}</Times>
            </Description>
            <AlignIcons>
              <Icon />
              <IconText>{a.capacity}</IconText>
            </AlignIcons>
          </ActivityCard>
        );
      })}
    </>
  );
}

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
