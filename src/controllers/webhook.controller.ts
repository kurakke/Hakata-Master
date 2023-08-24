import { TextMessage, WebhookEvent } from '@line/bot-sdk';
import { Request, Response } from 'express';

import { lineClient } from '../lib/lineClient';

export const webhookController = async (req: Request, res: Response) => {
  const events: WebhookEvent[] = req.body.events;

  const results = await Promise.all(
    events.map(async (e: WebhookEvent) => {
      try {
        if (e.type !== 'message' || e.message.type !== 'text') {
          return;
        }

        const { replyToken } = e;

        const response: TextMessage = {
          text: e.message.text,
          type: 'text',
        };

        await lineClient.replyMessage(replyToken, response);
      } catch (e) {
        if (e instanceof Error) {
          return res.status(500).json({ error: e.message });
        }

        return res.status(500).json({ error: String(e) });
      }
    }),
  );

  return res.status(200).json({
    results,
    status: '成功',
  });
};
