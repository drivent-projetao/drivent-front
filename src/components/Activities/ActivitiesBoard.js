import styled from 'styled-components';
import useLocations from '../../hooks/api/useLocations';
import { useState, useEffect } from 'react';
import LocationCard from './LocationCard';

export default function ActivitiesBoards({ selectedDate }) {
  const [locations, setLocations] = useState([]);
  const { getLocations } = useLocations();

  function formatDateContent(date) {
    const dateArray = date.split(', ');
    return dateArray[1].replaceAll('/', '-');
  }

  const date = formatDateContent(selectedDate);

  useEffect(async() => {
    const response = await getLocations(date);
    setLocations(response);
  }, [selectedDate]);

  return <Cards>{locations.length > 0 ? <LocationCard locations={locations} /> : <></>}</Cards>;
}

const Cards = styled.div`
  display: flex;
`;
