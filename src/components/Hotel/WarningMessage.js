import styled from 'styled-components';

export default function WarningMessage({ message }) {
  return (
    <WarningMsgContainer>
      <div className="content">{message}</div>
    </WarningMsgContainer>
  );
}

const WarningMsgContainer = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .content {
    color: #8e8e8e;
    font-size: 20px;
    line-height: 23.44px;
    width: 60%;
  }
`;
