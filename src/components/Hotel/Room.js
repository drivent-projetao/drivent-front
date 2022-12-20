import styled from 'styled-components';
import Icon from './Icon';

function getIconsArray(capacity, bookingCount) {
  let icons = [];

  for (let i = capacity; i > 0; i--) {
    let status;

    if (i - bookingCount > 0) {
      status = 'empty';
    } else {
      status = 'filled';
    }

    let icon = {
      spot: i,
      status: status,
      bookingCount: bookingCount,
    };

    icons.push(icon);
  }
  return icons;
}

function checkVacancy(capacity, bookingCount) {
  if(capacity === bookingCount) return true;
  return false;
}

export default function Room({ room, selected, handleSelectRoom  }) {
  const icons = getIconsArray(room.capacity, room.bookingCount);
  const isFull = checkVacancy(room.capacity, room.bookingCount);

  return (
    <RoomContainer isFull={isFull} selected={selected} onClick={handleSelectRoom}>
      {room.name}
      <IconsContainer>
        {icons.map(icon => (
          <Icon key={icon.spot} icon={icon} selected={selected}/>
        ))}
      </IconsContainer>
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  width: 190px;
  height: 45px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #CECECE;
  transition: all ease .5s;
  cursor: ${(props) => (props.isFull ? 'not-allowed;' : 'pointer')};
   
  opacity: ${(props) => (props.isFull ? '.5' : '1')};
  background-color: ${(props) => (
    props.isFull ? 
      '#CCC' : (
        props.selected? '#FFEED2' : 'transparent'
      ))};

  &:hover {
    transform: ${(props) => (props.isFull ? '' : 'scale(1.05)')};
  }
`;

const IconsContainer = styled.div`
    display: flex;
    gap: 5px;  
`;
