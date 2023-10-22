import { Container, Tab, Tabs } from "react-bootstrap";
import { Hiragana } from "../HiraganaComponent/hiragana";
import { Katakana } from "../kataganaComponent/katakana";

export function Characters() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="hiragana"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="hiragana" title="Hiragana">
          <Hiragana />
        </Tab>
        <Tab eventKey="katakana" title="Katakana">
          <Katakana />
        </Tab>
      </Tabs>
    </Container>
  );
}
