import {
  createRichMenu,
  setDefaultRichMenu,
  setRichMenuAlias,
  setRichMenuImage,
} from '../../lib/line/rich-menu/richMenuHandler';

import { A_MENU_OBJECT } from './rich-menu-object/aMenuObject';
import { B_MENU_OBJECT } from './rich-menu-object/bMenuObject';

export const richMenu = async () => {
  const richMenuAId = await createRichMenu(A_MENU_OBJECT);
  await setRichMenuImage(richMenuAId, '../../../../public/images/richmenu-a.png');

  const richMenuBId = await createRichMenu(B_MENU_OBJECT);
  await setRichMenuImage(richMenuBId, '../../../../public/images/richmenu-b.png');

  await setDefaultRichMenu(richMenuAId);

  await setRichMenuAlias(richMenuAId, 'main-menu-alias');
  await setRichMenuAlias(richMenuBId, 'text-generate-menu-alias');
};
