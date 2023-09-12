import React from "react";
import { motion } from "framer-motion";
import "./stacks.css";

const Stack = () => {
  const skills = {
    frontEnd: [
      { src: "/images/React-Dark.svg", alt: "React" },
      { src: "/images/NextJS-Dark.svg", alt: "Next.js" },
      // Agrega más habilidades de Front-End aquí
    ],
    backEnd: [
      { src: "/images/NodeJS-Dark.svg", alt: "Node.js" },
      { src: "/images/Docker.svg", alt: "Docker.js" },
      // Agrega más habilidades de Back-End aquí
    ],
    utilities: [
      { src: "/images/VSCode-Dark.svg", alt: "VS Code" },
      { src: "/images/Vite-Dark.svg", alt: "Vite" },
      // Agrega más utilidades aquí
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page__container -z-0 "
    >
      <div className="page__wrapper">
        <div className="page__hero">
          <div className="page__image"></div>
          <div className="page__text"></div>
          <section className="stack relative h-full w-full">
            <h2 className="text-center text-black text-[3.2rem] font-bold p-5">
              Mis habilidades como desarrollador
            </h2>
            <div className="relative w-full">
              <p className="color-animating-text">
                Haz <span className="text-5xl">scroll</span> aquí
                <i className="bx bx-right-arrow-alt"></i>
              </p>
            </div>

            <h3 className="text-left text-6xl font-bold p-6 text-black">
              Front-End
            </h3>
            <section className="grid grid-cols-2 gap-4 mt-8">
              {skills.frontEnd.map((skill, index) => (
                <div key={index}>
                  <img
                    className="imgtec mx-auto w-[11rem] object-contain h-[10rem]"
                    src={skill.src}
                    alt={skill.alt}
                  />
                </div>
              ))}
            </section>

            <h3 className="text-center text-6xl font-bold p-6 text-black">
              Back-End
            </h3>
            <section className="grid grid-cols-2 gap-4 mt-8">
              {skills.backEnd.map((skill, index) => (
                <div key={index}>
                  <img
                    className="imgtec mx-auto w-[11rem] object-contain h-[10rem]"
                    src={skill.src}
                    alt={skill.alt}
                  />
                </div>
              ))}
            </section>

            <h3 className="text-center text-5xl font-bold p-6 text-black">
              Algunas de mis utilidades
            </h3>
            <section className="grid grid-cols-2 gap-4 mt-8">
              {skills.utilities.map((skill, index) => (
                <div key={index}>
                  <img
                    className="imgtec mx-auto w-[11rem] object-contain h-[10rem]"
                    src={skill.src}
                    alt={skill.alt}
                  />
                </div>
              ))}
            </section>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Stack;
