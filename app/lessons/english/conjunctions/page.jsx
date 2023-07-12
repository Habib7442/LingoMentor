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
      "title": "Lesson 6: Conjunctions",
      "definition": "Conjunctions are words that join words, phrases, or clauses.",
      "content": "In this lesson, we will explore different types of conjunctions, their usage in sentences, and their role in connecting ideas.",
      "topics": [
        {
          "title": "1. Coordinating Conjunctions",
          "content": "Coordinating conjunctions join words, phrases, or independent clauses of equal importance. Examples include 'and', 'but', 'or', 'nor', 'for', 'so', and 'yet'."
        },
        {
          "title": "2. Subordinating Conjunctions",
          "content": "Subordinating conjunctions introduce dependent clauses and establish a relationship with the main clause. Examples include 'because', 'although', 'while', 'if', 'since', and 'after'."
        },
        {
          "title": "3. Correlative Conjunctions",
          "content": "Correlative conjunctions are pairs of conjunctions that work together to connect words or groups of words. Examples include 'either...or', 'neither...nor', 'both...and', 'not only...but also', 'whether...or', and 'as...as'."
        }
      ],
      "examples": [
        "I like coffee and tea.",
        "He studied hard, so he passed the exam.",
        "She will go if you invite her."
      ],
      "exercises": [
        {
          "question": "Choose the correct conjunction to complete the sentence: I want to go to the beach __________ swim.",
          "options": [
            "and",
            "but",
            "or"
          ],
          "correctAnswer": "and"
        },
        {
          "question": "Identify the correlative conjunction in the following sentence: Not only John but also his brother likes ice cream.",
          "options": [
            "Not only...but also",
            "John...brother",
            "likes...cream"
          ],
          "correctAnswer": "Not only...but also"
        }
      ]
    }
  ]
};

const ConjunctionLessonPage = () => {
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

export default ConjunctionLessonPage;
