import React from "react";
import { HeaderLayout, FooterLayout } from "./Layout";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from "./routes";
import { Home } from "./Views";
import "./App.css";
function App() {
  return (
    <div className="App">
      <HeaderLayout />
      <Router>
        <Switch>
          {Routes.map((item, index) => (
            <Route path={item.path} exact={item.exact} key={index + 1}
              render={() => <item.page />} />
          ))}
          <Home />
        </Switch>
      </Router>
      <FooterLayout />
    </div>
  );
}

export default App;
