import { FlexComponent, FlexMessage } from '@line/bot-sdk';
import shuffle from 'lodash.shuffle';

import { Quiz } from '../../../types/Quiz';

export const generateQuizFlex = (
  quizContent: Quiz,
  quizIndex: string,
  correctAmount: string,
  posedQuizAmount: string,
) => {
  const shuffledAnswer: FlexComponent[] = shuffle([
    {
      action: {
        data: `quiz&${quizIndex}&f&${correctAmount}&${posedQuizAmount}&${quizContent.correctAnswer}&${quizContent.question}`,
        displayText: quizContent.first,
        label: quizContent.first,
        type: 'postback',
      },
      height: 'sm',
      style: 'secondary',
      type: 'button',
    },
    {
      action: {
        data: `quiz&${quizIndex}&f&${correctAmount}&${posedQuizAmount}&${quizContent.correctAnswer}&${quizContent.question}`,
        displayText: quizContent.second,
        label: quizContent.second,
        type: 'postback',
      },
      height: 'sm',
      style: 'secondary',
      type: 'button',
    },
    {
      action: {
        data: `quiz&${quizIndex}&f&${correctAmount}&${posedQuizAmount}&${quizContent.correctAnswer}&${quizContent.question}`,
        displayText: quizContent.third,
        label: quizContent.third,
        type: 'postback',
      },
      height: 'sm',
      style: 'secondary',
      type: 'button',
    },
    {
      action: {
        data: `quiz&${quizIndex}&t&${correctAmount}&${posedQuizAmount}&${quizContent.correctAnswer}&${quizContent.question}`,
        displayText: quizContent.correctAnswer,
        label: quizContent.correctAnswer,
        type: 'postback',
      },
      height: 'sm',
      style: 'secondary',
      type: 'button',
    },
  ]);

  const quizFlex: FlexMessage = {
    altText: 'flex message',
    contents: {
      body: {
        contents: [
          {
            align: 'center',
            size: 'xl',
            text: quizContent.question,
            type: 'text',
            weight: 'bold',
            wrap: true,
          },
        ],
        layout: 'vertical',
        type: 'box',
      },
      footer: {
        contents: [
          ...shuffledAnswer,
          {
            contents: [],
            layout: 'vertical',
            margin: 'sm',
            type: 'box',
          },
        ],
        flex: 0,
        layout: 'vertical',
        spacing: 'sm',
        type: 'box',
      },
      type: 'bubble',
    },
    type: 'flex',
  };

  return quizFlex;
};
