import { quizContents } from '../../../constants/line/quizContents';
import { lineClient } from '../../../lib/line/lineClient';

import { generateQuizFlex } from './generateQuizFlex';

export const quiz = (replyToken: string) => {
  const randomArray = Math.floor(Math.random() * quizContents.length);
  const quizContent = quizContents[randomArray];

  lineClient.replyMessage(replyToken, [generateQuizFlex(quizContent, randomArray.toString())]);
};
