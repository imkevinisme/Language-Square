import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "../NavBarComponent/NavBar";
import { Footer } from "../FooterComponent/Footer";
import { Test } from "../TestComponent/Test";

let testPage = () => {
  return (
    <>
      <NavBar />
      <Test />
      <Footer />
    </>
  );
};

export default testPage;
