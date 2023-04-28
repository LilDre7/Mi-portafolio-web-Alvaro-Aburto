import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ErrorNotFound from "./Components/ErrorNotFound";
import Proyects from "./Components/Proyects";
import Scene2 from "./Components/Scene2";
import Nav from "./Components/Nav";
import Diseños from "./Components/Diseños";
import Stack from "./Components/Stack";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
          <Route exact path="/Stack" element={<Stack />} />
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
    </BrowserRouter>
  );
}

export default App;
