import React, { useState } from "react";
import ModalForm from "./ModalForm";
import { motion } from "framer-motion";

const Personalnfo = () => {
  const [isShowForm, setisShowForm] = useState(false);

  const handleClickModal = () => {
    setisShowForm((isShowForm) => !isShowForm);
  };

  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{  width: "90%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 2 }}
      className="m-6 relative mt-[-6rem] dark:bg-[#202023] dark:text-white"
    >
      <div className="my_info text-center bg-[#e0d8cfa5] p-3 rounded-lg md:max-w-[70%] md:mx-auto md:text-base dark:text-white">
        <p className="">
          Hola, soy Alvaro soy desarrollador de software en Costa Rica!
        </p>
      </div>
      <article className="flex flex-col mt-3">
        <h1 className="text_name text-left text-2xl font-bold">
          Alvaro Aburto Ocampo
        </h1>
        <p className="text-xl mt-4">
          Digital Craftsman (Creativo / Developer / Artista){" "}
        </p>
        <div className="flex justify-center mt-4 md:flex md:flex-wrap md:justify-around md:relative md:mb-6">
          <img
            className="w-[80px] rounded-full object-cover md:absolute md:right-[20%] md:top-[-4rem] md:w-[100px] "
            src="/images/alvaro.png"
            alt=""
          />
        </div>
        <h2 className="dark:border-gray-500  text-left text-xl font-bold mt-6 border-b-[4px] border-black max-w-[4rem] ">
          Work
        </h2>
        <p className="mt-4 text-left md:text-lg md:text-ellipsis ">
          ¡Hola, soy Lil Dree! Un apasionado desarrollador de software con sede
          en Costa Rica, actualmente me dedico a estudiar y mejorar. Me encanta
          programar y en este portafolio podrás encontrar ejemplos de mis
          habilidades y experiencia como desarrollador. Siempre estoy buscando
          maneras de mejorar y aprender nuevas tecnologías en mi tiempo libre.
          Me fascina estar al tanto de las últimas tendencias en desarrollo y
          nunca dejar de aprender cosas nuevas. Aparte de mi amor por la
          programación, también disfruto del surf y el skate. ¡Me encanta estar
          en contacto con la naturaleza y la adrenalina de los deportes
          extremos! Además, como todo buen desarrollador, no puedo resistirme a
          la música lofi mientras trabajo en mis proyectos. Gracias por visitar
          mi portafolio, ¡espero que lo disfrutes tanto como yo disfruté
          creándolo!
        </p>
        <a href="https://www.ane.cr/Curriculo" target="_black">
          <button className="flex items-center mt-6 p-3 rounded-xl text-white bg-emerald-500 max-w-[10rem] mx-auto hover:bg-emerald-950 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg shadow-black/50 border-b-4 border-black hover:border-white dark:border-white ">
            Mi Portafolio
            <i className="bx bx-code-alt pl-3"></i>
          </button>
        </a>
      </article>
      <article className="mt-3">
        <div>
          <h3 className="dark:border-gray-500 text-left text-2xl font-bold mt-6 border-b-[4px] border-black max-w-[4rem] mb-5">
            Bio
          </h3>
          <p className="mb-4">
            <span className="text-base font-bold">2003 </span>Naci en Costa
            Rica, San Jose.
          </p>
          <p className="mb-4">
            <span className="text-base font-bold">2022 </span>Comence mi
            aprendizaje como desarrollador web.
          </p>
          <p className="mb-4">
            <span className="text-base font-bold">2023 </span>Desarrollador de
            software en Costa Rica.
          </p>
        </div>
        <div>
          <h3 className="dark:border-gray-500 text-left text-2xl font-bold mt-6 border-b-[4px] border-black max-w-[4rem] mb-5">
            Yo{" "}
            <span>
              <i className="bx bx-ghost"></i>
            </span>
          </h3>
          <p className="mb-4 text-center md:text-lg">
            Me gusta el
            <span className="">
              <a
                className="text-[#3e7bed] hover:text-xl transition-all hover:duration-200"
                href="https://kawsone.com/password"
                target="_blank"
              >
                {" "}
                arte{" "}
              </a>
            </span>
            , la
            <span className="">
              <a
                className="text-[#3e7bed] hover:text-xl transition-all hover:duration-200"
                href="https://youtu.be/AFtoouvmhlo"
                target="_blank"
              >
                {" "}
                musica{" "}
              </a>
            </span>
            y el surf, en tiempos libres leo sobre
            <span className="">
              <a
                className="text-[#3e7bed] hover:text-xl transition-all hover:duration-200"
                href="https://es.wikipedia.org/wiki/S%C3%B3crates"
                target="_blank"
              >
                {" "}
                filosofia{" "}
              </a>
            </span>
            <span>
              "¡No te rindas, programador! Cada error es una oportunidad para
              aprender y cada línea de código te acerca más a tu objetivo."
            </span>
          </p>
        </div>
        <div>
          <h3 className="dark:border-gray-500 text-left text-xl font-bold mt-6 border-b-[4px] border-black max-w-[8rem]">
            En la web
            <span>
              <i className="bx bx-mouse text-xl pl-2"></i>
            </span>
          </h3>
          <ul className="flex flex-col mt-3 md:flex md:flex-row md:justify-around md:items-center md:gap-6 md:mt-6">
            <li className="pb-3 max-w-[9rem] flex items-center md:text-xl">
              <a
                href="https://www.instagram.com/thelildree/"
                target="_black"
                className="cursor-pointer p-1 flex gap-2 text-[#3e7bed] hover:text-lg transition-all hover:duration-200 hover:bg-white hover:text-black justify-center rounded-md"
              >
                <span className="flex items-center">
                  <i className="bx bxl-instagram"></i>
                </span>
                <h5>Instagram</h5>
              </a>
            </li>
            <li className="pb-3 max-w-[8rem] flex items-center md:text-xl ">
              <a
                href="https://github.com/LilDre7"
                target="_black"
                className="cursor-pointer p-1 flex gap-2 text-[#3e7bed] hover:text-lg transition-all hover:duration-200 hover:text-black hover:bg-white justify-center rounded-md"
              >
                <span>
                  <i className="bx bxl-github"></i>
                </span>
                <h5>Git Hub</h5>
              </a>
            </li>
            <li className="pb-3 max-w-[8rem] flex items-center md:text-xl">
              <a
                href="https://www.linkedin.com/in/alvaro-aburto-dev/"
                target="_black"
                className="hover:text-black cursor-pointer p-1 flex gap-2 text-[#3e7bed] hover:text-lg transition-all hover:duration-200 hover:bg-white justify-center rounded-md"
              >
                <span>
                  <i className="bx bxl-linkedin"></i>
                </span>
                <h5>Linkedin</h5>
              </a>
            </li>
            <li className="pb-3 max-w-[8rem] flex items-center md:text-xl">
              <a
                href="https://chatwith.io/es/s/lil-dree-developer"
                target="_black"
                className="hover:text-black cursor-pointer p-1 flex gap-2 text-[#3e7bed] hover:text-lg transition-all hover:duration-200 hover:bg-white justify-center rounded-md"
              >
                <span>
                  <i className="bx bxl-whatsapp"></i>
                </span>
                <h5>Whatsapp</h5>
              </a>
            </li>
          </ul>
        </div>
        <article className="md:flex md:flex-row md:justify-center">
          <div className="mb-3 flex justify-center items-center flex-col">
            <img
              className="w-full object-right-top object-cover h-[15rem] mb-5  rounded-lg md:object-cover md:object-top md:w-[80%] sm:grid grid-cols-2 hover:shadow-lg hover:scale-90 duration-200 transition-all hover:bg-black dark:hover:shadow-white"
              src="/images/logo1.jpg"
              alt=""
            />
            <code className="text-center text-base">
              Algunos de los diseños que he creado
            </code>
          </div>
          <div className="mb-3 flex justify-center items-center flex-col">
            <img
              className="w-full object-center object-cover h-[15rem] mb-5 rounded-lg md:object-cover md:object-center md:w-[100%] sm:grid grid-cols-2 hover:shadow-lg hover:scale-90 duration-200 transition-all  hover:bg-black dark:hover:shadow-white"
              src="/images/setup.jpeg"
              alt=""
            />
            <code className="text-center text-base">Mi espacio de trabajo</code>
          </div>
        </article>
        <article>
          <ModalForm setisShowForm={setisShowForm} isShowForm={isShowForm} />
          <h2 className="text-start text-2xl font-bold border-b-4 border-b-black max-w-[10rem] dark:border-b-gray-500 dark:border-b-4">
            Contactame
          </h2>
          <p className="mt-3 text-start">
            ¡Hola! Si estás buscando un desarrollador de software, has llegado
            al lugar indicado. Si necesitas una mano amiga, no dudes en
            contactarme. Estoy disponible para responder cualquier pregunta o
            consulta que tengas. ¡Hablemos pronto!
          </p>
          <div className="text-center p-3 mt-5">
            <button
              onClick={handleClickModal}
              className="css-button-retro--black w-[50%] text-white"
            >
              <span className="">
                <i className="bx bxl-gmail pr-3"></i>
                Contactame
              </span>
            </button>
          </div>
          <div className="text-center pb-3">
            <code className="m-2">
              © 2023 Alvaro Aburto. Todos los derechos reservados.
            </code>
          </div>
        </article>
      </article>
    </motion.section>
  );
};

export default Personalnfo;
