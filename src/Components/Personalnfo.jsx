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
      animate={{ width: "90%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 2 }}
      className="mx-auto mt-[-7rem] md:max-w-[70%] dark:bg-[#202023] dark:text-white p-3 rounded-lg relative "
    >
      <div className="text-center bg-[#f5f0e8] dark:bg-[#131314] p-3 rounded-lg">
        <p>
          ¡Hi, soy Álvaro Aburto, desarrollador Web Full-Stack en Costa Rica!
        </p>
      </div>
      <article className="mt-3">
        <h1 className="text-2xl font-bold">Alvaro Aburto Ocampo</h1>
        <p className="text-xl mt-4 max-w-[400px] md:max-w-[345px] ">
          Desarrollador Web Full-Stack
          <span className="font-semibold pl-1 ">
            (Front-End / Developer / Back-End )
          </span>
        </p>
        <div className="flex justify-center mt-4 md:flex md:flex-wrap md:justify-around md:relative md:mb-6">
          <img
            className="w-[90px] rounded-full object-cover md:absolute md:right-[10%] md:top-[-7rem] md:w-[130px] "
            src="/images/alvaro2.png"
            alt=""
          />
        </div>
        <h2 className="text-left text-xl font-bold mt-6 border-b-[4px] border-black max-w-[5rem]">
          Trabajo
        </h2>
        <p className="mt-4 text-justify ">
          ¡Hola, soy Álvaro Aburto, también conocido como
          <span className="text-[#1018b9] font-bold"> Lil Dree</span>. Soy un
          apasionado desarrollador de software con sede en Costa Rica,
          especializado en desarrollo web Full-Stack. En mi portafolio,
          encontrarás ejemplos de mis habilidades y experiencia como
          desarrollador. Siempre estoy en busca de formas de mejorar y aprender
          nuevas tecnologías en mi tiempo libre. Además de programar, disfruto
          del surf y el skate, así como estar en contacto con la naturaleza y la
          adrenalina de los deportes extremos. La música lofi es mi compañera
          constante mientras trabajo en mis proyectos. ¡Gracias por visitar mi
          portafolio, espero que lo disfrutes tanto como yo disfruté creándolo!
        </p>
        <a
          download="Alvaro Aburto CV"
          href="/images/CV-ALVAROABURTO.pdf"
          target="_blank"
          className="block w-[fit-content] mx-auto mt-6 p-3 rounded-xl text-white bg-[#319795] hover:bg-[#6782e4] transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg border-b-4 border-black hover:border-white dark:border-white"
        >
          Mi currículum <i className="bx bx-code-alt pl-3"></i>
        </a>
        <div className="mt-3">
          <h3 className="text-2xl font-bold mt-6 border-b-[4px] border-black max-w-[5rem] mb-5">
            Bio <i className="bx bx-ghost pl-2"></i>
          </h3>
          <p className="mb-4">
            <span className="font-bold">2003 </span>Nací en Costa Rica, San
            Jose.
          </p>
          <p className="mb-4">
            <span className="font-bold">2021</span> Comencé mi aprendizaje como
            desarrollador web.
          </p>
          <p className="mb-4">
            <span className="font-bold">2023 </span>Desarrollador web Full-Stack
            en Costa Rica.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mt-6 border-b-[4px] border-black max-w-[4rem] mb-5">
            Yo <i className="bx bx-ghost"></i>
          </h3>
          <p className="mb-4 text-justify ">
            Me gusta el <span className="text-[#3e7bed] font-bold">arte</span>,
            la <span className="text-[#3e7bed] font-bold">música</span> y el
            surf; en tiempos libres leo sobre
            <a
              className="text-[#3e7bed] hover:text-xl transition-all hover:duration-200 pl-1 font-bold"
              href="https://es.wikipedia.org/wiki/S%C3%B3crates"
              target="_blank"
            >
              filosofía
            </a>
            - "¡No te rindas, programador! Cada error es una oportunidad para
            aprender y cada línea de código te acerca más a tu objetivo."
          </p>
        </div>
        <article className="flex justify-evenly md:flex md:flex-row md:justify-center">
          <div className="mb-3 flex justify-center items-center flex-col">
            <img
              className="w-full object-contain h-[9rem] md:h-[12rem] mb-5 rounded-lg md:w-[90%] sm:grid grid-cols-2 hover:shadow-lg md:hover:scale-90 duration-200 transition-all dark:hover:shadow-white"
              src="ImagesPerfil/img1.jpg"
              alt=""
            />
          </div>
          <div className="mb-3 flex justify-center items-center flex-col">
            <img
              className="w-full object-center object-contain h-[9rem] md:h-[12rem] mb-5 rounded-lg md:w-[100%] sm:grid grid-cols-2 hover:shadow-lg md:hover:scale-90 duration-200 transition-all dark:hover:shadow-white"
              src="/ImagesPerfil/img2.jpg"
              alt=""
            />
          </div>
        </article>
        <div>
          <h3 className="text-xl font-bold mt-6 border-b-[4px] border-black max-w-[8rem]">
            En la web <i className="bx bx-mouse text-xl pl-2"></i>
          </h3>
          <ul className="flex flex-col mt-3 md:flex md:flex-col md:justify-evenly md:gap-1 md:mt-3 mb-3">
            <li className="flex items-center md:text-lg">
              <a
                href="https://www.instagram.com/thelildree/"
                target="_blank"
                className="cursor-pointer p-1 flex gap-2 text-[#319795] hover:text-lg transition-all hover:duration-200 hover:bg-white hover:text-black justify-center rounded-md"
              >
                <span className="flex items-center">
                  <i className="bx bxl-instagram"></i>
                </span>
                <h5>Lil_Dre</h5>
              </a>
            </li>
            <li className="flex items-center md:text-lg">
              <a
                href="https://github.com/LilDre7"
                target="_blank"
                className="cursor-pointer p-1 flex gap-2 text-[#319795] hover:text-lg transition-all hover:duration-200 hover:text-black hover:bg-white justify-center rounded-md"
              >
                <span>
                  <i className="bx bxl-github"></i>
                </span>
                <h5>LilDre7</h5>
              </a>
            </li>
            <li className="flex items-center md:text-lg">
              <a
                href="https://www.linkedin.com/in/alvaro-aburto-dev/"
                target="_blank"
                className="hover:text-black cursor-pointer p-1 flex gap-2 text-[#319795] hover:text-lg transition-all hover:duration-200 hover:bg-white justify-center rounded-md"
              >
                <span>
                  <i className="bx bxl-linkedin"></i>
                </span>
                <h5>Alvaro (Lil Dree) Aburto Ocampo</h5>
              </a>
            </li>
            <li className="flex items-center md:text-lg">
              <a
                href="https://chatwith.io/es/s/lil-dree-developer"
                target="_blank"
                className="hover:text-black cursor-pointer p-1 flex gap-2 text-[#319795] hover:text-lg transition-all hover:duration-200 hover:bg-white justify-center rounded-md"
              >
                <span>
                  <i className="bx bxl-whatsapp"></i>
                </span>
                <h5>Alvaro Aburto</h5>
              </a>
            </li>
          </ul>
        </div>

        <ModalForm setisShowForm={setisShowForm} isShowForm={isShowForm} />

        <article>
          {/* Agrega el componente del formulario aquí */}
          <h2 className="text-2xl font-bold border-b-4 border-b-black max-w-[10rem] dark:border-b-gray-500 dark:border-b-4">
            Contáctame
          </h2>
          <p className="mt-3 text-justify ">
            ¡Hola! Si estás buscando un desarrollador de software, has llegado
            al lugar indicado. Si necesitas una mano amiga, no dudes en
            contactarme. Estoy disponible para responder cualquier pregunta o
            consulta que tengas. ¡Hablemos pronto!
          </p>
          <div className="text-center p-3 mt-4 z-0 ">
            <button
              onClick={handleClickModal}
              className="css-button-retro--black w-[300px] text-white"
            >
              <span className="">
                <i className="bx bxl-gmail pr-3"></i> Contáctame
              </span>
            </button>
          </div>
          <div className="text-center pb-3">
            <code className="m-2">
              © 2023 Álvaro Aburto. Todos los derechos reservados.
            </code>
          </div>
        </article>
      </article>
    </motion.section>
  );
};

export default Personalnfo;
