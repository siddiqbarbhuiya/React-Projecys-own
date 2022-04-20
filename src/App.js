import React from "react";
import ListView from "./components/ListView";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect, Routes } from "react-router-dom";
import WrongPage from "./WrongPage";
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
       {/*  <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>

        <Route path="/welcome">
          <Welcome />
        </Route> */}

     {/*    <Route path="/category/:apple">
          <ListView />
        </Route>
        go to Listview commented part connected with url commented on listview */}

        <Route exact path="/category/bottom-wear">
          <ListView key="bottom-wear" name="bottom-wear" />
        </Route>
        <Route exact path="/category/w-cosmetics">
          <ListView key="w-cosmetics" name="w-cosmetics" />
        </Route>
        <Route exact path="/category/top-wear-kurtas">
          <ListView key="top-wear-kurtas" name="top-wear-kurtas" />
        </Route>
        <Route exact path="/category/footwear">
          <ListView key="footwear" name="footwear" />
        </Route>
        <Route exact path="/category/drapes-wear">
          <ListView key="drapes-wear" name="drapes-wear" />
        </Route>
        <Route path="*">
          <WrongPage key="wrong" />
        </Route>
      </Switch> 
      {/* <Products />  */}
    </div>
  );
};

export default App;
