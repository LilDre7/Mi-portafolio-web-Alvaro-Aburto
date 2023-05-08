import React from "react";
import Personalnfo from './Personalnfo'
import {motion} from "framer-motion"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 1000, y: -0 }}
      animate={{ opacity: 1099 }}
      exit={{ opacity: 10 }}
    >
      <Personalnfo />
    </motion.div>
  );
};

export default Home;
