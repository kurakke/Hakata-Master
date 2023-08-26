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

  return correctQuizFlex;
};
