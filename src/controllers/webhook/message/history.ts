import { FlexMessage } from '@line/bot-sdk';

import { lineClient } from '../../../lib/line/lineClient';

export const history = async (replyToken: string) => {
  await lineClient.replyMessage(replyToken, questionFlexMessage);
};
const questionFlexMessage: FlexMessage = {
  altText: '歴史の何について知りたいですか？',
  contents: {
    body: {
      contents: [
        {
          margin: 'md',
          size: 'md',
          text: '何について知りたいですか？',
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

// LINE Messaging API を使用して Flex Message を送信
