import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "../NavBarComponent/NavBar";
import { Footer } from "../FooterComponent/Footer";
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
