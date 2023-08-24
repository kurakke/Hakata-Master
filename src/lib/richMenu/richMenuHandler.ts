import { readFileSync } from 'fs';
import { join } from 'path';

import { RichMenu } from '@line/bot-sdk';

import { lineClient } from '../lineClient';

export const createRichMenu = async (richMenuObject: RichMenu) => {
  return await lineClient.createRichMenu(richMenuObject);
};

export const setRichMenuImage = async (richMenuId: string, path: string) => {
  const filepath = join(__dirname, path);
  const buffer = readFileSync(filepath);

  await lineClient.setRichMenuImage(richMenuId, buffer);
};

export const setDefaultRichMenu = async (richMenuId: string) => {
  return await lineClient.setDefaultRichMenu(richMenuId);
};

export const setRichMenuAlias = async (richMenuId: string, richMenuAliasId: string) => {
  return await lineClient.createRichMenuAlias(richMenuId, richMenuAliasId);
};
