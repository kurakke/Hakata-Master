import {
  setDefaultRichMenu,
  setRichMenuAlias,
  setRichMenuImage,
} from '../../lib/line/rich-menu/richMenuHandler';

import { createRichMenuApi } from './apis/createRichMenuApi';
import { MAIN_MENU_OBJECT } from './rich-menu-object/mainMenuObject';

export const richMenu = async () => {
  const richMenuAId = (await createRichMenuApi(MAIN_MENU_OBJECT)) || '';
  await setRichMenuImage(richMenuAId, '../../../../public/images/main-menu.png');

  await setDefaultRichMenu(richMenuAId);

  await setRichMenuAlias(richMenuAId, 'main-menu-alias');
};
