import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoute from "./pages/AnimatedRoute";
import {motion} from "framer-motion"

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <BrowserRouter>
        <AnimatedRoute  />
      </BrowserRouter>
    </motion.div>
  );
}

export default App;
