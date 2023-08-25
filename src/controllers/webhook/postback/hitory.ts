import { PostbackEvent } from '@line/bot-sdk';

import { lineClient } from '../../../lib/line/lineClient';

export const history = async (event: PostbackEvent, data: string) => {
    console.log('history');
    const index = parseInt(data.split('&')[1], 10); // quiz&0 から 0 を取得
    const replyMessage = questionAndAnswer[index]?.answer || '不明な質問です。';
    await lineClient.replyMessage(event.replyToken, { text: replyMessage, type: 'text' });
}

const questionAndAnswer = [
    {
        answer: '富士山',
        question: '日本で一番高い山は？',
    },
    {
        answer: '信濃川',
        question: '日本で一番長い川は？',
    },
    {
        answer: '北海道',
        question: '日本で一番面積の広い都道府県は？',
    },
];


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
