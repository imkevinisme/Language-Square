import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "../NavBarComponent/NavBar";
import { Footer } from "../FooterComponent/Footer";
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
