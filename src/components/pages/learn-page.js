import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { Learn } from "../LearnComponent/Learn";

let LearnPage = () => {
  return (
    <>
      <NavBar />
      <Learn />
      <Footer />
    </>
  );
};

export default LearnPage;
