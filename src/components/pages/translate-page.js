import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
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
