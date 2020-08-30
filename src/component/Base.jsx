import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["classic", "Thick Crust", "Thin & Crispy"];

  return (
    <motion.div
      className="base container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}
    >
      <h3> step 1: Choose your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>
      {pizza.base && (
        <motion.div
          className="next"
          initial={{ x: "-100vw" }}
          //0 here is px as a Default
          animate={{ x: 0 }}
          transition={{ type: "string", stiffness: 120 }}
        >
          <Link to="/toppings">
            {" "}
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: " 0px 0px 8px rgb(255, 255, 255)",
                boxShadow: " 0px 0px 8px rgb(255, 255, 255)",
              }}
            >
              Next
            </motion.button>{" "}
          </Link>
          <Link to="/">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: " 0px 0px 8px rgb(255, 255, 255)",
                boxShadow: " 0px 0px 8px rgb(255, 255, 255)",
              }}
            >
              Back
            </motion.button>{" "}
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
