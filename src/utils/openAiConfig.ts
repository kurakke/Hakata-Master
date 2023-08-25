import { ClientOptions } from 'openai';

export const openAiConfig: ClientOptions = {
  apiKey: process.env.OPENAI_API_KEY,
};
