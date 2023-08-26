import { AxiosResponse } from 'axios';

import { channelAccessToken } from '../../../utils/lineConfig';
import { RichMenuObject } from '../types/RichMenuObject';

import { lineApi } from './lineApi';

type CreateRichMenuResponse = {
  richMenuId: string;
};

export const createRichMenuApi = async (body: RichMenuObject) => {
  const instance = lineApi(channelAccessToken);

  try {
    const res: AxiosResponse<CreateRichMenuResponse> = await instance.post('/bot/richmenu', body);

    return res.data.richMenuId;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }

    console.log(String(e));
  }
};
