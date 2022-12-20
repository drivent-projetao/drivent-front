import { useState, useEffect } from 'react';

import useBooking from '../../hooks/api/useBooking';
import useHotels from '../../hooks/api/useHotels';

import ChooseHotelMenu from './ChooseHotelMenu';
import ChooseRoomMenu from './ChooseRoomMenu';
import Booking from './Booking';

export default function Menu() {
  const [selectedHotel, setSelectedHotel] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
  const [booking, setBooking] = useState([]);
  const [hotels, setHotels ] = useState([]);
  const [rooms, setRooms] = useState([]);

  const { getBooking } = useBooking();
  const { getHotels } = useHotels();

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
    const data = await getHotels();
    setHotels(data);
  }, []);

  useEffect(async() => {
    try {
      const data = await getBooking();
      setBooking(data);
      setIsBooking(true);
    } catch (error) {
      setBooking([]);
    }   
  }, []);

  return (
    <>
      { isBooking ? (
        <Booking 
          userBooking={booking} 
          setIsBooking={setIsBooking}
        />
      ) : (
        <>
          <ChooseHotelMenu
            hotels={hotels}
            selectedHotel={selectedHotel}
            handleSelectHotel={handleSelectHotel}
          />
          { selectedHotel === 0 ? (
            <></>
          ) : (
            <ChooseRoomMenu
              rooms={rooms}
              setHotels={setHotels}
              setBooking={setBooking}
              setIsBooking={setIsBooking}
              setSelectedHotel={setSelectedHotel}
            />
          )}
        </> 
      )}
    </>
  );
}
