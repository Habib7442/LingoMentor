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
  "lessons": [
    {
      "title": "Lesson 5: Prepositions",
      "definition": "Prepositions are words that show the relationship of a noun or pronoun to another word in the sentence.",
      "content": "In this lesson, we will explore different types of prepositions, their usage, and common examples. Prepositions help provide information about location, time, direction, and other relationships between words.",
      "topics": [
        {
          "title": "1. Prepositions of Place",
          "content": "Prepositions of place indicate the position or location of something in relation to something else. Examples include 'in', 'on', 'under', 'above', 'beside', and 'between'."
        },
        {
          "title": "2. Prepositions of Time",
          "content": "Prepositions of time indicate when an action takes place. Examples include 'at', 'on', 'in', 'before', 'after', 'during', and 'since'."
        },
        {
          "title": "3. Prepositions of Direction",
          "content": "Prepositions of direction indicate movement or direction. Examples include 'to', 'from', 'into', 'out of', 'through', and 'across'."
        },
        {
          "title": "4. Prepositions of Relationship",
          "content": "Prepositions of relationship express the connection or relationship between things. Examples include 'with', 'without', 'for', 'to', 'by', and 'of'."
        }
      ],
      "examples": [
        "The book is on the table.",
        "She arrived at the party on time.",
        "He walked to the park with his friends."
      ],
      "exercises": [
        {
          "question": "Choose the correct preposition to complete the sentence: The cat is hiding _______ the bed.",
          "options": [
            "under",
            "over",
            "behind"
          ],
          "correctAnswer": "under"
        },
        {
          "question": "Identify the preposition of time in the following sentence: I will meet you at 7 o'clock.",
          "options": [
            "meet",
            "you",
            "at"
          ],
          "correctAnswer": "at"
        }
      ]
    }
  ]
};

const PrepositionLessonPage = () => {
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

export default PrepositionLessonPage;
