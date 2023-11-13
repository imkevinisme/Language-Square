import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import "./NavBar.css";
// import { useState, useContext, useEffect } from "react";
// import { AuthContext } from "../../helpers/AuthContext";
// import axios from "axios";

export function NavBar() {
  // const [authState, setAuthState] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/auth", {
  //       headers: {
  //         accessToken: localStorage.getItem("accessToken"),
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.error) {
  //         setAuthState(false);
  //       } else {
  //         setAuthState(true);
  //       }
  //     });
  // }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      {/* <AuthContext.Provider value={{ authState, setAuthState }}> */}
      <Container>
        <Navbar.Brand href="/">Language²</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/learn">Learn</Nav.Link>
            <Nav.Link href="/characters">Characters</Nav.Link>
            <Nav.Link href="/test">Test</Nav.Link>
            <Nav.Link href="/translate">Translate</Nav.Link>
            <NavDropdown title="User" id="basic-nav-dropdown">
              {!localStorage.getItem("accessToken") ? (
                <>
                  <NavDropdown.Item href="/auth">
                    Log In / Sign Up
                  </NavDropdown.Item>
                </>
              ) : (
                <NavDropdown.Item href="/auth" onClick={logout}>
                  Log Out
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* </AuthContext.Provider> */}
    </Navbar>
  );
}
