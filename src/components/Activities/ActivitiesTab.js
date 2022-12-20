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
      {filteredActivities?.length >= 1 ? (
        <>
          <h2>Activities Cronogram</h2>
          <br />
          {filteredActivities.map((a, index) => (
            <h1 key={index}>{`${a.name} - ${a.startTime} - ${a.endTime}`}</h1>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
