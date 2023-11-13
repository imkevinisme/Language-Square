import "./Test.css";
import { Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Test() {
  const navigate = new useNavigate();
  function navigateToMcq() {
    navigate("/test/mcq");
  }

  return (
    <div id="test">
      <Container id="test-button-row">
        <Container id="test-button-group" className="d-grid gap-2">
          <Button variant="light" size="lg" onClick={navigateToMcq}>
            {" "}
            N5 - (Easiest)
          </Button>
          <Button variant="light" size="lg">
            N4 - (Easy)
          </Button>
          <Button variant="light" size="lg">
            N3 - (Medium)
          </Button>
          <Button variant="light" size="lg">
            N2 - (Difficult)
          </Button>
          <Button variant="light" size="lg">
            N1 - (Most Difficult)
          </Button>
        </Container>
      </Container>
    </div>
  );
}
