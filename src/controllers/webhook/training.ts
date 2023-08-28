import { CreateChatCompletionRequestMessage } from 'openai/resources/chat';

// import { replaceTargets } from '../../constants/line/replaceTargets';
import { lineClient } from '../../lib/line/lineClient';
import { askGPT } from '../../lib/openAi/askGPT';
import { openAiConfig } from '../../utils/openAiConfig';

import { generateTrainingFlex } from './message/generateTrainingFlex';

export const training = async (text: string, replyToken: string, userId: string) => {
  if (openAiConfig.apiKey) {
    const systems: CreateChatCompletionRequestMessage[] = [];

    // TODO: チャット履歴を取得する必要がある
    const chatHistory: CreateChatCompletionRequestMessage[] = [];

    const messages: CreateChatCompletionRequestMessage[] = [...systems, ...chatHistory];

    const reply = (await askGPT(text, messages)) || '';

    const profile = await lineClient.getProfile(userId);

    // for (const replaceTarget of replaceTargets) {
    //   reply = reply.replace(replaceTarget.target, replaceTarget.replace);
    // }

    const trainingFlex = generateTrainingFlex(reply, profile.displayName);

    await lineClient.replyMessage(replyToken, trainingFlex);
  }
};
