import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { CgEnter, CgCloseO, CgCheckO } from 'react-icons/cg';
import { toast } from 'react-toastify';

import useApplication from '../../hooks/api/useApplication';
import useSaveApplication from '../../hooks/api/useSaveApplication';
import useNumberOfUsersByActivity from '../../hooks/api/useNumberOfUsersByActivity';

export default function ActivityCard({ activity, locations }) {
  const startTime = activity.startTime.substr(11, 5);
  const endTime = activity.endTime.substr(11, 5);
  const msDuration = new Date(activity.endTime) - new Date(activity.startTime);
  const hour = 60;
  const msToHour = 60000;
  let heightHr = 79;
  const duration = msDuration / msToHour;

  const [availableCapacity, setAvailableCapacity] = useState(activity.capacity);
  const [application, setApplications] = useState([]);

  if (duration > 60) {
    heightHr = 82;
  }

  const height = ((duration / hour) * heightHr).toString();

  const { getApplications } = useApplication();
  const { saveApplication } = useSaveApplication();
  const { getNumberOfUsersByActivity } = useNumberOfUsersByActivity(activity.id);

  useEffect(async() => {
    const result = await getApplications();
    setApplications(result);
  }, [availableCapacity]);

  useEffect(async() => {
    const result = await getNumberOfUsersByActivity();
    setAvailableCapacity(activity.capacity - result.numberOfUsers);
  }, [locations, availableCapacity]);

  const isApplication = application.find(({ activityId }) => activityId === activity.id);

  async function selectActivity(activityId) {
    try {
      await saveApplication({ activityId });
      setAvailableCapacity(availableCapacity - 1);
      toast('Inscrição realizada com sucesso!');
    } catch (err) {
      toast('Não foi possível realizar a inscrição!');
    }
  }

  return (
    <Card height={height}>
      <Description>
        <ActivityName>{activity.name}</ActivityName>
        <Times>
          {startTime} - {endTime}
        </Times>
      </Description>
      <AlignIcons
        onClick={() => {
          if (availableCapacity <= 0) {
            return;
          }
          selectActivity(activity.id);
        }}
      >
        {availableCapacity <= 0 ? (
          <>
            <IconClose />
            <IconText color="#CC6666">Esgotado</IconText>
          </>
        ) : (
          <>
            { isApplication ? 
              <><IconCheck /><IconText color="#078632">Inscrito</IconText></> : 
              <><IconEnter /><IconText color="#078632">{availableCapacity}</IconText></>
            }
          </>
        )}
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

const IconEnter = styled(CgEnter)`
  font-size: 20px;
  color: #078632;
  margin-bottom: 4.5px;
  cursor: pointer;
`;

const IconClose = styled(CgCloseO)`
  font-size: 20px;
  color: #cc6666;
  margin-bottom: 4.5px;
`;

const IconCheck = styled(CgCheckO)`
  font-size: 20px;
  color: #078632;
  margin-bottom: 4.5px;
`;

const IconText = styled.h6`
  color: ${(props) => props.color};
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
