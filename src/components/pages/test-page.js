import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
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
