import React from "react";
import "atropos/css";
import Atropos from "./Atropos";

const Proyects = () => {
  return (
    <section className="mt-[-5rem]">
      <h2 className="ml-7 text-2xl font-bold border-b-4 border-b-slate-600 max-w-[6rem] dark:text-white">
        Trabajos
      </h2>
      <Atropos />

      <div className="w-full text-center flex justify-center pb-2 pt-3">
        <code className="dark:text-white p-2">
          © 2023 Alvaro Aburto. All Rights Reserved.
        </code>
      </div>
    </section>
  );
};
export default Proyects;
