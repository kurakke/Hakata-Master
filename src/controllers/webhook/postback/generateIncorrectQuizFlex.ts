import { FlexMessage } from '@line/bot-sdk';

export const generateIncorrectQuizFlex = (correctAnswer: string, userName: string) => {
  const uri = `https://line.me/R/share?text=${userName}さんが博多弁をシェアしたよ\n博多弁をかわいく言ってみよう！\nほんなこつきつかー\n意味: 本当にしんどい`;
  const encodedUri = encodeURI(uri);

  const incorrectQuizFlex: FlexMessage = {
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
                  uri: encodedUri,
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

  return incorrectQuizFlex;
};
