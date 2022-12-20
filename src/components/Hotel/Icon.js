import styled from 'styled-components';
import { BsPerson, BsPersonFill } from 'react-icons/bs';

export default function Icon({ icon, selected }) {
  return(
    <IconsContainer selected={selected} className={icon.status}>
      { icon.status === 'filled' ? <PersonFill /> : <Person className={icon.status}/>}
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
  :last-child {
    color: ${(props) => (props.selected? '#FF4791' : '#000')};
  }   
`;
