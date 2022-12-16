import { useState } from 'react';
import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';

function Hotel({ id, name, image, selected, handleSelectHotel }) {
  return (
    <HotelContainer selected={selected} onClick={handleSelectHotel}>
      <img src={image} alt="hotel" />
      <div className="hotel-name">{name}</div>
    </HotelContainer>
  );
}

export default function ChooseHotelMenu() {
  const { hotels } = useHotels();
  const [selectedHotel, setSelectedHotel] = useState(0);

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
              handleSelectHotel={() => setSelectedHotel(hotel.id)}
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
  }
`;
