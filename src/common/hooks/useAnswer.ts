import { useState } from 'react';

export const useAnswer = () => {
  const [isAnswer, setIsAnswer] = useState(false);

  const handleAnswerOpen = () => {
    setIsAnswer(true);
  };

  const handleAnswerClose = () => {
    setIsAnswer(false);
  };

  return { isAnswer, handleAnswerOpen, handleAnswerClose };
};
