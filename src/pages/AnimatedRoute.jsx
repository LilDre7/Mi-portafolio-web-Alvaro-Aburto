import RingLoader from "react-spinners/RingLoader";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Components/Home";
import Nav from "../Components/Nav";
import Scene2 from "../Components/Scene2";
import Proyects from "../Components/Proyects";
import Scene from "../Components/Scene";
import ErrorNotFound from "../Components/ErrorNotFound";
import { AnimatePresence } from "framer-motion";
import PixelRoom from "../Components/PixelRoom";
import BotonFlotante from "../Components/BotonFlotante";

const AnimatedRoute = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <section className="dark:bg-[#202023]">
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <RingLoader color={"#000"} size={70} loading={loading} />
        </div>
      ) : (
        <div className="App dark:bg-[#202023]">
          <Nav />
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Scene2 />
                    <Home />
                    <BotonFlotante />
                  </>
                }
              />
              <Route
                exact
                path="/Proyects"
                element={
                  <>
                    <Scene2 />
                    <Proyects />
                    <BotonFlotante />
                  </>
                }
              />
              <Route
                exact
                path="/Diseños"
                element={
                  <>
                    <PixelRoom />
                    <BotonFlotante />
                  </>
                }
              />
              <Route
                exact
                path="/Stack"
                element={
                  <>
                    <Scene />
                    <BotonFlotante />
                  </>
                }
              />
              <Route
                path="*"
                element={
                  <>
                    <Scene2 />
                    <ErrorNotFound />
                  </>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

export default AnimatedRoute;
