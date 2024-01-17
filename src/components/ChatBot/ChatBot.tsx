import React, {
  useState,
  KeyboardEvent,
  useCallback,
  ChangeEvent,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postMessage } from '../../api/chatBotApi';
import './ChatBot.css';
import * as styled from './ChatBot.styled';
import { SendButton } from './ChatBot.styled';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

// eslint-disable-next-line import/prefer-default-export
export const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const processMessage = (message: string) => {
    setMessages(prev => [
      ...prev,
      { id: uuidv4(), text: message, sender: 'bot' },
    ]);
  };
  const handleSendMessage = useCallback(async (message: string) => {
    setMessages(prev => [
      ...prev,
      { id: uuidv4(), text: message, sender: 'user' },
    ]);
    setLoading(true);
    const msg = await postMessage(message);
    processMessage(msg.result.alternatives[0].message.text);
    setLoading(false);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    setInputText(currentTarget.value);
  };

  const handleSend = useCallback(() => {
    handleSendMessage(inputText);
    setInputText('');
  }, [handleSendMessage, inputText]);

  return (
    <styled.ChatContainer>
      {messages.map(msg => (
        <styled.MessageContainer
          key={msg.id}
          className={`message ${msg.sender}`}
        >
          <strong>{msg.sender}:</strong> {msg.text}
        </styled.MessageContainer>
      ))}
      <styled.InputContainer>
        <styled.Input
          value={inputText}
          onChange={handleChange}
          disabled={loading}
        />
        <styled.SendButton disabled={loading} onClick={handleSend}>
          Send
        </styled.SendButton>
      </styled.InputContainer>
    </styled.ChatContainer>
  );
};
