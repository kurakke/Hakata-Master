import { RichMenu } from '@line/bot-sdk';

export const A_MENU_OBJECT: RichMenu = {
  areas: [
    {
      action: {
        type: 'uri',
        uri: 'https://twitter.com/intent/tweet?hashtags=LINEDC,linedc_revup,linedc_revup_E&text=%E5%8B%95%E3%81%84%E3%81%9F%E3%82%88%F0%9F%8E%89%F0%9F%8E%89%0D%0A%E3%80%90%E3%83%8F%E3%83%B3%E3%82%BA%E3%82%AA%E3%83%B3%E3%80%91LIFF%E3%82%82%E3%81%84%E3%81%84%E3%81%91%E3%81%A9%E3%83%AA%E3%83%83%E3%83%81%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%92%E8%A7%A6%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86%EF%BC%81&url=https://linedevelopercommunity.connpass.com/event/223972/',
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
        data: 'richmenu-changed-to-b',
        richMenuAliasId: 'richmenu-alias-b',
        type: 'richmenuswitch',
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
  name: 'richmenu-a',
  selected: false,
  size: {
    height: 1686,
    width: 2500,
  },
};
