import { lineClient } from '../lineClient';

export const resetRichMenu = async () => {
  const client = lineClient;

  const richMenuAliasList = await client.getRichMenuAliasList();

  for (const richMenu of richMenuAliasList.aliases) {
    client.deleteRichMenuAlias(richMenu.richMenuAliasId);
  }

  const richMenuList = await client.getRichMenuList();

  for (const richMenu of richMenuList) {
    client.deleteRichMenu(richMenu.richMenuId);
  }
};
