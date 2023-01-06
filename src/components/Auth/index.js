import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import Container from '../Container';

export const StyledContainer = styled(Container)`
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 10px;
`;

export const Label = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Icons = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 10px;
`;

export const Google = styled(FcGoogle)`
  font-size: 30px;
  cursor: pointer;
`;

export const Github = styled(FaGithub)`
  font-size: 30px;
  cursor: pointer;
`;
