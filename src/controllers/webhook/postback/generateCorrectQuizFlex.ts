import { FlexMessage } from '@line/bot-sdk';

export const generateCorrectQuizFlex = () => {
  const correctQuizFlex: FlexMessage = {
    altText: 'flex message',
    contents: {
      body: {
        contents: [
          {
            align: 'center',
            color: '#FF0000',
            size: 'xl',
            text: '正解!',
            type: 'text',
            weight: 'bold',
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

  return correctQuizFlex;
};
