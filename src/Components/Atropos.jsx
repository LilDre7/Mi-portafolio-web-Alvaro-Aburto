import Atropos from "atropos/react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.section
      animate={{ width: "100%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 2 }}
      id="app"
    >
      <article className="sm:w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 content-center justify-items-center m-3 dark:text-white bg-transparent dark:hover:bg-transparent hover:bg-slate-200/10">
        <div className="w-[90%] text-center ">
          <Atropos
            shadow={false}
            duration={800}
            onEnter={() => console.log("Enter")}
            onLeave={() => console.log("Leave")}
            onRotate={(y, x) => console.log("Rotate", y)}
          >
            <div className="absolute">
              <a
                href="https://github.com/LilDre7/Proyecto-Api-RickandMorty.git"
                target="_blank"
              >
                <i className="bx bxl-github text-2xl translate-x-7 hover:text-violet-600 hover:scale-150 transition duration-300 ease-in-out"></i>
              </a>
            </div>
            <div className="absolute right-0">
              <a href="https://lilrickandmorty.netlify.app/" target="_blank">
                <i className="bx bx-link-external text-2xl -translate-x-9  hover:text-violet-600 hover:scale-150 transition duration-300 ease-in-out"></i>
              </a>
            </div>
            <div className="">
              <a href="https://lilrickandmorty.netlify.app/" target="_blank">
                <img
                  className="w-[65%] mx-auto h-[11rem] object-contain  transition duration-300 ease-in-out "
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
          </Atropos>
        </div>

        <div className="w-[90%] text-center">
          <Atropos
            shadow={false}
            duration={800}
            onEnter={() => console.log("Enter")}
            onLeave={() => console.log("Leave")}
            onRotate={(y, x) => console.log("Rotate", y)}
            activeOffset={40}
          >
            <div className="">
              <div className="absolute">
                <a
                  href="https://github.com/LilDre7/Proyecto-clima.git"
                  target="_blank"
                >
                  <i className="bx bxl-github text-2xl translate-x-7 hover:text-violet-600 hover:scale-150 transition duration-300 ease-in-out"></i>
                </a>
              </div>
              <div className="absolute right-0">
                <a href="https://cualestuclima.netlify.app/" target="_blank">
                  <i className="bx bx-link-external text-2xl -translate-x-9  hover:text-violet-600 hover:scale-150 transition duration-300 ease-in-out"></i>
                </a>
              </div>
              <div>
                <a href="https://cualestuclima.netlify.app/" target="_black">
                  <img
                    className="w-[70%] mx-auto h-[11rem] object-contain hover:scale-90 transition duration-300 ease-in-out "
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
          </Atropos>
        </div>

        <div className="w-[90%] text-center">
          <Atropos
            shadow={false}
            duration={800}
            onEnter={() => console.log("Enter")}
            onLeave={() => console.log("Leave")}
            onRotate={(y, x) => console.log("Rotate", y)}
          >
            <div className="">
              <div className="absolute">
                <a
                  href="https://github.com/LilDre7/Proyecto-citas-random.git"
                  target="_blank"
                >
                  <i className="bx bxl-github text-2xl translate-x-7 hover:text-violet-600 hover:scale-150 transition duration-300 ease-in-out"></i>
                </a>
              </div>
              <div className="absolute right-0">
                <a href="https://motivationalac.netlify.app/" target="_blank">
                  <i className="bx bx-link-external text-2xl -translate-x-9  hover:text-violet-600 hover:scale-150 transition duration-300 ease-in-out"></i>
                </a>
              </div>
              <div>
                <a href="https://motivationalac.netlify.app/" target="_black">
                  {" "}
                  <img
                    className="w-[50%] mx-auto h-[11rem] object-contain object-center hover:scale-90 transition duration-300 ease-in-out"
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
          </Atropos>
        </div>

        <div className="w-[90%] text-center">
          <Atropos
            shadow={false}
            duration={800}
            onEnter={() => console.log("Enter")}
            onLeave={() => console.log("Leave")}
            onRotate={(y, x) => console.log("Rotate", y)}
          >
            <div className="">
              <div className="absolute">
                <a
                  href="https://github.com/LilDre7/Juego-de-memoria.git"
                  target="_blank"
                >
                  <i className="bx bxl-github text-2xl translate-x-7 hover:text-violet-600 hover:scale-150 transition duration-300 ease-in-out"></i>
                </a>
              </div>
              <div className="absolute right-0">
                <a href="https://lildreegame.netlify.app/" target="_black">
                  <i className="bx bx-link-external text-2xl -translate-x-9  hover:text-violet-600 hover:scale-150 transition duration-300 ease-in-out"></i>
                </a>
              </div>
              <div>
                <a href="https://lildreegame.netlify.app/" target="_black">
                  <img
                    className="w-[50%] mx-auto h-[11rem] object-contain object-center hover:scale-90 transition duration-300 ease-in-out"
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
          </Atropos>
        </div>

        <div className="w-[90%] text-center">
          <Atropos
            shadow={false}
            duration={800}
            onEnter={() => console.log("Enter")}
            onLeave={() => console.log("Leave")}
            onRotate={(y, x) => console.log("Rotate", y)}
          >
            <div className="">
              <div className="absolute">
                <a
                  href="https://github.com/LilDre7/Proyecto-Pokeapi.git"
                  target="_blank"
                >
                  <i className="bx bxl-github text-2xl translate-x-7 hover:text-violet-600 hover:scale-150 transition duration-300 ease-in-out"></i>
                </a>
              </div>
              <div className="absolute right-0">
                <a href="https://lilpokeapi.netlify.app/" target="_blank">
                  <i className="bx bx-link-external text-2xl -translate-x-9  hover:text-violet-600 hover:scale-150 transition duration-300 ease-in-out"></i>
                </a>
              </div>
              <div>
                <a href="https://lilpokeapi.netlify.app/" target="_black">
                  <img
                    className="w-[70%] mx-auto h-[11rem] object-contain object-center hover:scale-90 transition duration-300 ease-in-out"
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
                    Proyecto creado con React y React/toolkit un proyecto donde
                    encontraras todos tus pokemones favoritas,que esperas para
                    probarlo.
                  </p>
                </div>
              </div>
            </div>
          </Atropos>
        </div>
      </article>
    </motion.section>
  );
}
