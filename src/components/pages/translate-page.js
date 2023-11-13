import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "../NavBarComponent/NavBar";
import { Footer } from "../FooterComponent/Footer";
import { Translate } from "../TranslateComponent/translate";

let translatePage = () => {
  return (
    <>
      <NavBar />
      <Translate />
      <Footer />
    </>
  );
};

export default translatePage;
