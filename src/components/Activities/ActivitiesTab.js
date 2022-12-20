import FilterActivitiesMenu from './FilterActivitiesMenu';
import useActivitiesWithDates from '../../hooks/api/useActivitiesWithDates';
import { useState } from 'react';

export default function ActivitiesTab() {
  const [selectedDate, setSelectedDate] = useState('');
  const { activitiesWithDates } = useActivitiesWithDates();
  const filteredDates = activitiesWithDates?.dates.map((d) => d === selectedDate);
  const filteredActivities = activitiesWithDates?.activities.filter((a, i) => filteredDates[i]);

  return (
    <>
      <FilterActivitiesMenu
        dates={activitiesWithDates?.dates}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <h2>ActivitiesCronogram</h2>
      <br />
      {filteredActivities ? (
        filteredActivities.map((a, index) => <h1 key={index}>{`${a.name} - ${a.startTime} - ${a.startTime}`}</h1>)
      ) : (
        <></>
      )}
    </>
  );
}
