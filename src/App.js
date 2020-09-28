import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chats from "./component/Chats/Chats";
import Header from "./component/Header/Header";
import SwipeButtons from "./component/SwipeButtons/SwipeButtons";
import TinderCards from "./component/TinderCards/TinderCards";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      {/* Buttons below tinder card */}

      {/* chats screen */}
      {/* individual chat screen  */}
    </div>
  );
}

export default App;
