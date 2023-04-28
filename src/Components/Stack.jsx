import React from "react";
import ReactPlayer from "react-player";
import "./stack.css";

const Stack = () => {
  return (
    <section className="">
      <div className="">
        <div className="">
          <img
            className="w-full h-[50vh] object- object-cover absolute top-0 left-0"
            src="/images/bg-2.png"
            alt=""
          />
        </div>

        <ReactPlayer
          className="w-full h-full object-cover -z-50"
          url="https://youtu.be/rrgOMpENU_Q?t=206"
          width="100%"
          height="20%"
          muted={false}
          playing={true}
          volume={0.5}
          loop={true}
          style={{
            position: "absolute",
            top: "34%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            objectFit: "cover",
            opacity: 10,
            background: "transparent",
          }}
        />
      </div>
      <div className="flex justify-center items-center text-center translate-y-24 p-4">
        <p className="text-2xl text-black border-b-2 border-black dark:border-white z-50">
          {" "}
          <span className="text_wrap text-4xl text-black translate-x-32  md:translate-x-48">
            Bienvenidos
          </span>{" "}
          <br />
          <span className="shadow-b-black shadow-lg text-3xl md:text-4xl text-black ">
            Algunas de las cosas que me interesan
          </span>
        </p>
      </div>
      <article className="translate-y-64">
        
      </article>
    </section>
  );
};

export default Stack;
