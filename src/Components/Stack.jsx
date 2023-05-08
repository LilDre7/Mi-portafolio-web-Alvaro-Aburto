import "./stacks.css";
import { motion } from "framer-motion";

export default () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page__container"
    >
      <div className="page__wrapper">
        <div className="page__hero">
          <div className="page__image"></div>
          <div className="page__text"></div>
          <section className="stack relative h-full w-full">
            <span className="">
              <i
                className="bx bxl-zoom absolute text-black/60  text-8xl top-0 left-0 translate-x-8
                hover:scale-150 transition-all duration-300 hover:text-blue-600 hover:hue-rotate-30
                cursor-zoom-in hover:row-end-auto hover:transition-transform hover:rotate-[360deg] hover:ring-offset-teal-400
              "
              ></i>
            </span>
            <h2 className="text-center text-black text-4xl font-bold p-6">
              Mis habilidades como desarrollador
            </h2>

            <h3 className="text-center text-3xl font-bold p-6 text-black ">
              Lenguajes de programación y frameworks
            </h3>

            <section className=" grid grid-cols-2 gap-4 mt-8 ">
              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-cover h-[10rem]"
                  src="/images/html5.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-cover h-[10rem] "
                  src="/images/css.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/tailwind.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/react.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/redux.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/JS.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/boot.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/arbol.png"
                  alt=""
                />
              </div>
            </section>

            <h3 className="text-center text-3xl font-bold p-6 text-black ">
              Mis tecnologías y utilidades para el desarrollar
            </h3>

            <section className=" grid grid-cols-2 gap-4 mt-8">
              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/vscode.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/github.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/termianal.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/git.png"
                  alt=""
                />
              </div>

              <div className="mb-10">
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/notion.png"
                  alt=""
                />
              </div>

              <div className="mb-10">
                <img
                  className=" imgtec mx-auto w-[10rem] object-contain h-[10rem]  "
                  src="/images/figma.png"
                  alt=""
                />
              </div>
            </section>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
