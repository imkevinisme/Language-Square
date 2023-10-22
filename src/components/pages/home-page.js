import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { Home } from "../HomeComponent/Home";

let HomePage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
};

export default HomePage;
