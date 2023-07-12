"use client";

import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "core-js/stable";
import "regenerator-runtime/runtime";

const PronunciationPracticePage = () => {
  const [questions] = useState([
    {
      id: 1,
      question: "Repeat after me: How are you today?",
      answer: "How are you today?",
    },
    {
      id: 2,
      question: "Say the word: Pronunciation",
      answer: "Pronunciation",
    },
    {
      id: 3,
      question: "Repeat after me: Beautiful",
      answer: "Beautiful"
    },
    {
      id: 4,
      question: "Say the word: Entrepreneur",
      answer: "Entrepreneur"
    },
    {
      id: 5,
      question: "Repeat after me: Exaggerate",
      answer: "Exaggerate"
    },
    {
      id: 6,
      question: "Say the word: Squirrel",
      answer: "Squirrel"
    },
    {
      id: 7,
      question: "Repeat after me: Miscellaneous",
      answer: "Miscellaneous"
    },
    {
      id: 8,
      question: "Say the word: Queue",
      answer: "Queue"
    },
    {
      id: 9,
      question: "Repeat after me: Worcestershire",
      answer: "Worcestershire"
    },
    {
      id: 8,
      question: "Say the word: Entrepreneurship",
      answer: "Entrepreneurship"
    },
    {
      id: 10,
      question: "Repeat after me: February",
      answer: "February"
    },
    {
      id: 11,
      question: "Say the word: Colonel",
      answer: "Colonel"
    }
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [recognizedText, setRecognizedText] = useState("");
  const [comparisonResult, setComparisonResult] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const startRecording = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopRecording = () => {
    SpeechRecognition.stopListening();
    setRecognizedText(transcript);
    compareAnswer(transcript);
    setShowNextButton(true);
  };

  const compareAnswer = (userAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const normalizedUserAnswer = userAnswer
      .toLowerCase()
      .replace(/\?/g, "")
      .trim();
    const normalizedCorrectAnswer = correctAnswer
      .toLowerCase()
      .replace(/\?/g, "")
      .trim();
    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
    setComparisonResult(
      isCorrect ? "Correct answer!" : "Incorrect answer. Try again!"
    );
    if (isCorrect) {
      setCorrectAnswersCount((count) => count + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      // Reached the last question
      setShowResult(true);
      return;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setRecognizedText("");
    setComparisonResult("");
    setShowNextButton(false);
  };

  const restartPractice = () => {
    setCurrentQuestionIndex(0);
    setRecognizedText("");
    setComparisonResult("");
    setShowNextButton(false);
    setShowResult(false);
    setCorrectAnswersCount(0);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {!showResult ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Pronunciation Practice</h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2">
              Question {currentQuestionIndex + 1}
            </h2>
            <p>{questions[currentQuestionIndex].question}</p>
            <div className="flex gap-4 mt-4">
              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded ${
                  listening ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={startRecording}
                disabled={listening}
              >
                Start Recording
              </button>
              <button
                className={`bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded ${
                  !listening ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={stopRecording}
                disabled={!listening}
              >
                Stop Recording
              </button>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Your Answer</h2>
            <p>{recognizedText}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Comparison</h2>
            <p>{comparisonResult}</p>
          </div>
          <div className="mt-6">
            {showNextButton && (
              <button
                className={`bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded ${
                  !comparisonResult ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={nextQuestion}
                disabled={!comparisonResult}
              >
                {currentQuestionIndex === questions.length - 1
                  ? "Finish"
                  : "Next Question"}
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4">Practice Result</h1>
          <p>
            You have answered {correctAnswersCount} out of {questions.length}{" "}
            questions correctly.
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded mt-4"
            onClick={restartPractice}
          >
            Restart Practice
          </button>
        </div>
      )}
    </div>
  );
};

export default PronunciationPracticePage;
