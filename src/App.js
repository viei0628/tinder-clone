import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat"/>
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            {/* TinderCards */}
            <Header />
            <TinderCards />
            {/* SwipeButtons */}
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      {/* Header */}

    </div> 
  );
}

export default App;
