import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import Chats from './components/Chats';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';
import ChatScreen from './components/ChatScreen';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/profile">
            <Header backButton="/"/>
            <Profile />
          </Route>
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
            {/* <SwipeButtons /> */}
          </Route>
        </Switch>
      </Router>
      {/* Header */}

    </div> 
  );
}

export default App;
