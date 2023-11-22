import "./Mcq.css";
import { useState } from "react";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import axios from "axios";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export default function Mcq() {
  const questions = [
    {
      questionId: 1,
      questionText: "これはほん[ ]ざっしです",
      answerOptions: [
        { answerText: "や", isCorrect: false },
        { answerText: "と", isCorrect: true },
        { answerText: "やも", isCorrect: false },
        { answerText: "で", isCorrect: false },
      ],
    },
    {
      questionId: 2,
      questionText: "あした[ ]がっこうへいきます。",
      answerOptions: [
        { answerText: "わたし", isCorrect: true },
        { answerText: "あなた", isCorrect: false },
        { answerText: "かれ", isCorrect: false },
        { answerText: "かのじょ", isCorrect: false },
      ],
    },
    {
      questionId: 3,
      questionText: "これはねこ[ ]いぬです。",
      answerOptions: [
        { answerText: "や", isCorrect: false },
        { answerText: "と", isCorrect: true },
        { answerText: "やも", isCorrect: false },
        { answerText: "で", isCorrect: false },
      ],
    },
    {
      questionId: 4,
      questionText: "えいご[ ]べんきょうします。",
      answerOptions: [
        { answerText: "ながく", isCorrect: false },
        { answerText: "いっしょに", isCorrect: false },
        { answerText: "よく", isCorrect: true },
        { answerText: "あまり", isCorrect: false },
      ],
    },
  ];

  const [generatedFeedback, setGeneratedFeedback] = useState("");
  const [gptmessage, setGptMessage] = useState([]);
  const [email, setEmail] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const initialValues = {
    scoreEmail: email,
    score: score,
  };

  async function generateFeedback(message) {
    message.preventDefault();
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: gptmessage }],
      model: "gpt-3.5-turbo",
    });
    setGeneratedFeedback(completion["choices"][0]["message"]["content"]);
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (!isCorrect) {
      setGptMessage([
        ...gptmessage,
        questions[currentQuestion].questionId,
        questions[currentQuestion].questionText,
        "a",
        questions[currentQuestion].answerOptions[0].answerText,
        "b",
        questions[currentQuestion].answerOptions[1].answerText,
        "c",
        questions[currentQuestion].answerOptions[2].answerText,
        "d",
        questions[currentQuestion].answerOptions[3].answerText,
        "",
      ]);
    } else if (isCorrect) {
      setScore(score + 1);
    }

    if (localStorage.getItem("emailToken")) {
      setEmail(localStorage.getItem("emailToken"));
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      const data = { email: email, score: score };
      axios
        .post("http://localhost:3001/score/id", initialValues)
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error);
          } else {
            alert(response.data.message);
          }
        });

      if (score == 4) {
        setGeneratedFeedback("Congrats !! It's All Correct !!");
      } else {
        setGptMessage(
          `${gptmessage
            .map((element) => element)
            .join(
              ", "
            )}\nCan you let me know which is the correct answer and why? The option can only be select form a, b, c, or d.`
        );
      }
    }
  };

  return (
    <div id="mcq">
      {showScore ? (
        <div id="result-mcq">
          <Container id="final-mcq-row">
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
            <Form.Control
              id="chatGpt-respone"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder={gptmessage}
              as="textarea"
              disabled
            />
            <Form.Control
              id="chatGpt-respone"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder={generatedFeedback}
              as="textarea"
              disabled
            />
            <Button variant="primary" onClick={generateFeedback}>
              Do you want to generate feedback from AI and check why your answer
              is wrong ?
            </Button>
          </Container>
        </div>
      ) : (
        <Container id="mcq-row">
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                id="mcq-button"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}
