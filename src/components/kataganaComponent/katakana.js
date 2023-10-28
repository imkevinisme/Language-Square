import { Button, Container } from "react-bootstrap";
import "./katakana.css";

export function Katakana() {
  const hiraganas = [
    ["ア", "あ.mp3"],
    ["イ", "い.mp3"],
    ["ウ", "う.mp3"],
    ["エ", "え.mp3"],
    ["オ", "お.mp3"],
    ["カ", "か.mp3"],
    ["キ", "き.mp3"],
    ["ク", "く.mp3"],
    ["ケ", "け.mp3"],
    ["コ", "こ.mp3"],
    ["サ", "さ.mp3"],
    ["シ", "し.mp3"],
    ["ス", "す.mp3"],
    ["セ", "せ.mp3"],
    ["ソ", "そ.mp3"],
    ["タ", "た.mp3"],
    ["チ", "ち.mp3"],
    ["ツ", "つ.mp3"],
    ["テ", "て.mp3"],
    ["ト", "と.mp3"],
    ["ナ", "な.mp3"],
    ["ニ", "に.mp3"],
    ["ヌ", "の.mp3"],
    ["ネ", "ね.mp3"],
    ["ノ", "の.mp3"],
    ["ハ", "は.mp3"],
    ["ヒ", "ひ.mp3"],
    ["フ", "ふ.mp3"],
    ["ヘ", "へ.mp3"],
    ["ホ", "ほ.mp3"],
    ["マ", "ま.mp3"],
    ["ミ", "み.mp3"],
    ["ム", "む.mp3"],
    ["メ", "め.mp3"],
    ["モ", "も.mp3"],
    ["ヤ", "や.mp3"],
    ["", ""],
    ["ユ", "よ.mp3"],
    ["", ""],
    ["ヨ", "ゆ.mp3"],
    ["ラ", "ら.mp3"],
    ["リ", "り.mp3"],
    ["ル", "る.mp3"],
    ["レ", "れ.mp3"],
    ["ロ", "ろ.mp3"],
    ["ワ", "わ.mp3"],
    ["", ""],
    ["", ""],
    ["", ""],
    ["ヲ", "を.mp3"],
  ];

  const playSound = (soundURL) => {
    let sound = new Audio(`/audio/${soundURL}`);
    sound.play();
  };

  return (
    <>
      <Container id="katakana">
        <div id="katakana-row">
          {hiraganas.map((hiragana, idx) => {
            return (
              <Button
                id="katakana-button"
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
