import styled from 'styled-components';

export default function Hotel({ id, name, image, selected, handleSelectHotel }) {
  return (
    <HotelContainer selected={selected} onClick={handleSelectHotel}>
      <img src={image} alt="hotel" />
      <div className="hotel-name">{name}</div>
      <div className="hotel-info">
        <div className="accomodation">
          <h3>Tipos de acomodação</h3>
          <p>Single, Double e Triple</p>
        </div>
        <div className="available-rooms">
          <h3>Vagas Disponíveis</h3>
          <p>103</p>
        </div>
      </div>
    </HotelContainer>
  );
}

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
    margin-bottom: 14px;
  }

  .hotel-info {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 12px;
    .accomodation,
    .available-rooms {
      h3 {
        font-weight: 700;
        line-height: 14.06px;
        margin-bottom: 3px;
      }
      p {
        line-height: 14.06px;
      }
    }
  }
`;
