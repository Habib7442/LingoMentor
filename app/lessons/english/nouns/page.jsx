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
      title: "Lesson 1: Nouns",
      definition:
        "Nouns are words that represent people, places, things, or ideas. They are used to name or identify objects, entities, or concepts in a sentence.",
      content:
        "In this lesson, we will explore the different types of nouns, their functions, and some important rules related to their usage.",
      topics: [
        {
          title: "1. Common Nouns",
          content:
            "Common nouns are general names given to people, animals, places, or things. They do not refer to any specific individual or entity. For example, 'dog', 'city', and 'book' are common nouns. Common nouns are typically not capitalized unless they appear at the beginning of a sentence.",
        },
        {
          title: "2. Proper Nouns",
          content:
            "Proper nouns refer to specific individuals, places, or things. They are capitalized. For example, 'John', 'Paris', and 'The Great Gatsby' are proper nouns. Proper nouns help us identify unique and specific entities.",
        },
        {
          title: "3. Countable and Uncountable Nouns",
          content:
            "Nouns can be classified as countable or uncountable. Countable nouns refer to objects or concepts that can be counted or have a plural form. For example, 'dog' (singular) and 'dogs' (plural) are countable nouns. Uncountable nouns, on the other hand, represent concepts or substances that cannot be easily counted or have no plural form, such as 'water' or 'advice'.",
        },
        {
          title: "4. Possessive Nouns",
          content:
            "Possessive nouns show ownership or possession. They are formed by adding an apostrophe and 's' (or just an apostrophe for plurals ending in 's') to the noun. For example, 'Mary's book' and 'the teachers' lounge' are examples of possessive nouns. They indicate that something belongs to someone or something.",
        },
      ],
      examples: [
        "The dog chased the ball.",
        "New York City is a bustling metropolis.",
        "I enjoy reading books.",
      ],
      exercises: [
        {
          question:
            "Identify the type of noun in the following sentence: The cat is sleeping on the chair.",
          options: ["Common noun", "Proper noun", "Uncountable noun"],
          correctAnswer: "Common noun",
        },
        {
          question:
            "Which noun is possessive in the following sentence: John's car is parked outside.",
          options: ["car", "John's", "parked"],
          correctAnswer: "John's",
        },
      ],
    },
  ],
};

const NounLessonPage = () => {
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

export default NounLessonPage;
