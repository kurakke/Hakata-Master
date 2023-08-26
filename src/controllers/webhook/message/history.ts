import { FlexMessage } from '@line/bot-sdk';

import { lineClient } from '../../../lib/line/lineClient';

export const history = async (replyToken: string, text: string) => {
  // let state;
  if (text === '歴史' || text === 'history') {
    await lineClient.replyMessage(replyToken, questionFlexMessage);
  }
};
const questionFlexMessage: FlexMessage = {
  altText: 'Quiz questions list',
  contents: {
    body: {
      contents: [
        {
          margin: 'md',
          size: 'md',
          text: 'Please select a question:',
          type: 'text',
          weight: 'bold',
        },
        {
          action: {
            data: 'history&0',
            displayText: 'Buy',
            label: '日本で一番高い山は？',
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
            displayText: 'Buy',
            label: '日本で一番長い川は？',
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
            displayText: 'Buy',
            label: '日本で一番面積の広い都道府県は？',
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

// LINE Messaging API を使用して Flex Message を送信
