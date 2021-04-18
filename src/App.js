import React from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";

import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
// import Characters from './components/characters/Characters';
import Episodes from './components/episodes/Episodes';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/characters" component={Characters} />
        <Route path="/characters/:id" component={Characters} /> */}
        <Route path="/episodes" component={Episodes} />
      </Switch>
    </div>
  );
}
export default App;
