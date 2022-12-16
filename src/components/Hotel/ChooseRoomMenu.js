import { useState } from 'react';
import styled from 'styled-components';
import Room from './Room';

export default function ChooseRoomMenu({ rooms }) {
  const [selectedRoom, setSelectedRoom] = useState(0);

  const handleSelectRoom = (room) => {
    if (room.id === selectedRoom) {
      setSelectedRoom(0);
    } else {
      setSelectedRoom(room.id);
    }
  };

  return(
    <>
      <MenuHeader>Ótima pedida! Agora escolha seu quarto:</MenuHeader>
      <RoomBrowser>
        {rooms.map( room => (
          <Room
            key={room.id}
            id={room.id}
            name={room.name}
            capacity={room.capacity}
            bookingCount={room.bookingCount}
            selected={room.id === selectedRoom}
            handleSelectRoom={() => handleSelectRoom(room)}
          />
        ))}
      </RoomBrowser>
      <BookButton>RESERVAR QUARTO</BookButton>
    </>
  );
}

const MenuHeader = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  margin: 33px 0;
`;

const RoomBrowser = styled.div`
  width: 100%;
  gap: 19px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const BookButton = styled.button`
  width: 182px;
  height: 37px;
  margin-top: 57px;

  background: #E0E0E0;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;

  :hover {
    opacity: .8;
  }

  :active {
    transform: scale(0.98);
  }
`;
