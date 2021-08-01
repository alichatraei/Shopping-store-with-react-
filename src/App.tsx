import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routes from "./routes";
import { HeaderLayout, FooterLayout } from "./Layout";
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
        </Switch>
      </Router>
      <FooterLayout />
    </div>
  );
}

export default App;
