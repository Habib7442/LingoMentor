"use client";

import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64a69dbd67db0755a992');

const EnglishQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState([]);

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      '64a69f759e473328b166',
      '64a8198e524336124424'
    );

    promise.then(
      function (response) {
        console.log(response);
        setQuestions(response.documents);
        setAnswers(new Array(response.documents.length).fill(null));
        setCorrectAnswer(response.documents.map((question) => question.correctanswer));
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedAnswer;
    setAnswers(updatedAnswers);
  };

  const handleSubmitQuiz = () => {
    setShowModal(true);
  };



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Language Quiz</h1>

      {questions.map((question, index) => (
        <div className="mb-4" key={question.id}>
          <h3 className="text-lg font-bold mb-2">
            Question {question.number}: {question.question}
          </h3>
          <label className="block mb-2 cursor-pointer">
            <input
              type="radio"
              value="option1"
              className="mr-2"
              checked={answers[index] === 'option1'}
              onChange={() => handleAnswerChange(index, 'option1')}
            />
            {question.option1}
          </label>
          <label className="block cursor-pointer">
            <input
              type="radio"
              value="option2"
              className="mr-2"
              checked={answers[index] === 'option2'}
              onChange={() => handleAnswerChange(index, 'option2')}
            />
            {question.option2}
          </label>
          <label className="block cursor-pointer">
            <input
              type="radio"
              value="option3"
              className="mr-2"
              checked={answers[index] === 'option3'}
              onChange={() => handleAnswerChange(index, 'option3')}
            />
            {question.option3}
          </label>
          {showModal && (
            <p style={{backgroundColor: "green", fontWeight: "bold", color: "white", padding: "5px"}}>
              Correct Answer: {correctAnswer[index]}
            </p>
          )}
        </div>
      ))}

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          handleSubmitQuiz();
        }}
        disabled={!answers.every((answer) => answer !== null)}
      >
        Submit
      </button>

    </div>
  );
};

export default EnglishQuiz;
