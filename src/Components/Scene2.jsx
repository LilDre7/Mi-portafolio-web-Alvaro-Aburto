import { useEffect, useRef } from "react";
import { mountScene } from "./Script";
import { motion } from "framer-motion";

const Scene2 = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // ! Iniciando la ecena
    mountScene(mountRef);

    // * Clean up scene
    // * Esto es importante ya que nos quita las repeticiones de mierda que se hacen.
    return () => {
      // cleanScenexd();
    };
  }, []);

  return (
    <motion.section
      className="container3D dark:bg-[#202023] mt-20"
      ref={mountRef}
    >
    </motion.section>
  );
};

export default Scene2;
