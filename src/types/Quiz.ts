export type Quiz = {
  question: string;
  first: Answer;
  second: Answer;
  third: Answer;
  fourth: Answer;
};

type Answer = {
  answer: string;
  isCorrect: 't' | 'f';
};
