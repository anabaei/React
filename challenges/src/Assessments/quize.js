import React, { useState } from 'react';
import { ThemeProvider, Alert, Box, Button, Card, Heading, Text } from 'theme-ui';

const theme = {
  alerts: {
    success: {
      color: 'white',
      bg: 'green',
    },
    error: {
      color: 'white',
      bg: 'red',
    },
  },
};

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [alertType, setAlertType] = useState('');

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci',
    },
    // Add more questions here
  ];

  const handleAnswer = (selectedOption) => {
    const currentAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === currentAnswer) {
      setScore(score + 1);
      setAlertType('success');
    } else {
      setAlertType('error');
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAlertType('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box p={4}>
        {!showResult ? (
          <Card>
            <Box p={4}>
              <Heading as="h2">Quiz App</Heading>
              <Text>Question {currentQuestion + 1} of {questions.length}</Text>
              <Heading as="h3" mt={3} mb={4}>{questions[currentQuestion].question}</Heading>
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <div onClick={() => handleAnswer(option)}>{option}</div>
                  </li>
                ))}
              </ul>
              {alertType && (
                <Alert variant={alertType === 'success' ? 'success' : 'error'} mt={4}>
                  {alertType === 'success' ? 'Correct answer!' : 'Wrong answer!'}
                </Alert>
              )}
            </Box>
          </Card>
        ) : (
          <Card>
            <Box p={4}>
              <Heading as="h2">Quiz Result</Heading>
              <Text>Your score: {score}/{questions.length}</Text>
              <Button onClick={handleRestart} mt={4}>Restart Quiz</Button>
            </Box>
          </Card>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default QuizApp;
