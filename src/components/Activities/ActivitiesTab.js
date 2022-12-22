import FilterActivitiesMenu from './FilterActivitiesMenu';
import useActivitiesDates from '../../hooks/api/useActivitiesDates';
import { useState } from 'react';

export default function ActivitiesTab() {
  const [selectedDate, setSelectedDate] = useState('');
  const { activitiesDates } = useActivitiesDates();
  const datesUnique = [...new Set(activitiesDates)];

  return (
    <>
      <FilterActivitiesMenu dates={datesUnique} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </>
  );
}
