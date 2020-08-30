import React, { useState } from "react";
import { motion } from "framer-motion";
//parent variant
const conatinerVariants = {
  invisible: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // The higher the slower
      mass: 0.4,
      // higher # causes less osscilation
      damping: 8,
      //for children elements
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVaraints = {
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className=" container order"
      variants={conatinerVariants}
      initial="invisible"
      animate="visible"
      exit="exit"
    >
      <h2>Thanks for your Order ^)^ </h2>

      <motion.p variants={childVaraints}>
        you ordered a<b> {pizza.base}</b>pizza with:
      </motion.p>
      <motion.div variants={childVaraints}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>
            <b> {topping}</b>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
