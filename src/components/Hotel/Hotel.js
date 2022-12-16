import styled from 'styled-components';

export default function Hotel({ id, name, image, selected, handleSelectHotel }) {
  return (
    <HotelContainer selected={selected} onClick={handleSelectHotel}>
      <img src={image} alt="hotel" />
      <div className="hotel-name">{name}</div>
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
  }
`;
