import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Top from "./Pages/Top";
import View from "./Pages/View";
import NotFound from "./Pages/NotFound";
import SpaceEntry from "./Pages/SpaceEntry";

function App() {
  const history = useHistory();
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/space/entry" component={SpaceEntry} />
        <Route exact path="/space/:id" render={() => <View />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
