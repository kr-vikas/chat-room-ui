import * as React from 'react';
import './App.css';
import Header from './components/Header/header';
import Chat from './pages/chat/chat';

function App() {

  return (
    <React.Fragment>
      <Header />
      <Chat />
    </React.Fragment>
  )
};

export default App