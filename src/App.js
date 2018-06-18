import React, { Component } from 'react';
import { Route, Switch, NavLink } from "react-router-dom"

import './App.css'

import GitHub from "./GitHub"
import Esri from "./Esri"
import Adorable from "./Adorable"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Ain't no party like my nana's</h3>
          <h1>API Party</h1>
        </div>

        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub API</NavLink>
          </li>
          <li>
            <NavLink to="/esri">Esri API</NavLink>
          </li>
          <li>
            <NavLink to="/adorable">Adorable.io Avatars</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/github" component={GitHub} />
          <Route path="/esri" component={Esri} />
          <Route path="/adorable" component={Adorable} />
          <Route render={() => <p>
            <a href="https://www.youtube.com/watch?v=FArZxLj6DLk">Hi! Ho!</a>
            (to get started, click a link above)
          </p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
