import { BookButton, MenuHeader } from './ChooseRoomMenu';
import { HotelContainer } from './Hotel';

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
      <HotelContainer selected={true}>
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
