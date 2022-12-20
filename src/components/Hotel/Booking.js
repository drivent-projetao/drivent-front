import styled from 'styled-components';

import { BookButton } from './ChooseRoomMenu';

import useHotelById from '../../hooks/api/useHotel';
import useCountBooking from '../../hooks/api/useCountBooking';

export default function Booking({ userBooking, setIsBooking }) {
  const room = userBooking.Room;
  const hotelId = room.hotelId;
  
  const { hotel } = useHotelById(hotelId);
  const { booking } = useCountBooking(room.id);
 
  const getCapacity = (room) => {
    let capacity = '';
  
    if (room.capacity === 1) {
      capacity = 'Single';
    }
    if (room.capacity === 2) {
      capacity = 'Double';
    }
    if (room.capacity === 3) {
      capacity = 'Triple';
    }
    
    return capacity;
  };

  const capacity = getCapacity(room);

  return(
    <>
      <MenuHeader>Você já escolheu seu quarto:</MenuHeader>
      <HotelContainer>
        <img src={hotel?.image} alt="hotel" />
        <div className="hotel-name">{hotel?.name}</div>
        <div className="hotel-info">

          <div className="accommodation">
            <h3>Quarto Reservado</h3>
            <p>{room?.name} <>({capacity})</></p>
          </div>

          <div className="available-rooms">
            <h3>Pessoas no seu quarto</h3>
            {room?.capacity === 1 || booking?.count -1 === 0 ? (
              <p>Somente você</p>
            ) : (
              <p>Você e mais {booking?.count -1 }</p>
            )}
          </div>

        </div>
      </HotelContainer>
      <BookButton onClick={() => setIsBooking(false)}>
          TROCAR DE QUARTO
      </BookButton> 
    </>
  );
}

const MenuHeader = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 18px;
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
  background-color: #FFEED2;

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
    .accommodation,
    .available-rooms {
      h3 {
        font-weight: 700;
        line-height: 14.06px;
        margin-bottom: 3px;
      }
      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #3C3C3C;
      }
    }
  }
`;
