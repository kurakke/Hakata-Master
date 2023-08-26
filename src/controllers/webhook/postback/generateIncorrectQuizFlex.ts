import { FlexMessage } from '@line/bot-sdk';

export const generateIncorrectQuizFlex = (correctAnswer: string) => {
  const incorrctQuizFlex: FlexMessage = {
    altText: 'flex message',
    contents: {
      body: {
        contents: [
          {
            align: 'center',
            color: '#3093D8',
            size: 'xl',
            text: '不正解',
            type: 'text',
            weight: 'bold',
          },
          {
            align: 'center',
            text: `正解は、${correctAnswer}です`,
            type: 'text',
            wrap: true,
          },
          {
            contents: [
              {
                action: {
                  label: '友達とシェア',
                  type: 'uri',
                  uri: 'https://line.me/R/share?text=text%20message',
                },
                height: 'sm',
                style: 'primary',
                type: 'button',
              },
            ],
            flex: 0,
            layout: 'vertical',
            spacing: 'sm',
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

  return incorrctQuizFlex;
};
