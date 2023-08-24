import { TextMessage, WebhookEvent } from '@line/bot-sdk';
import { Router } from 'express';

import { parrot } from '../controllers/webhook.controller';
import { lineClient } from '../lib/line/lineClient';

export const webhookRouter = () => {
  const router = Router();

  router.post('/', async (req, res) => {
    const events: WebhookEvent[] = req.body.events;

    const results = await Promise.all(
      events.map(async (e: WebhookEvent) => {
        try {
          if (e.type !== 'message' || e.message.type !== 'text') {
            return;
          }

          const { replyToken } = e;
          const text = e.message.text;
          let generatedText = '';

          generatedText = parrot(text);

          const response: TextMessage = {
            text: generatedText,
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
  });

  return router;
};
