import "./translate.css";

import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import OpenAI from "openai";

import translate from "translate";
translate.engine = "google";
translate.key = process.env.GOOGLE_API_KEY;

export function Translate() {
  const [value, setValue] = useState("");
  const [language_to, setLanguage_to] = useState("");
  const [language_from, setLanguage_from] = useState("");
  const [translated_text, setTranslated_text] = useState("");

  const handleSetLanguage_from_to = (
    selectedLanguage_from,
    selectedLanguage_to
  ) => {
    setLanguage_from(selectedLanguage_from);
    setLanguage_to(selectedLanguage_to);
  };

  async function handleTranslate(e) {
    e.preventDefault();
    try {
      const translatedText = await translate(value, {
        from: language_from,
        to: language_to,
      });
      setTranslated_text(translatedText);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form onSubmit={handleTranslate}>
      <Container id="translate">
        <div id="translate-input" size="lg">
          <Form.Control
            id="text-before-translate"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Type Something ..."
            as="textarea"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          <Form.Control
            id="text-after-translate"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder={translated_text}
            as="textarea"
            disabled
          />
        </div>
        <Container id="translate-button-container">
          <Button
            id="translate-button-english"
            variant="light"
            onClick={() => {
              handleSetLanguage_from_to("en", "jpn");
            }}
          >
            English {">"} Japanese
          </Button>
          <Button id="translate-button" variant="light" type="submit">
            Translate
          </Button>
          <Button
            id="translate-button-japanese"
            variant="light"
            onClick={() => {
              handleSetLanguage_from_to("jpn", "en");
            }}
          >
            Japanese {">"} English
          </Button>
        </Container>
      </Container>
    </Form>
  );
}
