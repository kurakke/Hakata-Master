import { lineClient } from '../../../lib/line/lineClient';
import { UserMode } from '../../../types/UserMode';

export const startTraining = (userModes: UserMode[], userId: string, replyToken: string) => {
  userModes.push({
    mode: 'training',
    userId,
  });

  lineClient.replyMessage(replyToken, {
    text: '今から博多弁トレーニングを開始します',
    type: 'text',
  });

  console.log(userModes);
};
