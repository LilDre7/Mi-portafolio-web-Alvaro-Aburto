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
    <section>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <RingLoader color={"#000"} size={70} loading={loading} />
        </div>
      ) : (
        <div className="App dark:bg-[#202023] ">
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
                  </>
                }
              />
              <Route
                exact
                path="/Diseños"
                element={
                  <>
                    <PixelRoom />
                  </>
                }
              />
              <Route
                exact
                path="/Stack"
                element={
                  <>
                    <Scene />
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
