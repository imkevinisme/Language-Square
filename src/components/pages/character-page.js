import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { Characters } from "../CharactersComponent/Charaters";

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
