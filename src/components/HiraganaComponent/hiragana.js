import { Button, Container } from "react-bootstrap";
import "./hiragana.css";

export function Hiragana() {
  const hiraganas = [
    ["あ", "あ.mp3"],
    ["い", "い.mp3"],
    ["う", "う.mp3"],
    ["え", "え.mp3"],
    ["お", "お.mp3"],
    ["か", "か.mp3"],
    ["き", "き.mp3"],
    ["く", "く.mp3"],
    ["け", "け.mp3"],
    ["こ", "こ.mp3"],
    ["さ", "さ.mp3"],
    ["し", "し.mp3"],
    ["す", "す.mp3"],
    ["せ", "せ.mp3"],
    ["そ", "そ.mp3"],
    ["た", "た.mp3"],
    ["ち", "ち.mp3"],
    ["つ", "つ.mp3"],
    ["て", "て.mp3"],
    ["と", "と.mp3"],
    ["な", "な.mp3"],
    ["に", "に.mp3"],
    ["ぬ", "ぬ.mp3"],
    ["ね", "ね.mp3"],
    ["の", "の.mp3"],
    ["は", "は.mp3"],
    ["ひ", "ひ.mp3"],
    ["ふ", "ふ.mp3"],
    ["へ", "へ.mp3"],
    ["ほ", "ほ.mp3"],
    ["ま", "ま.mp3"],
    ["み", "み.mp3"],
    ["む", "む.mp3"],
    ["め", "め.mp3"],
    ["も", "も.mp3"],
    ["や", "や.mp3"],
    ["", ""],
    ["ゆ", "ゆ.mp3"],
    ["", ""],
    ["よ", "よ.mp3"],
    ["ら", "ら.mp3"],
    ["り", "り.mp3"],
    ["る", "る.mp3"],
    ["れ", "れ.mp3"],
    ["ろ", "ろ.mp3"],
    ["わ", "わ.mp3"],
    ["", ""],
    ["", ""],
    ["", ""],
    ["を", "を.mp3"],
  ];

  const playSound = (soundURL) => {
    let sound = new Audio(`/audio/${soundURL}`);
    sound.play();
  };

  return (
    <>
      <Container id="hiragana">
        <div id="hiragana-row">
          {}
          {hiraganas.map((hiragana) => {
            return (
              <Button
                id="hiragana-button"
                variant="light"
                onClick={() => playSound(hiragana[[1]])}
                disabled={hiragana[[0]] === ""}
              >
                {hiragana[[0]]}
              </Button>
            );
          })}
        </div>
      </Container>
    </>
  );
}
