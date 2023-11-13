import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home-page";
import Characters from "./components/pages/character-page";
import Learn from "./components/pages/learn-page";
import Auth from "./components/pages/auth-page";
import Test from "./components/pages/test-page";
import Translate from "./components/pages/translate-page";
import Mcq from "./components/TestComponent/Mcq/Mcq";
// import { useState, useEffect } from "react";
// import { AuthContext } from "./helpers/AuthContext";
// import axios from "axios";

let App = () => {
  // const [authState, setAuthState] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/auth", {
  //       headers: {
  //         accessToken: localStorage.getItem("accessToken"),
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.error) {
  //         setAuthState(false);
  //       } else {
  //         setAuthState(true);
  //       }
  //     });
  // }, []);

  return (
    <>
      {/* <AuthContext.Provider value={{ authState, setAuthState }}> */}
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
      {/* </AuthContext.Provider> */}
    </>
  );
};

export default App;
