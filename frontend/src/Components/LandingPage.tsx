import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export const LandingPage: React.FunctionComponent = () => {
  return (
    <motion.div
      className="landing-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Link to={"/home"}>
        <button>Accommodation</button>
      </Link>

      <Link to={"/home/contact"}>
        <button>Contact</button>
      </Link>
    </motion.div>
  );
};
