import { FlexMessage, MessageEvent } from '@line/bot-sdk';

import { lineClient } from '../../../lib/line/lineClient';

export const history = async (event: MessageEvent, text: string) => {
  // let state;
  if (text === '歴史') {
    await lineClient.replyMessage(event.replyToken, questionFlexMessage);
  }
}
const questionFlexMessage:FlexMessage = {
  type: 'flex',
  altText: 'Quiz questions list',
  contents: {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'Please select a question:',
          weight: 'bold',
          size: 'md',
          margin: 'md'
        },
        {
          type: 'button',
          style: 'secondary',
          height: 'sm',
          action: {
            type: 'postback',
            label: '日本で一番高い山は？',
            data: 'quiz&0'
          },
          margin: 'md'
        },
        {
          type: 'button',
          style: 'secondary',
          height: 'sm',
          action: {
            type: 'postback',
            label: '日本で一番長い川は？',
            data: 'quiz&1'
          },
          margin: 'md'
        },
        {
          type: 'button',
          style: 'secondary',
          height: 'sm',
          action: {
            type: 'postback',
            label: '日本で一番面積の広い都道府県は？',
            data: 'quiz&2'
          },
          margin: 'md'
        }
      ]
    }
  }
};

// LINE Messaging API を使用して Flex Message を送信
