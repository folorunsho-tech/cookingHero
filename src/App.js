import React from "react";

import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Favourites from "./Pages/Favourites";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Settings from "./Pages/Settings";
const App = () => {
  return (
    <BrowserRouter forceRefresh={true}>
      <main className="lg:grid grid-cols-6 gap-4">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/favourites" component={Favourites} exact />
          <Route path="/settings" component={Settings} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/signup" component={SignUp} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
