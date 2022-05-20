import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

function PizzaOrder({
  crustOrder,
  setCrustOrder,
  sauceOrder,
  setSauceOrder,
  meatsOrder,
  setMeatsOrder,
  veggiesOrder,
  setVeggiesOrder,
  pizza,
}) {
  const navigate = useNavigate();

  const crustName = !crustOrder ? "" : crustOrder.name;
  const sauceName = !sauceOrder ? "" : sauceOrder.name;

  const meatNames =
    meatsOrder === undefined || meatsOrder.length == 0 ? (
      <li>Select Meats</li>
    ) : (
      meatsOrder.map((meat) => {
        return (
          <motion.li
            key={meat.id}
            whileHover={{
              scale: 1.3,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {meat.name}
          </motion.li>
        );
      })
    );

  const veggieNames =
    veggiesOrder === undefined || veggiesOrder.length == 0 ? (
      <li>Select Veggies</li>
    ) : (
      veggiesOrder.map((veggie) => {
        return (
          <motion.li
            key={veggie.id}
            whileHover={{
              scale: 1.3,
              originX: 0,
              color: "#f8e112",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {veggie.name}
          </motion.li>
        );
      })
    );

  const startOver = () => {
    navigate("/crust");
    setCrustOrder([]);
    setSauceOrder([]);
    setMeatsOrder([]);
    setVeggiesOrder([]);
  };

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ul>
        <li>
          <strong className="underline has-text-white">Crust:</strong>
        </li>
        <motion.li
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "#f8e112",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {!crustName ? "Select A Crust" : crustName}
        </motion.li>
        <li>
          <strong className="underline has-text-white">Sauce:</strong>
        </li>
        <motion.li
          whileHover={{
            scale: 1.3,
            originX: 0,
            color: "#f8e112",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {!sauceName ? "Select A Sauce" : sauceName}
        </motion.li>
        <li className="">
          <strong className="underline has-text-white">Meats:</strong>
        </li>
        {meatNames}
        <li className="">
          <strong className="underline has-text-white">Veggies:</strong>
        </li>
        {veggieNames}
      </ul>

      <motion.div className="next" variants={nextVariants}>
        <div className="mt-4">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            onClick={startOver}
          >
            Start Over
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PizzaOrder;
