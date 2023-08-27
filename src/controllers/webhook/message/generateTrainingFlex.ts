import { FlexMessage } from '@line/bot-sdk';

export const generateTrainingFlex = (reply: string, userName: string) => {
  const uri = `https://line.me/R/share?text=${userName}さんが博多弁をシェアしたよ\n博多弁をかわいく言ってみよう！\n${reply}`;
  const encodedUri = encodeURI(uri);

  const trainingFlex: FlexMessage = {
    altText: reply,
    contents: {
      body: {
        contents: [
          {
            align: 'center',
            size: 'sm',
            text: reply,
            type: 'text',
            wrap: true,
          },
          {
            backgroundColor: '#00E900',
            contents: [
              {
                type: 'filler',
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
                    url: 'https://drive.google.com/uc?id=1quZjpzBILWiml7WnXU1df4_xLJAUgmxk',
                  },
                  {
                    flex: 0,
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
              {
                type: 'filler',
              },
            ],
            cornerRadius: '4px',
            height: '40px',
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

  return trainingFlex;
};
