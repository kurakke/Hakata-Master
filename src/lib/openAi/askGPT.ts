import { ChatCompletion, CreateChatCompletionRequestMessage } from 'openai/resources/chat';

import { openAi } from './openAi';

export const askGPT = async (text: string, messages: CreateChatCompletionRequestMessage[]) => {
  const message: CreateChatCompletionRequestMessage = {
    content: text,
    role: 'user',
  };

  const chat: CreateChatCompletionRequestMessage[] = [...messages, message].map((d) => ({
    content: d.content,
    role: d.role,
  }));

  const completions: ChatCompletion = await openAi.chat.completions.create({
    max_tokens: 50,
    messages: chat,
    model: 'gpt-3.5-turbo',
  });

  return completions.choices[0].message.content;
};
