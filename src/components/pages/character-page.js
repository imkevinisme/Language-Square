import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "../NavBarComponent/NavBar";
import { Footer } from "../FooterComponent/Footer";
import { Characters } from "../CharactersComponent/Characters";

let CharactersPage = () => {
  return (
    <>
      <NavBar />
      <Characters />
      <Footer />
    </>
  );
};

export default CharactersPage;
