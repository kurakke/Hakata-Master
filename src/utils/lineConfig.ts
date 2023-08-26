export const clientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET,
};

export const middlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET || '',
};

export const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN || '';
export const channelSecret = process.env.CHANNEL_SECRET;
