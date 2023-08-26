import { RichMenuObject } from '../types/RichMenuObject';

export const MAIN_MENU_OBJECT: RichMenuObject = {
  areas: [
    {
      action: {
        data: 'quiz',
        displayText: 'クイズをしよう！',
        inputOption: 'closeRichMenu',
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
        displayText: '博多について知りたい！',
        inputOption: 'closeRichMenu',
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
        fillInText: '博多弁を練習する\nこんにちは',
        inputOption: 'openKeyboard',
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
