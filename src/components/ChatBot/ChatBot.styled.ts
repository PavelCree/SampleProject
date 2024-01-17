import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const MessageContainer = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
`;

export const Message = styled.div`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

export const Input = styled.input`
  flex-grow: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  width: 50px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
`;
