import { RichMenu } from '@line/bot-sdk';

export const MAIN_MENU_OBJECT: RichMenu = {
  areas: [
    {
      action: {
        data: 'quiz',
        type: 'postback',
      },
      bounds: {
        height: 843,
        width: 833,
        x: 0,
        y: 0,
      },
    },
    {
      action: {
        data: 'history',
        type: 'postback',
      },
      bounds: {
        height: 843,
        width: 833,
        x: 834,
        y: 0,
      },
    },
    {
      action: {
        data: 'training',
        type: 'postback',
      },
      bounds: {
        height: 843,
        width: 834,
        x: 1667,
        y: 0,
      },
    },
  ],
  chatBarText: 'メニューを開く',
  name: 'main-menu',
  selected: true,
  size: {
    height: 843,
    width: 2500,
  },
};
