import axios from 'axios';

export const lineApi = (channelAccessToken: string) => {
  return axios.create({
    baseURL: 'https://api.line.me/v2',
    headers: {
      Authorization: `Bearer ${channelAccessToken}`,
      'Content-Type': 'application/json',
    },
  });
};
