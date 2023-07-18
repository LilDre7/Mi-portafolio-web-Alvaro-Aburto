import "./botonFlotante.css";

import React from "react";

const BotonFlotante = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=64670470"
        className="btn-wsp"
        target="_blank"
      >
        <i className="bx bxl-whatsapp z-40"></i>
      </a>
    </div>
  );
};

export default BotonFlotante;
