import ActivityCard from './ActivityCard';

export default function ActivitiesCards({ activities }) {
  return (
    <>
      {activities.map((a, i) => {
        return (
          <ActivityCard key={i} activity={a}/>
        );
      })}
    </>
  );
}
