import React from "react";
import { Link } from "react-router-dom";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>
      {pizza.toppings && (
        <div>
          <Link to="/order">
            <button>Order</button>
          </Link>
          <Link to="/base">
            <button>Back</button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Toppings;
