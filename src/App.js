import React, { useState, Fragment } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Base from "./component/Base";
import Toppings from "./component/Toppings";
import Order from "./component/Order";
import { AnimatePresence } from "framer-motion";

function App() {
  // gonna updated whenever the route changes
  const location = useLocation();

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
  // by adding these props to Switch, AnimatePresence can fire exist prop when we navigate through pages
  return (
    <Fragment>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
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
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
