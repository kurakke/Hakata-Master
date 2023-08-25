import { TextMessage } from '@line/bot-sdk';
import { CreateChatCompletionRequestMessage } from 'openai/resources/chat';

import { lineClient } from '../../lib/line/lineClient';
import { askGPT } from '../../lib/openAi/askGPT';
import { openAiConfig } from '../../utils/openAiConfig';

export const training = async (text: string, replyToken: string) => {
  if (openAiConfig.apiKey) {
    const systems: CreateChatCompletionRequestMessage[] = [
      {
        content: '博多弁で話す人',
        role: 'system',
      },
    ];

    // TODO: チャット履歴を取得する必要がある
    const chatHistory: CreateChatCompletionRequestMessage[] = [];

    const messages: CreateChatCompletionRequestMessage[] = [...systems, ...chatHistory];

    const reply = (await askGPT(text, messages)) || '';

    const replyMessage: TextMessage = {
      text: reply,
      type: 'text',
    };

    lineClient.replyMessage(replyToken, replyMessage);
  }
};
