import {
  Area,
  DatetimePickerAction,
  MessageAction,
  RichMenuSwitchAction,
  Size,
  URIAction,
} from '@line/bot-sdk';

export type RichMenuObject = {
  size: Size;
  selected: boolean;
  name: string;
  chatBarText: string;
  areas: Array<{
    bounds: Area;
    action: Action<{
      label?: string;
    }>;
  }>;
};

type Action<
  ExtraFields = {
    label: string;
  },
> = (
  | PostbackAction
  | MessageAction
  | URIAction
  | DatetimePickerAction
  | RichMenuSwitchAction
  | {
      type: 'camera';
    }
  | {
      type: 'cameraRoll';
    }
  | {
      type: 'location';
    }
) &
  ExtraFields;

type PostbackAction = {
  type: 'postback';
  data: string;
  text?: string;
  displayText?: string;
  inputOption?: 'closeRichMenu' | 'openRichMenu' | 'openKeyboard' | 'openVoice';
  // TODO: もう少ししっかり型定義した方が良い
  fillInText?: string;
};
