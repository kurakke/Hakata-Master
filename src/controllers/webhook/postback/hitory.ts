import { FlexMessage, PostbackEvent } from '@line/bot-sdk';

import { lineClient } from '../../../lib/line/lineClient';

export const history = async (event: PostbackEvent, data: string) => {
  const index = parseInt(data.split('&')[1], 10); // quiz&0 から 0 を取得
  const replyMessage = questionAndAnswer[index]?.answer || '不明な質問です。';
  await lineClient.replyMessage(event.replyToken, [
    { text: replyMessage, type: 'text' },
    questionFlexMessage,
  ]);
};

const questionAndAnswer = [
  {
    answer:
      '福岡市内全域は勿論、福岡地方の筑紫地域・糸島地域（厳密には糸島弁）・糟屋地域南部などで一般的に使われる言葉のことです。',
    question: '博多弁って何？',
  },
  {
    answer:
      '「〜どげん」「〜っちゃん」「〜と？」「〜やけん」を使うことが挙げられます。また、標準的な日本語と比べてアクセントが異なります。',
    question: '博多弁の特徴は？',
  },
  {
    answer:
      'もともとは福岡市博多部を中心とする日本語の方言のことを（福岡部の福岡弁とは異なる方言として）博多弁と称していました。',
    question: '博多弁の歴史は？',
  },
  {
    answer:
      '「博多」という地名が生まれたのは、さかのぼること8世紀ごろと言われています。当時は、湾内を中心とした広い地域を指す地名とされていました。この地名の由来については、「土地博（ひろ）く人・物産多し」という言葉をもとに「博多」、鳥が羽を広げているような地形から「羽形（はがた）」など、さまざまな説があります。',
    question: '博多の由来は？',
  },
];

const questionFlexMessage: FlexMessage = {
  altText: '歴史の何について知りたいですか？',
  contents: {
    body: {
      contents: [
        {
          margin: 'md',
          size: 'md',
          text: '他に何について知りたいですか？',
          type: 'text',
          weight: 'bold',
        },
        {
          action: {
            data: 'history&0',
            displayText: '博多弁って何？',
            label: '博多弁って何？',
            type: 'postback',
          },
          height: 'sm',
          margin: 'md',
          style: 'secondary',
          type: 'button',
        },
        {
          action: {
            data: 'history&1',
            displayText: '博多弁の特徴は？',
            label: '博多弁の特徴は？',
            type: 'postback',
          },
          height: 'sm',
          margin: 'md',
          style: 'secondary',
          type: 'button',
        },
        {
          action: {
            data: 'history&2',
            displayText: '博多弁の歴史は？',
            label: '博多弁の歴史は？',
            type: 'postback',
          },
          height: 'sm',
          margin: 'md',
          style: 'secondary',
          type: 'button',
        },
        {
          action: {
            data: 'history&3',
            displayText: '博多の由来は？',
            label: '博多の由来は？',
            type: 'postback',
          },
          height: 'sm',
          margin: 'md',
          style: 'secondary',
          type: 'button',
        },
      ],
      layout: 'vertical',
      type: 'box',
    },
    type: 'bubble',
  },
  type: 'flex',
};

// const flexMessage = {
//     // 1
//     "body": {
//       // 4
//       "contents": [
//         // 5
//         {
//           "type": "text", // 6
//           "text": "Hello,"
//         },
//         {
//           "type": "text", // 6
//           "text": "World!"
//         }
//       ], // 3
//       "layout": "horizontal", // 2
//       "type": "box"
//     }, "type": "bubble"
//   }
