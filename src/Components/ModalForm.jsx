import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const ModalForm = ({ isShowForm, setisShowForm }) => {
  const form = useRef();

  const handleClose = () => {
    Swal.fire(
      "Gracias por tu interés!",
      setisShowForm((isShowForm) => !isShowForm)
    );
  };

  const validateForm = () => {
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (  name === "" || email === "" || message === "") {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos",
        icon: "error",
      });
      return false;
    } else if (true) {
      Swal.fire({
        title: "Gracias por tu mensaje!",
        text: "Te responderemos lo antes posible",
        icon: "success",
      });
      return true;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_95gplzc",
        "template_vyufg5h",
        form.current,
        "EQnk4jDWH6qVeKX9w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      autoFocus
      className={`absolute transition-opacity top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center
        ${
          isShowForm ? "opacity-100 visible " : "opacity-0 invisible"
        } text-black`}
    >
      <div
        autoFocus
        className="bg-white max-w-[300px] p-4 rounded-md  grid gap-4 translate-y-[50rem] sm:translate-y-[40rem] lg:translate-y-[30rem]  "
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4  p-2 text-black "
        >
          <label>Name</label>
          <input
            className="border-2 border-black rounded-md"
            type="text"
            name="user_name"
          />
          <label>Email</label>
          <input
            className="border-2 border-black rounded-md"
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea
            placeholder="Hola, dime en que te puedo ayudar!"
            className="border-2 border-black rounded-md text-sm placeholder:text-center p-1"
            name="message"
          />

          <input
            autoComplete="Me gustaria tu ayuda para mi proyecto o solo quiero hablar contigo, eres un crack!"
            className="bg-black text-white p-1 rounded-lg"
            type="submit"
            value="Send"
          />
        </form>
        <button onClick={handleClose}>
          <i className="bx bx-x text-2xl absolute top-2 right-2 "></i>
        </button>
      </div>
    </section>
  );
};

export default ModalForm;
