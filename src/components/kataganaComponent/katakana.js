import { Button, Container } from "react-bootstrap";
import useSound from "use-sound";
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
    ["テ", "と.mp3"],
    ["ナ", "な.mp3"],
    ["ニ", "に.mp3"],
    ["ヌ", "ぬ.mp3"],
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
    ["ユ", "ゆ.mp3"],
    ["", ""],
    ["ヨ", "よ.mp3"],
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

  var [play] = useSound();

  return (
    <>
      <Container id="hiragana">
        <div id="hiragana-row">
          {hiraganas.map((hiragana) => {
            return (
              <Button variant="light" onClick={play}>
                {hiragana[[0]]}
              </Button>
            );
          })}
        </div>
      </Container>
    </>
  );
}
