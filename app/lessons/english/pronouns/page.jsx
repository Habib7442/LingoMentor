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
        title: "Lesson 3: Pronouns",
        definition:
          "Pronouns are words that replace nouns to avoid repetition.",
        content:
          "In this lesson, we will explore different types of pronouns, their functions, and how they help make sentences more concise.",
        topics: [
          {
            title: "1. Personal Pronouns",
            content:
              "Personal pronouns refer to specific people or things. Examples include 'I', 'you', 'he', 'she', 'it', 'we', and 'they'.",
          },
          {
            title: "2. Possessive Pronouns",
            content:
              "Possessive pronouns show ownership or possession. Examples include 'mine', 'yours', 'his', 'hers', 'ours', and 'theirs'.",
          },
          {
            title: "3. Demonstrative Pronouns",
            content:
              "Demonstrative pronouns point to specific people or things. Examples include 'this', 'that', 'these', and 'those'.",
          },
          {
            title: "4. Relative Pronouns",
            content:
              "Relative pronouns introduce dependent clauses in a sentence. Examples include 'who', 'whom', 'whose', 'which', and 'that'.",
          },
        ],
        examples: [
          "She is reading a book. -> __________ is reading a book.",
          "This is my car. -> __________ is my car.",
          "The person who called is my friend. -> __________ called is my friend.",
        ],
        exercises: [
          {
            question:
              "Choose the correct pronoun to complete the sentence: ________ is a great singer.",
            options: ["He", "She", "It"],
            correctAnswer: "He",
          },
          {
            question:
              "Identify the pronoun in the following sentence: This is my hat.",
            options: ["This", "My", "Hat"],
            correctAnswer: "This",
          },
        ],
      },
    ],
  };

const PronounsLessonPage = () => {
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
                      <p>
                        Correct Answer:{" "}
                        {exercise.correctAnswer}
                      </p>
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

export default PronounsLessonPage;
