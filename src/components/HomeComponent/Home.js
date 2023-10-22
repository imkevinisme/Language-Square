import { Container, Row } from "react-bootstrap";
import logo from "../../assets/img/pine-cone.png";
import "./Home.css";

export function Home() {
  return (
    <Container id="home">
      <Row id="home-row1">
        <Container id="home-box1">
          <Container id="home-slogan">
            <h1>
              こにちは！！
              <br />
              よこそう！！
              <br />
              Language²
            </h1>
          </Container>
          <Container id="home-logo">
            <img src={logo} alt="Logo" />
          </Container>
        </Container>
      </Row>
      <Row id="home-row2">
        <Container id="home-box2">
          <Container id="home-box-wrap">
            <Container id="home-box-about-me1">
              <h2>
                Something <br />
                About Me
              </h2>
            </Container>
            <Container id="home-box-about-me2">
              <h6>
                Hi, I am a passionate and inspired computer enthusiast,
                currently studying Bachelor’s of Computer Science at the
                University of Wollongong Malaysia expected to graduate in
                December 2023. <br />
                <br />I am familiar with C++, Java, HTML, and is willing learn
                and add more coding languages to my arsenal in the future.
              </h6>
            </Container>
          </Container>
        </Container>
      </Row>
    </Container>
  );
}
