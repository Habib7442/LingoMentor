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
      title: "Lesson 5: Interjections",
      definition:
        "Interjections are words or phrases used to express strong emotions.",
      content:
        "In this lesson, we will explore different interjections, their usage, and their role in adding emotion and emphasis to a sentence.",
      topics: [
        {
          title: "1. Common Interjections",
          content:
            "Common interjections are short exclamations that express emotions such as surprise, joy, sadness, or frustration. Examples include 'wow', 'oh', 'oops', 'yay', 'uh-oh', and 'alas'.",
        },
        {
          title: "2. Greetings and Farewells",
          content:
            "Interjections can also be used as greetings or farewells to express goodwill or acknowledgement. Examples include 'hello', 'goodbye', 'hi', 'hey', 'bye', and 'see you later'.",
        },
        {
          title: "3. Expressing Pain or Disgust",
          content:
            "Interjections can be used to express physical pain or disgust. Examples include 'ouch', 'ugh', 'yuck', 'ew', 'ow', and 'yikes'.",
        },
      ],
      examples: [
        "Wow, that's amazing!",
        "Ouch, that hurt!",
        "Hey, how are you doing?",
      ],
      exercises: [
        {
          question:
            "Choose the correct interjection to complete the sentence: __________, I can't believe it!",
          options: ["Wow", "Oops", "Yay"],
          correctAnswer: "Wow",
        },
        {
          question:
            "Identify the interjection in the following sentence: Ouch! That was a nasty fall.",
          options: ["Ouch", "That", "Nasty"],
          correctAnswer: "Ouch",
        },
      ],
    },
  ],
};

const InterjectionLessonPage = () => {
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

export default InterjectionLessonPage;
