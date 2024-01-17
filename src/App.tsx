import React, { FC } from 'react';
import './App.css';
import { ChatBot } from './components/ChatBot';

const App: FC = () => {
  return (
    <div className="App">
      <ChatBot />
    </div>
  );
};

export default App;
