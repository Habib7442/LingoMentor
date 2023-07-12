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
      "title": "Lesson 2: Verbs",
      "definition": "Verbs are words that express actions, occurrences, or states of being.",
      "content": "In this lesson, we will explore different types of verbs, verb tenses, and their usage in sentences.",
      "topics": [
        {
          "title": "1. Action Verbs",
          "content": "Action verbs describe physical or mental actions performed by a subject. For example, 'run', 'eat', and 'think' are action verbs."
        },
        {
          "title": "2. Linking Verbs",
          "content": "Linking verbs connect the subject of a sentence to a subject complement. They do not show action but instead describe a state of being. Examples include 'be', 'seem', and 'become'."
        },
        {
          "title": "3. Helping Verbs",
          "content": "Helping verbs (also known as auxiliary verbs) assist the main verb in a sentence. They are used to express tense, mood, or voice. Examples include 'can', 'should', and 'will'."
        },
        {
          "title": "4. Verb Tenses",
          "content": "Verb tenses indicate the time of an action or state of being. Common verb tenses include present, past, and future. Each tense can have simple, continuous, perfect, or perfect continuous forms."
        }
      ],
      "examples": [
        "She runs every morning.",
        "I am feeling tired.",
        "They have been studying for hours."
      ],
      "exercises": [
        {
          "question": "Choose the correct form of the verb: She ___ to the store yesterday.",
          "options": [
            "go",
            "goes",
            "went"
          ],
          "correctAnswer": "went"
        },
        {
          "question": "Identify the verb tense in the following sentence: They will be arriving tomorrow.",
          "options": [
            "Present tense",
            "Past tense",
            "Future tense"
          ],
          "correctAnswer": "Future tense"
        }
      ]
    }
  ]
};

const VerbLessonPage = () => {
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

export default VerbLessonPage;
