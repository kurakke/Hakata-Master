import OpenAi from 'openai';

import { openAiConfig } from '../../utils/openAiConfig';

export const openAi = new OpenAi(openAiConfig);
