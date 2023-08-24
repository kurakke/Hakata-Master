import { MessageEvent } from '@line/bot-sdk';

import { lineClient } from '../../lib/line/lineClient';

export const parrot = async (text: string, e: MessageEvent) => {
  await lineClient.replyMessage(e.replyToken, { text, type: 'text' });
};
