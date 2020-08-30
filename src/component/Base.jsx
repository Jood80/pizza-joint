import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      stiffness: 120,
    },
  },
};

const nextVariants = {
  invisible: {
    x: "-100vw",
  },
  visible: {
    //0 here is px as a Default
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["classic", "Thick Crust", "Thin & Crispy"];

  return (
    <motion.div
      className="base container"
      variants={conatinerVariants}
      initial="invisible"
      animate="visible"
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
          variants={nextVariants}
          // child element doesn't need to have these same props too. it has it already from its parent above.

          // initial="invisible"
          // animate="visible"
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
