import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import logo from './logo.svg';
import './App.css';

import config from './ChatbotComponents/config.js'
import ActionProvider from './ChatbotComponents/ActionProvider';
import MessageParser from './ChatbotComponents/MessageParser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
      </header>
    </div>
  );
}

export default App;
