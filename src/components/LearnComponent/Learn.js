import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Learn.css";

import five from "../../assets/img/five.png";
import four from "../../assets/img/four.png";
import three from "../../assets/img/three.png";
import two from "../../assets/img/two.png";
import one from "../../assets/img/one.png";
import learnN5 from "../../assets/learn/n5.pdf";

export function Learn() {
  return (
    <div id="learn" className="d-flex justify-content-around container py-lg-5">
      <div className="row">
        <div className="col-lg ">
          <Card>
            <Card.Img variant="top" src={five} />
            <Card.Body>
              <Card.Title>N5</Card.Title>
              <Card.Text>
                - N5 is the most basic level.
                <br />
                <br />- At this level, you should be able to understand and use
                very basic Japanese in everyday situations.
                <br />
                <br /> - You'll learn simple vocabulary, basic grammar
                structures, and be able to read and write basic Hiragana and
                Katakana.
              </Card.Text>
              <Button variant="primary" href={learnN5} download>
                Download PDF - N5
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg ">
          <Card>
            <Card.Img variant="top" src={four} />
            <Card.Body>
              <Card.Title>N4</Card.Title>
              <Card.Text>
                - N4 builds upon N5 skills.
                <br />
                <br />- You'll learn more vocabulary and grammar, allowing you
                to have basic conversations.
                <br />
                <br /> - Reading and writing skills are improved, but the
                complexity remains low.
              </Card.Text>
              <Button variant="primary">Download PDF - N4</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg ">
          <Card>
            <Card.Img variant="top" src={three} />
            <Card.Body>
              <Card.Title>N3</Card.Title>
              <Card.Text>
                - N3 marks a transition from beginner to intermediate levels.
                <br />
                <br />- At this level, you can understand and participate in
                more complex conversations.
                <br />
                <br /> - You'll learn more Kanji and be able to read and write
                more advanced texts.
              </Card.Text>
              <Button variant="primary">Download PDF - N3</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg ">
          <Card>
            <Card.Img variant="top" src={two} />
            <Card.Body>
              <Card.Title>N2</Card.Title>
              <Card.Text>
                - N2 is a high intermediate level.
                <br />
                <br />- You'll be able to understand and use complex Japanese in
                various contexts.
                <br />
                <br /> - Reading and writing skills are advanced, and you can
                work or study in a Japanese-speaking environment.
              </Card.Text>
              <Button variant="primary">Download PDF - N2</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg ">
          <Card>
            <Card.Img variant="top" src={one} />
            <Card.Body>
              <Card.Title>N1</Card.Title>
              <Card.Text>
                - N1 is the most advanced level and represents a high level of
                fluency.
                <br />
                <br />- At this level, you can comprehend and use Japanese at a
                near-native level.
                <br />
                <br /> - You'll have a deep understanding of Japanese culture,
                advanced reading and writing skills, and the ability to work in
                professional or academic settings in Japanese.
              </Card.Text>
              <Button variant="primary">Download PDF - N1</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
