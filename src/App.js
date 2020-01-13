import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import LandingPage from "./pages/landing";
import "./App.scss";

function App() {
  return (
    <Provider store={store} r>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
