import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PixelRoom } from "./RoomScript";

const Scene2 = () => {
  const pixel = useRef(null);

  useEffect(() => {
    // ! Iniciando la ecena
    PixelRoom(pixel);

    // * Clean up scene
    // * Esto es importante ya que nos quita las repeticiones de mierda que se hacen.
    return () => {
      // cleanScenexd();
    };
  }, []);

  return (
    <motion.section
      className="container3D dark:bg-[#202023] flex justify-center items-center mt-32 min-h-screen "
      ref={pixel}
    ></motion.section>
  );
};

export default Scene2;
