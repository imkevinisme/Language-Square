import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/home-page";
import Characters from "./components/pages/character-page";
import Learn from "./components/pages/learn-page";
import Auth from "./components/pages/auth-page";
import Test from "./components/pages/test-page";
import Translate from "./components/pages/translate-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mcq from "./components/TestComponent/Mcq/Mcq";

let App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/test" element={<Test />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/test/mcq" element={<Mcq />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
