"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

const lessonData = {
  lessons: [
    {
      title: "Lesson 3: Adjectives",
      definition:
        "Adjectives are words that describe or modify nouns and pronouns.",
      content:
        "In this lesson, we will explore different types of adjectives, their placement in a sentence, and their role in providing more details and characteristics to the subject.",
      topics: [
        {
          title: "1. Descriptive Adjectives",
          content:
            "Descriptive adjectives provide details about the qualities, characteristics, or attributes of a noun. They help paint a vivid picture in the reader's mind. For example, 'beautiful', 'big', and 'happy' are descriptive adjectives.",
        },
        {
          title: "2. Demonstrative Adjectives",
          content:
            "Demonstrative adjectives point out or indicate specific nouns. They show the proximity or distance from the speaker. Examples include 'this', 'that', 'these', and 'those'.",
        },
        {
          title: "3. Comparative and Superlative Adjectives",
          content:
            "Comparative adjectives are used to compare two or more things, while superlative adjectives are used to compare one thing against all others in a group. Examples include 'taller', 'more interesting', 'best', and 'most beautiful'.",
        },
        {
          title: "4. Possessive Adjectives",
          content:
            "Possessive adjectives indicate ownership or possession. They are used before a noun to show that something belongs to someone. Examples include 'my', 'your', 'his', 'her', 'our', and 'their'.",
        },
      ],
      examples: [
        "She has a beautiful house.",
        "This book is interesting.",
        "His car is the fastest in the race.",
      ],
      exercises: [
        {
          question:
            "Choose the correct form of the adjective: This is ___ book I have ever read.",
          options: ["good", "better", "best"],
          correctAnswer: "the best",
        },
        {
          question:
            "Identify the possessive adjective in the following sentence: Their house is big.",
          options: ["Their", "house", "big"],
          correctAnswer: "Their",
        },
      ],
    },
  ],
};

const AdjectiveLessonPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (exerciseIndex, optionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[exerciseIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {lessonData.lessons.map((lesson, index) => (
        <div key={index}>
          <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
          <p className="text-lg mb-6">{lesson.definition}</p>
          <div>
            {lesson.topics.map((topic, topicIndex) => (
              <Card key={topicIndex} className="mb-4">
                <CardContent>
                  <Typography variant="h5" component="div" className="mb-2">
                    {topic.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {topic.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          <ul className="list-disc pl-6">
            {lesson.examples.map((example, exampleIndex) => (
              <li key={exampleIndex} className="mb-2">
                {example}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-4">Exercises</h2>
          <form>
            <ol className="list-decimal pl-6">
              {lesson.exercises.map((exercise, exerciseIndex) => (
                <li key={exerciseIndex} className="mb-4">
                  <p className="font-bold mb-2">{exercise.question}</p>
                  <FormControl component="fieldset">
                    <RadioGroup
                      value={selectedAnswers[exerciseIndex]}
                      onChange={(e) =>
                        handleAnswerChange(
                          exerciseIndex,
                          parseInt(e.target.value)
                        )
                      }
                    >
                      {exercise.options.map((option, optionIndex) => (
                        <FormControlLabel
                          key={optionIndex}
                          value={optionIndex}
                          control={<Radio />}
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </li>
              ))}
            </ol>
            <Button variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </form>
          {showResults && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <ul className="list-decimal pl-6">
                {lesson.exercises.map((exercise, exerciseIndex) => (
                  <li key={exerciseIndex} className="mb-4">
                    <p className="font-bold mb-2">{exercise.question}</p>
                    {showResults && (
                      <p>Correct Answer: {exercise.correctAnswer}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdjectiveLessonPage;
