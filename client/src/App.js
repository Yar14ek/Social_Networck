import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./componens/Main/Main";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default App;
