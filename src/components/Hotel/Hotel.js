import styled from 'styled-components';

function getNumberOfAvailableSpots(rooms) {
  return rooms.reduce((acc, curr) => acc + (curr.capacity - curr.bookingCount), 0);
}

function getAccomodationMessage(rooms) {
  let capacitySingle = false;
  let capacityDouble = false;
  let capacityTriple = false;

  let i = 0;
  while (!(capacitySingle && capacityDouble && capacityTriple)) {
    const room = rooms[i];
    if (room.capacity === 1) {
      capacitySingle = true;
    }
    if (room.capacity === 2) {
      capacityDouble = true;
    }
    if (room.capacity === 3) {
      capacityTriple = true;
    }
    i += 1;
  }
  const capacities = [
    { name: 'Single', available: capacitySingle },
    { name: 'Double', available: capacityDouble },
    { name: 'Triple', available: capacityTriple },
  ];
  const availableCapacities = capacities.filter((e) => e.available).map((e) => e.name);
  let accomodationMessage = '';
  if (availableCapacities.length === 3) {
    accomodationMessage = `${availableCapacities[0]}, ${availableCapacities[1]} e ${availableCapacities[2]}`;
  } else if (availableCapacities.length === 2) {
    accomodationMessage = `${availableCapacities[0]} e ${availableCapacities[1]}`;
  } else if (availableCapacities.length === 1) {
    accomodationMessage = `${availableCapacities[0]}`;
  }
  return accomodationMessage;
}

export default function Hotel({ id, name, image, rooms, selected, handleSelectHotel }) {
  const accomodationMessage = getAccomodationMessage(rooms);
  const numberAvailableSpots = getNumberOfAvailableSpots(rooms);

  return (
    <HotelContainer selected={selected} onClick={handleSelectHotel}>
      <img src={image} alt="hotel" />
      <div className="hotel-name">{name}</div>
      <div className="hotel-info">
        <div className="accomodation">
          <h3>Tipos de acomodação</h3>
          <p>{accomodationMessage}</p>
        </div>
        <div className="available-rooms">
          <h3>Vagas Disponíveis</h3>
          <p>{numberAvailableSpots}</p>
        </div>
      </div>
    </HotelContainer>
  );
}

const HotelContainer = styled.div`
  background-color: #ebebeb;
  border-radius: 10px;
  width: 196px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.selected ? '#FFEED2' : '#ccc')};
    transform: scale(1.02);
  }
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#ebebeb')};
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .hotel-name {
    font-size: 20px;
    margin-bottom: 14px;
  }

  .hotel-info {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 12px;
    .accomodation,
    .available-rooms {
      h3 {
        font-weight: 700;
        line-height: 14.06px;
        margin-bottom: 3px;
      }
      p {
        line-height: 14.06px;
      }
    }
  }
`;
