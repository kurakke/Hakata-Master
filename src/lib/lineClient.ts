import { Client } from '@line/bot-sdk';

import { clientConfig } from '../utils/lineConfig';

export const lineClient = new Client(clientConfig);
