import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Features/Header/Header";
import CategoriesMenu from "./Features/Categories/CategoriesMenu";
import CategoryDetail from "./Features/CategoryDetail/CategoryDetail";
import DealersChoice from "./Features/DealersChoice/DealersChoice";
import SearchResults from "./Features/SearchResults/SearchResults";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <div className="App">
        <Header className="header" />
        <Switch>
          <Route path="/" exact component={CategoriesMenu} />
          <Route path="/categories" exact component={CategoriesMenu} />
          <Route path="/categories/:category" component={CategoryDetail} />
          <Route path="/dealers-choice" component={DealersChoice} />
          <Route path="/:search" component={SearchResults} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
