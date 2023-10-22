import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/home-page";
import Characters from "./components/pages/character-page";
import Learn from "./components/pages/learn-page";
import Login from "./components/pages/login-page";
import Signup from "./components/pages/signup-page";
import Test from "./components/pages/test-page";
import Translate from "./components/pages/translate-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

let App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<Test />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
