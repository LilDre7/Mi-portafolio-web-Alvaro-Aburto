import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ErrorNotFound from "./Components/ErrorNotFound";
import Proyects from "./Components/Proyects";
import Scene2 from "./Components/Scene2";
import Nav from "./Components/Nav";
import Diseños from "./Components/Diseños";
import Scene from "./Components/Scene";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <RingLoader
            color={"#000"}
            size={70}
            loading={loading}
          />
        </div>
      ) : (
        <div className="App dark:bg-[#202023] ">
          <Nav />
          <Routes>
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
                  <Scene2 />
                  <Diseños />
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
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
