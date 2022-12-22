import useNumberOfUsersByActivity from '../../hooks/api/useNumberOfUsersByActivity';

export default function AvailableSlots({ activityId, capacity }) {
  const { numberOfUsersByActivity, numberOfUsersByActivityLoading } = useNumberOfUsersByActivity(activityId);
  if (numberOfUsersByActivityLoading === true) {
    return <></>;
  }
  const available = capacity - numberOfUsersByActivity.numberOfUsers;
  return (
    <>
      <h1>{available}</h1>
    </>
  );
}
