import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import useBooking from '../../hooks/api/useBooking';
import useSaveBooking from '../../hooks/api/useSaveBooking';
import useUpdateBooking from '../../hooks/api/useUpdateBooking';

import Room from './Room';

export default function ChooseRoomMenu({ rooms, setIsBooking }) {
  const [selectedRoom, setSelectedRoom] = useState(0);

  const { booking } = useBooking();
  const { saveBooking } = useSaveBooking();
  const { changeBooking } = useUpdateBooking();

  const handleSelectRoom = (room) => {
    if (room.id === selectedRoom) {
      setSelectedRoom(0);
    } else {
      setSelectedRoom(room.id);
    }
  };

  async function sendBooking(roomId) {
    try {
      if(booking) {
        await changeBooking(booking.id, { roomId });
        setIsBooking(true);
        return toast('Reserva realizada com sucesso!');
      }
      await saveBooking({ roomId });
      setIsBooking(true);
      toast('Reserva realizada com sucesso!');
    } catch (err) {
      toast('Não foi possível realizar a reserva!');
    }
  } 

  return(
    <>
      <MenuHeader>Ótima pedida! Agora escolha seu quarto:</MenuHeader>
      <RoomBrowser>
        {rooms.map( room => (
          <Room 
            key={room.id}
            room={room}
            selected={room.id === selectedRoom}
            handleSelectRoom={() => handleSelectRoom(room)}
          />
        ))}
      </RoomBrowser>
      { selectedRoom === 0 ? (
        <></>
      ): (
        <BookButton onClick={() => sendBooking(selectedRoom)}>
          RESERVAR QUARTO
        </BookButton> 
      )}      
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

export const BookButton = styled.button`
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
