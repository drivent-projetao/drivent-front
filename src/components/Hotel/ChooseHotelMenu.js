import { useState } from 'react';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';
import Hotel from './Hotel';
import ChooseRoomMenu from './ChooseRoomMenu';

export default function ChooseHotelMenu() {
  const { hotels } = useHotels();
  const [selectedHotel, setSelectedHotel] = useState(0);
  const [rooms, setRooms] = useState([]);

  const handleSelectHotel = (hotel) => {
    if (hotel.id === selectedHotel) {
      setSelectedHotel(0);
      setRooms([]);
    } else {
      setSelectedHotel(hotel.id);
      setRooms(hotel.rooms);
    }
  };

  return (
    <>
      <MenuHeader>Primeiro, escolha seu hotel</MenuHeader>
      <HotelBrowser>
        {hotels ? (
          hotels.map((hotel, index) => (
            <Hotel
              key={index}
              id={hotel.id}
              name={hotel.name}
              image={hotel.image}
              rooms={hotel.rooms}
              selected={hotel.id === selectedHotel}
              handleSelectHotel={() => handleSelectHotel(hotel)}
            />
          ))
        ) : (
          <></>
        )}
      </HotelBrowser>
      { selectedHotel === 0 ? (
        <></>
      ) : (
        <ChooseRoomMenu rooms={rooms} />
      )}
    </>
  );
}

const MenuHeader = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 18px;
`;

const HotelBrowser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
`;
