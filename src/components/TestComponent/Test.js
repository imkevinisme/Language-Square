import "./Test.css";

import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export function Test() {
  function navigateToMcq() {
    <Nav.Link href="/mcq/mcq" />;
  }

  return (
    <div id="test">
      <Container id="test-button-row">
        <Container id="test-button-group" className="d-grid gap-2">
          <Button variant="light" size="lg" onClick={navigateToMcq}>
            {" "}
            N5
          </Button>
          <Button variant="light" size="lg">
            N4
          </Button>
          <Button variant="light" size="lg">
            N3
          </Button>
          <Button variant="light" size="lg">
            N2
          </Button>
          <Button variant="light" size="lg">
            N1
          </Button>
        </Container>
      </Container>
    </div>
  );
}
