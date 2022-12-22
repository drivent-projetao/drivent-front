import styled from 'styled-components';
import { CgEnter } from 'react-icons/cg';
import useNumberOfUsersByActivity from '../../hooks/api/useNumberOfUsersByActivity';

export default function ActivityCard({ activity }) {
  const startTime = activity.startTime.substr(11, 5);
  const endTime = activity.endTime.substr(11, 5);
  const msDuration = new Date(activity.endTime) - new Date(activity.startTime);
  const hour = 60;
  const msToHour = 60000;
  let heightHr = 79;
  const duration = msDuration / msToHour;

  if (duration > 60) {
    heightHr = 82;
  }

  const height = ((duration / hour) * heightHr).toString();
  
  const { numberOfUsersByActivity, numberOfUsersByActivityLoading } = useNumberOfUsersByActivity(activity.id);
  let availableCapacity = activity.capacity;
  if (numberOfUsersByActivityLoading === false) {
    availableCapacity = activity.capacity - numberOfUsersByActivity.numberOfUsers;
  }

  function selectActivity() {}

  return (
    <Card height={height}>
      <Description>
        <ActivityName>{activity.name}</ActivityName>
        <Times>
          {startTime} - {endTime}
        </Times>
      </Description>
      <AlignIcons onClick={selectActivity}>
        <Icon />
        <IconText>{availableCapacity}</IconText>
      </AlignIcons>
    </Card>
  );
}

const Card = styled.div`
  background-color: #f1f1f1;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  width: 265px;
  height: ${(props) => props.height + 'px;'};
  display: flex;
  padding: 9px;
  padding-right: 0px;
  margin-bottom: 6px;
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
