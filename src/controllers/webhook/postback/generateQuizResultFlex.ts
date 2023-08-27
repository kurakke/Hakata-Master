import { FlexMessage } from '@line/bot-sdk';

export const generateQuizResultFlex = (quizAmount: number, correctAmount: number) => {
  const quizResultFlex: FlexMessage = {
    altText: '結果発表',
    contents: {
      body: {
        contents: [
          {
            align: 'center',
            color: '#FF0000',
            size: 'xl',
            text: '結果発表',
            type: 'text',
            weight: 'bold',
          },
          {
            align: 'center',
            size: 'lg',
            text: `正解数は${quizAmount}問中${correctAmount}問です`,
            type: 'text',
          },
          {
            backgroundColor: '#9FD8E36E',
            contents: [
              {
                backgroundColor: '#0D8186',
                contents: [
                  {
                    type: 'filler',
                  },
                ],
                height: '6px',
                layout: 'vertical',
                type: 'box',
                width: `${Math.floor((correctAmount / quizAmount) * 100)}%`,
              },
            ],
            height: '6px',
            layout: 'vertical',
            margin: 'sm',
            type: 'box',
          },
        ],
        layout: 'vertical',
        type: 'box',
      },
      type: 'bubble',
    },
    type: 'flex',
  };

  return quizResultFlex;
};
