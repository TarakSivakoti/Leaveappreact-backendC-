import React from "react";
import Container from '../src/components/container';
import Applyleaves from "../src/components/Applyleave";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Container />
          </Route>
          <Route path="/applyleaves">
            <Applyleaves />
          </Route>
        </Switch>
      </Router>
    );
  }
}