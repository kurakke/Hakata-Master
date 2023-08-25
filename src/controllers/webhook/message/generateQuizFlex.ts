import { FlexComponent, FlexMessage } from '@line/bot-sdk';
import shuffle from 'lodash.shuffle';

import { Quiz } from '../../../types/Quiz';

export const generateQuizFlex = (quizContent: Quiz, quizIndex: string) => {
  const shuffledAnswer: FlexComponent[] = shuffle([
    {
      action: {
        data: `quiz&${quizIndex}&${quizContent.first.isCorrect}&0`,
        label: quizContent.first.answer,
        type: 'postback',
      },
      height: 'sm',
      style: 'secondary',
      type: 'button',
    },
    {
      action: {
        data: `quiz&${quizIndex}&${quizContent.second.isCorrect}&0`,
        label: quizContent.second.answer,
        type: 'postback',
      },
      height: 'sm',
      style: 'secondary',
      type: 'button',
    },
    {
      action: {
        data: `quiz&${quizIndex}&${quizContent.third.isCorrect}&0`,
        label: quizContent.third.answer,
        type: 'postback',
      },
      height: 'sm',
      style: 'secondary',
      type: 'button',
    },
    {
      action: {
        data: `quiz&${quizIndex}&${quizContent.fourth.isCorrect}&0`,
        label: quizContent.fourth.answer,
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
