import Atropos from "atropos/react";
import { motion } from "framer-motion";


export default function App() {
  return (
    <motion.section 
    initial={{ width: 0 }}
    animate={{  width: "100%" }}
    exit={{ x: "100%" }}
    transition={{ duration: 2 }}
    id="app">
      <Atropos
        shadow={false}
        duration={4000}
        onEnter={() => console.log("Enter")}
        onLeave={() => console.log("Leave")}
        onRotate={(x, y) => console.log("Rotate", x)}
        rotateTouch={false}
      >
        <article className="sm:w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 content-center justify-items-center m-3 dark:text-white bg-transparent dark:hover:bg-transparent hover:bg-slate-200/25">
          <div className="w-[90%] text-center">
            <div className="">
              <a href="https://lilrickandmorty.netlify.app/" target="_blank">
                <img
                  className="w-[100%] h-[12rem] object-contain hover:scale-90 transition duration-300 ease-in-out "
                  src="/images/rick.png"
                  alt=""
                />
              </a>
            </div>
            <div className=" w-full mx-auto rounded-lg mt-6 dark:shadow-white md:w-full ">
              <h4 className="text-center p-2 font-bold">
                Proyecto de Rick and morty
              </h4>
              <span className="pr-3">
                <code className="bg-red-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  HTML
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-violet-500 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  REACTJS
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-green-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  API
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-gray-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  CSS
                </code>
              </span>
              <div className="">
                <p className="p-2 text-center text-black font-thin dark:text-white">
                  Proyecto creado por mi persona dale un vistazo es muy
                  intersante
                </p>
              </div>
            </div>
          </div>

          <div className="w-[90%] text-center">
            <div>
              <a href="https://cualestuclima.netlify.app/" target="_black">
                <img
                  className="w-[100%] h-[12rem] object-contain hover:scale-90 transition duration-300 ease-in-out "
                  src="/images/cloudy-night.png"
                  alt=""
                />
              </a>
            </div>
            <div className=" w-full mx-auto rounded-lg mt-6 dark:shadow-white md:w-full">
              <h4 className="text-center p-2 font-bold">
                Proyecto ¿Cual es tu clima?
              </h4>
              <span className="pr-3">
                <code className="bg-red-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  HTML
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-violet-500 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  REACTJS
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-green-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  API
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-gray-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  CSS
                </code>
              </span>
              <div className="">
                <p className="p-2 text-center text-black font-thin dark:text-white">
                  Proyecto para saber tu clima donde sea que te encuntres.
                  Disfrutalo!
                </p>
              </div>
            </div>
          </div>

          <div className="w-[90%] text-center">
            <div>
              <a href="https://motivationalac.netlify.app/" target="_black">
                <img
                  className="w-[100%] h-[12rem] object-contain object-center hover:scale-90 transition duration-300 ease-in-out"
                  src="/images/fortune-cookie.png"
                  alt=""
                />
              </a>
            </div>
            <div className=" w-full mx-auto rounded-lg mt-6 dark:shadow-white md:w-full ">
              <h4 className="text-center p-2 font-bold">
                Proyecto ¿Cual es tu suerte?
              </h4>
              <span className="pr-3">
                <code className="bg-red-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  HTML
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-violet-500 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  REACTJS
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-green-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  API
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-gray-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  CSS
                </code>
              </span>
              <div className="">
                <p className="p-2 text-center text-black font-thin dark:text-white">
                  Proyecto con dinamica con la muy conocida API de la suerte.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[90%] text-center">
            <div>
              <a href="https://lildreegame.netlify.app/" target="_black">
                <img
                  className="w-[100%] h-[12rem] object-contain object-center hover:scale-90 transition duration-300 ease-in-out"
                  src="/images/memory.png"
                  alt=""
                />
              </a>
            </div>
            <div className=" w-full mx-auto rounded-lg mt-6 dark:shadow-white md:w-full">
              <h4 className="text-center p-2 font-bold">
                Proyecto ¿Prueba tu agilidad mental?
              </h4>
              <span className="pr-3">
                <code className="bg-red-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  HTML
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-yellow-500 text-black rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  JavaScript
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-gray-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  CSS
                </code>
              </span>
              <div className="">
                <p className=" p-2 text-center text-black font-thin dark:text-white">
                  Proyecto creado con vanilla el cual es juego para saber que
                  tan rapida es tu memoria espero te guste.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[90%] text-center">
            <div>
              <a href="https://lilpokeapi.netlify.app/" target="_black">
                <img
                  className="w-[100%] h-[15rem] object-contain object-center hover:scale-90 transition duration-300 ease-in-out"
                  src="/images/poke.png"
                  alt=""
                />
              </a>
            </div>
            <div className=" w-full mx-auto rounded-lg mt-6 dark:shadow-white md:w-full ">
              <h4 className="text-center p-2 font-bold">
                Conviértete en un maestro pokemon con esta PokeAPi 
              </h4>
              <span className="pr-3">
                <code className="bg-red-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  HTML
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-yellow-500 text-black rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  JavaScript
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-green-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  API
                </code>
              </span>
              <span className="pr-3">
                <code className="bg-gray-600 text-white rounded-full pr-3 pl-3 text-base border-b-4 border-b-black">
                  CSS
                </code>
              </span>
              <div className="">
                <p className="p-2 text-center text-black font-thin dark:text-white">
                  Proyecto creado con React y React/toolkit un proyecto donde encontraras todos tus pokemones favoritas,que esperas para probarlo.
                </p>
              </div>
            </div>
          </div>
        </article>
      </Atropos>
    </motion.section>
  );
}
