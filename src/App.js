import React from "react";
import "./App.css";
import {Route, Switch, Link} from "react-router-dom";
import Form from "./components/form";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to={`/pizza`}>
        <button>Order Now</button>
      </Link>
      <Link to={`/home`}>
        <button>Home</button>
      </Link>
      <Switch>
        <Route path="/pizza">
        <Form />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </>
  );
};

export default App;


