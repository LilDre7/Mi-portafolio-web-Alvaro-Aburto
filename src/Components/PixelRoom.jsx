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
    <>
      <section
        className="relative translate-y-16 bg-[#d9cdbd] w-[80%] text-[#4c4b49] p-2 rounded-md shadow-lg dark:bg-[#202023] dark:text-[#d9cdbd] sm:mx-auto sm:w-[60%] lg:left-24 lg:absolute lg:w-[25%] lg:top-20 
      "
      >
        <h1 className="text-center text-2xl font-bold">Pixel Room</h1>
        <p className="text-center text-base">
          "Presento un diseño creado por mí que muestra mi espacio de trabajo,
          el lugar donde paso cada día desarrollando software"
        </p>
      </section>
      <motion.section
        className="container3D dark:bg-[#202023] flex justify-center items-center mt-5 min-h-screen lg:mt-28 "
        ref={pixel}
      ></motion.section>
    </>
  );
};

export default Scene2;
