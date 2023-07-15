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
            <header className="fixed">
              <i
                className="bx bx-mouse fixed text-black/60  text-8xl bottom-0 left-0 translate-x-8
                hover:scale-90 transition-all duration-300 hover:text-blue-600 hover:hue-rotate-30
                cursor-zoom-in hover:row-end-auto hover:transition-transform hover:rotate-[360deg] hover:ring-offset-teal-400 p-2 
              "
              ></i>
            </header>
            <h2 className="text-center text-black text-5xl font-bold p-4">
              Mis habilidades como desarrollador
            </h2>

            <div className="relative w-full">
              <p className="color-animating-text">
                Haz <span className="text-5xl">scroll</span> aquí
                <i className="bx bx-right-arrow-alt"></i>
              </p>
            </div>

            <h3 className="text-left text-6xl font-bold p-6 text-black ">
              Front-End
            </h3>

            <section className=" grid grid-cols-2 gap-4 mt-8 ">
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/React-Dark.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/NextJS-Dark.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/Redux.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/HTML.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/CSS.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/JavaScript.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/TailwindCSS-Dark.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/Sass.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/Bootstrap.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/MaterialUI-Light.svg"
                  alt=""
                />
              </div>
            </section>

            <h3 className="text-center text-6xl font-bold p-6 text-black ">
              Back-End
            </h3>

            <section className=" grid grid-cols-2 gap-4 mt-8 ">
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/NodeJS-Dark.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/ExpressJS-Dark.svg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/Docker.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/PostgreSQL-Dark.svg"
                  alt=""
                />
              </div>
            </section>

            <h3 className="text-center text-5xl font-bold p-6 text-black ">
              Algunas de mis utilidades
            </h3>

            <section className=" grid grid-cols-2 gap-4 mt-8">
              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/VSCode-Dark.svg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/Vite-Dark.svg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/Firebase-Dark.svg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/Discord.svg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/StackOverflow-Dark.svg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/Netlify-Dark.svg"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/termianal.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/git.png"
                  alt=""
                />
              </div>

              <div className="mb-10">
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
                  src="/images/notion.png"
                  alt=""
                />
              </div>

              <div className="mb-10">
                <img
                  className=" imgtec mx-auto w-[9rem] object-contain h-[10rem]  "
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
