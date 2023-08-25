import { TextMessage } from '@line/bot-sdk';
import { CreateChatCompletionRequestMessage } from 'openai/resources/chat';

import { lineClient } from '../../lib/line/lineClient';
import { askGPT } from '../../lib/openAi/askGPT';
import { openAiConfig } from '../../utils/openAiConfig';

export const training = async (text: string, replyToken: string) => {
  if (openAiConfig.apiKey) {
    // TODO: チャット履歴を取得する必要がある
    const messages: CreateChatCompletionRequestMessage[] = [];

    const reply = (await askGPT(text, messages)) || '';

    const replyMessage: TextMessage = {
      text: reply,
      type: 'text',
    };

    lineClient.replyMessage(replyToken, replyMessage);
  }
};
