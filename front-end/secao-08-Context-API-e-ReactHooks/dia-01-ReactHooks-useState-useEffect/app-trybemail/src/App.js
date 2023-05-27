import { useState, useEffect } from 'react';

import './App.css';

import messadesList from './data/messagesList';
import { READ, UNREAD } from './constants';

import Controls from './components/Controls';
import List from './components/List';

function App() {
  const [messages, setMessages] = useState(messadesList);

  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === READ);
  
    if (isAllMessagesRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [messages]);

  // A função setMessageStatus passa por cada item da lista de mensagens salva no estado por meio do método .map. Caso o item iterado tenha o id que é recebido pelo parâmetro messageId, um novo objeto é retornado com o novo status definido pelo parâmetro newStatus. Caso contrário, o item é retornado sem modificações.

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage;
    });

    setMessages(updatedMessages);
  };

  const markAllAsRead = () => {
    const allAsRead = messages.map((m) => ({...m, status: READ}));
    setMessages(allAsRead);
  }
  const markAllAsUnread = () => {
    const allAsRead = messages.map((m) => ({...m, status: UNREAD}));
    setMessages(allAsRead);
  }

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>

    <Controls 
      markAllAsRead={ markAllAsRead }
      markAllAsUnread={ markAllAsUnread }
    />

      <List
        messages={ messages }
        setMessageStatus={ setMessageStatus }
      />
    </div>
  );
}

export default App;