import "./Mcq.css";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Mcq() {
  const questions = [
    {
      questionText: "なまえは　[ ] さん　ですか。",
      answerOptions: [
        { answerText: "これ", isCorrect: true },
        { answerText: "それ", isCorrect: false },
        { answerText: "あれ", isCorrect: false },
        { answerText: "これら", isCorrect: false },
      ],
    },
    {
      questionText: "いくら　[ ] ですか。",
      answerOptions: [
        { answerText: "これ", isCorrect: false },
        { answerText: "それ", isCorrect: false },
        { answerText: "いくつ", isCorrect: true },
        { answerText: "どれ", isCorrect: false },
      ],
    },
    {
      questionText: "あさごはんは　[ ] ですか。",
      answerOptions: [
        { answerText: "さかな", isCorrect: false },
        { answerText: "にく", isCorrect: false },
        { answerText: "くだもの", isCorrect: false },
        { answerText: " ごはん", isCorrect: true },
      ],
    },
    {
      questionText: "えいごを　[ ]。",
      answerOptions: [
        { answerText: "はなします", isCorrect: true },
        { answerText: "ききます", isCorrect: false },
        { answerText: "よみます", isCorrect: false },
        { answerText: "みます", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div id="mcq">
      <Container id="mcq-row">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
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
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
