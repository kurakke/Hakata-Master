import { RichMenu } from '@line/bot-sdk';

export const B_MENU_OBJECT: RichMenu = {
  areas: [
    {
      action: {
        data: 'richmenu-changed-to-a',
        richMenuAliasId: 'richmenu-alias-a',
        type: 'richmenuswitch',
      },
      bounds: {
        height: 1686,
        width: 1250,
        x: 0,
        y: 0,
      },
    },
    {
      action: {
        type: 'uri',
        uri: 'https://linedevelopercommunity.connpass.com/event/223972/',
      },
      bounds: {
        height: 1686,
        width: 1250,
        x: 1251,
        y: 0,
      },
    },
  ],
  chatBarText: 'Tap to open',
  name: 'richmenu-b',
  selected: false,
  size: {
    height: 1686,
    width: 2500,
  },
};
