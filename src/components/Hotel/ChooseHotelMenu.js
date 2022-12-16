import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';

function Hotel({ id, name, image }) {
  return (
    <div className="hotel">
      <img src={image} alt="hotel" />
      <div className="hotel-name">{name}</div>
    </div>
  );
}

export default function ChooseHotelMenu() {
  const { hotels } = useHotels();

  return (
    <>
      <MenuHeader>Primeiro, escolha seu hotel</MenuHeader>
      <HotelBrowser>
        {hotels ? (
          hotels.map((hotel, index) => <Hotel key={index} id={hotel.id} name={hotel.name} image={hotel.image} />)
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

  .hotel {
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
      background: linear-gradient(to right, rgba(250, 64, 152, 0.5), rgba(255, 215, 127, 0.5));
      transform: scale(1.02);
    }
    img {
      width: 168px;
      height: 109px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    .hotel-name {
      font-size: 20px;
    }
  }
`;
