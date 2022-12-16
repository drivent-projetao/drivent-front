import styled from 'styled-components';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { useState } from 'react';

export default function Room({ id, name, capacity, bookingCount, selected, handleSelectRoom }) {
  const [isFull, setIsFull] = useState(false);

  if (capacity === bookingCount) {
    setIsFull(true);
  }

  return (
    <RoomContainer isFull={isFull} selected={selected} onClick={handleSelectRoom}>
      {name}
      <IconsContainer>
        { capacity === 1 ? (
          <>
            {isFull ? <BsPersonFill className='icon' /> : <BsPerson className='icon' />}
          </>
        ) : (
          <>
            { capacity === 2 ? (
              <>
                <BsPerson className='icon' />
                <BsPerson className='icon' />
              </>
            ) : (
              <>
                <BsPerson className='icon' />
                <BsPerson className='icon' />
                <BsPerson className='icon' />
              </>
            )}
          </>
        )}
      </IconsContainer>
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  width: 190px;
  height: 45px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #CECECE;
  transition: all ease .5s;
  cursor: ${(props) => (props.isFull ? 'not-allowed;' : 'pointer')};
   
  opacity: ${(props) => (props.isFull ? '.5' : '1')};
  background-color: ${(props) => (
    props.isFull ? 
      '#CCC' : (
        props.selected? '#FFEED2' : 'transparent'
      ))};

  .icon {
    font-size: 20px;

    :last-child {
        color: ${(props) => (props.selected ? '#FF4791' : '#000')};
    }
  }

  &:hover {
    transform: ${(props) => (props.isFull ? '' : 'scale(1.05)')};;
  }
`;

const IconsContainer = styled.div`
    display: flex;
    gap: 5px;
`;
