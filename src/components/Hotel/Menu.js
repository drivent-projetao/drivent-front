import { useState, useEffect } from 'react';

import useBooking from '../../hooks/api/useBooking';

import ChooseHotelMenu from './ChooseHotelMenu';
import ChooseRoomMenu from './ChooseRoomMenu';
import Booking from './Booking';

export default function Menu() {
  const [isBooking, setIsBooking] = useState(false);
  const [booking, setBooking] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(0);
  const [rooms, setRooms] = useState([]);

  const { getBooking } = useBooking();

  const handleSelectHotel = (hotel) => {
    if (hotel.id === selectedHotel) {
      setSelectedHotel(0);
      setRooms([]);
    } else {
      setSelectedHotel(hotel.id);
      setRooms(hotel.rooms);
    }
  };

  useEffect(async() => {
    const data = await getBooking();
    setBooking(data);
    setIsBooking(true);
  }, []);

  return (
    <>
      { isBooking ? (
        <Booking userBooking={booking} setIsBooking={setIsBooking}/>
      ) : (
        <>
          <ChooseHotelMenu
            selectedHotel={selectedHotel}
            handleSelectHotel={handleSelectHotel}
          />
          { selectedHotel === 0 ? (
            <></>
          ) : (
            <ChooseRoomMenu 
              rooms={rooms}
              setIsBooking={setIsBooking}
            />
          )}
        </> 
      )}
    </>
  );
}
