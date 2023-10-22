import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

let testPage = () => {
  return (
    <>
      <NavBar />
      <h1>this is test page</h1>
      <Footer />
    </>
  );
};

export default testPage;
