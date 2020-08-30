import React from "react";

const Order = ({ pizza }) => (
  <div className=" container order">
    <h2> Thanks for your Order ^_^ </h2>
    <p>
      {" "}
      you ordered a<b> {pizza.base}</b>pizza with:
    </p>
    {pizza.toppings.map((topping) => (
      <div key={topping} >
        <b> {topping}</b>
      </div>
    ))}
  </div>
);
export default Order;
