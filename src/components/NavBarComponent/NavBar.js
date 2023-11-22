import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import "./NavBar.css";

export function NavBar() {
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("emailToken");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
    </Navbar>
  );
}
