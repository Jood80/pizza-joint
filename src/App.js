import React, { useState, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Base from "./component/Base";
import Toppings from "./component/Toppings";
import Order from "./component/Order";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>

        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>

        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
