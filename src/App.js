import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import TinderCards from "./component/TinderCards/TinderCards";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h3>I am a ChatPage</h3>
          </Route>
          <Route path="/">
            <TinderCards />
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
