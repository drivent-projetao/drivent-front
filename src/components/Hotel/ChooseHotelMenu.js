import { useState } from 'react';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';
import Hotel from './Hotel';

export default function ChooseHotelMenu() {
  const { hotels } = useHotels();
  const [selectedHotel, setSelectedHotel] = useState(0);

  const handleSelectHotel = (id) => {
    if (id === selectedHotel) {
      setSelectedHotel(0);
    } else {
      setSelectedHotel(id);
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
              selected={hotel.id === selectedHotel}
              handleSelectHotel={() => handleSelectHotel(hotel.id)}
            />
          ))
        ) : (
          <></>
        )}
      </HotelBrowser>
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
