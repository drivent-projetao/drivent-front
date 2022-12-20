import styled from 'styled-components';
import { BsPerson, BsPersonFill } from 'react-icons/bs';

export default function Icon({ icon, selected }) {
  return(
    <IconsContainer selected={selected} className={icon.status}>
      { icon.status === 'filled' ? (
        <PersonFill /> 
      ):( 
        <>
          {selected && icon.spot === icon.bookingCount +1 ?(
            <PersonFill className='selected'/> 
          ):(
            <Person className={icon.status}/>
          )}
        </>
      )}
    </IconsContainer>
  );
}

const PersonFill = styled(BsPersonFill)`
  font-size: 20px;
`;

const Person = styled(BsPerson)`
  font-size: 20px;
`;

const IconsContainer = styled.div` 
  .selected {
    color: #FF4791;
  }
`;
