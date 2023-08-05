import * as React from 'react';
import './App.css';
import Header from './components/Header/header';
import Chat from './pages/chat/chat';
import useSocket from './socket';

function App() {
  useSocket({host: 'http://localhost:4000'});

  return (
    <React.Fragment>
      <Header />
      <Chat />
    </React.Fragment>
  )
};

export default App