export default App;
import React from "react";
import Atropos from "atropos/react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Proyecto de Rick and morty",
    githubLink: "https://github.com/LilDre7/Proyecto-Api-RickandMorty.git",
    liveLink: "https://lilrickandmorty.netlify.app/",
    imageSrc: "/newImagesProyect/1300399.jpg",
    description:
      "Proyecto creado por mi persona dale un vistazo es muy interesante",
    stack: ["HTML", "REACTJS", "API", "CSS"],
  },
  {
    title: "  Proyecto ¿Cual es tu clima?",
    githubLink: "https://github.com/LilDre7/Proyecto-clima.git",
    liveLink: "https://cualestuclima.netlify.app/",
    imageSrc: "/newImagesProyect/hq720.jpg",
    description:
      "  Proyecto para saber tu clima donde sea que te encuntres, Disfrutalo!",
    stack: ["HTML", "REACTJS", "API", "CSS"],
  },
  {
    title: "Proyecto ¿Cual es tu suerte?",
    githubLink: "https://github.com/LilDre7/Proyecto-citas-random.git",
    liveLink: "https://motivationalac.netlify.app/",
    imageSrc: "/newImagesProyect/galletas.jpg",
    description: "Proyecto con dinamica con la muy conocida API de la suerte.",
    stack: ["HTML", "REACTJS", "API", "CSS"],
  },
  {
    title: "Proyecto ¿Prueba tu agilidad mental?",
    githubLink: "https://github.com/LilDre7/Juego-de-memoria.git",
    liveLink: "https://lildreegame.netlify.app/",
    imageSrc: "/newImagesProyect/gamecard.jpg",
    description:
      "Proyecto creado con vanilla el cual es juego para saber que tan rapida es tu memoria espero te guste.",
    stack: ["HTML", "REACTJS", "API", "CSS"],
  },
  {
    title: "Conviértete en un maestro pokemon con esta PokeAPi",
    githubLink: "https://github.com/LilDre7/Proyecto-Pokeapi.git",
    liveLink: "https://lilpokeapi.netlify.app/",
    imageSrc: "/newImagesProyect/pokemon.jpg",
    description:
      "Proyecto creado con React y React/toolkit un proyecto donde encontraras todos tus pokemones favoritas,que esperas para probarlo.",
    stack: ["HTML", "REACTJS", "API", "CSS"],
  },
];

function ProjectCard({ project }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className=" mb-3 sm:mb-1 last:mb-0"
    >
      <Atropos
        shadow={false}
        duration={800}
        onEnter={() => console.log("Enter")}
        onLeave={() => console.log("Leave")}
        onRotate={(y, x) => console.log("Rotate", y)}
      >
        <section className="bg-gray-100 w-[23rem] ml-6 md:w-[34rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[17rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
              {project.description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {project.stack.map((tech, index) => (
                <li
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 font-bold"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute opacity-30 sm:opacity-90 rounded-md top-8 -right-40 w-[24.25rem] rounded-t-lg shadow-2xl">
            <a href={project.liveLink} target="_blank">
              <img
                className="object-cover w-full h-full rounded-md"
                src={project.imageSrc}
                alt=""
              />
            </a>
          </div>
        </section>
      </Atropos>
    </motion.div>
  );
}

function App() {
  return (
    <article className="sm:w-full mx-auto grid grid-cols-1 md:grid-cols-1 gap-2 content-center justify-items-center m-3 dark:text-white bg-transparent dark:hover:bg-transparent hover:bg-slate-200/10">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </article>
  );
}
