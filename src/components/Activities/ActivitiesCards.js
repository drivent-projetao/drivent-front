import ActivityCard from './ActivityCard';

export default function ActivitiesCards({ activities, locations }) {
  return (
    <>
      {activities.map((a, i) => {
        return <ActivityCard locations={locations} key={i} activity={a} />;
      })}
    </>
  );
}
