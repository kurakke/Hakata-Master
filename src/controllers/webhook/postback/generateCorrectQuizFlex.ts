import { FlexMessage } from '@line/bot-sdk';

export const generateCorrectQuizFlex = (
  userName: string,
  correctAnswer: string,
  question: string,
) => {
  const uri = `https://line.me/R/share?text=${userName}さんが博多弁をシェアしたよ\n博多弁をかわいく言ってみよう！\n${question}\n意味: ${correctAnswer}`;
  const encodedUri = encodeURI(uri);

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
            action: {
              label: '友達とシェア',
              type: 'uri',
              uri: encodedUri,
            },
            contents: [
              {
                type: 'filler',
              },
              {
                type: 'icon',
                url: '',
              },
              {
                text: '友達とシェア',
                type: 'text',
              },
              {
                type: 'filler',
              },
            ],
            layout: 'baseline',
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
