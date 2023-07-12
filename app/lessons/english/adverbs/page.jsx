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
      "title": "Lesson 4: Adverbs",
      "definition": "Adverbs are words that modify verbs, adjectives, or other adverbs.",
      "content": "In this lesson, we will explore different types of adverbs, their placement in a sentence, and their role in providing more information about the action, manner, time, place, or degree.",
      "topics": [
        {
          "title": "1. Adverbs of Manner",
          "content": "Adverbs of manner describe how an action is done. They answer the question 'how?' For example, 'quickly', 'happily', and 'carefully' are adverbs of manner."
        },
        {
          "title": "2. Adverbs of Time",
          "content": "Adverbs of time indicate when an action takes place. They answer the question 'when?' Examples include 'yesterday', 'today', 'soon', and 'always'."
        },
        {
          "title": "3. Adverbs of Place",
          "content": "Adverbs of place specify where an action happens. They answer the question 'where?' Examples include 'here', 'there', 'everywhere', and 'nearby'."
        },
        {
          "title": "4. Adverbs of Degree",
          "content": "Adverbs of degree show the intensity or extent of an action. They answer the question 'to what extent?' Examples include 'very', 'quite', 'extremely', and 'almost'."
        }
      ],
      "examples": [
        "She sings beautifully.",
        "They arrived late to the party.",
        "He ran quickly towards the finish line."
      ],
      "exercises": [
        {
          "question": "Choose the correct adverb to complete the sentence: She speaks __________.",
          "options": [
            "fast",
            "faster",
            "fastest"
          ],
          "correctAnswer": "fast"
        },
        {
          "question": "Identify the adverb of place in the following sentence: The cat is hiding under the table.",
          "options": [
            "hiding",
            "under",
            "table"
          ],
          "correctAnswer": "under"
        }
      ]
    }
  ]
};

const AdverbsLessonPage = () => {
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

export default AdverbsLessonPage;
