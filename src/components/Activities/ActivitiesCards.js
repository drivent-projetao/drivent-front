import { useState, useEffect } from 'react';
import ActivityCard from './ActivityCard';
import useApplications from '../../hooks/api/useApplication';

export default function ActivitiesCards({ activities }) {
  const [applications, setApplications] = useState([]);

  const { getApplications } = useApplications();  

  useEffect(async() => {
    const data = await getApplications();
    setApplications(data);
  }, []);

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
