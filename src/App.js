import React from "react";

import Home from "./Pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Favourites from "./Pages/Favourites";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Categories from "./Pages/Categories";
import RecipeContextProvider from "./Contexts/RecipeContext";
import Recipe from "./Pages/Recipe";
const App = () => {
  return (
    <RecipeContextProvider>
      <BrowserRouter forceRefresh={true}>
        <main className="lg:grid grid-cols-6 gap-4">
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/favourites" component={Favourites} exact />
            <Route path="/categories" component={Categories} exact />
            <Route path="/signin" component={SignIn} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/recipe/:id" component={Recipe} exact />
          </Switch>
        </main>
      </BrowserRouter>
    </RecipeContextProvider>
  );
};

export default App;
