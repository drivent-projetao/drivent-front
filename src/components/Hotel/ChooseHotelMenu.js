import styled, { keyframes } from 'styled-components';
import Hotel from './Hotel';

export default function ChooseHotelMenu({ hotels, selectedHotel, handleSelectHotel }) {
  return (
    <>
      <MenuHeader>Primeiro, escolha seu hotel</MenuHeader>
      <HotelBrowser>
        {hotels ? (
          hotels.map((hotel, index) => (
            <Hotel
              key={index}
              index={index}
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
    </>
  );
}
const fadeInAnimation = keyframes`
 0% { opacity: 0; transform: translateY(-20px)}
 100% { opacity: 1; transform: translateY(0px) }
`;

const MenuHeader = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 18px;

  animation-name: ${fadeInAnimation};
  animation-fill-mode: forwards;
  animation-duration: 1s;
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
