import { WebhookEvent } from '@line/bot-sdk';
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
          let generatedText = '';

          switch (e.type) {
            case 'message':
              if (e.message.type === 'text') {
                const text = e.message.text;

                generatedText = parrot(text);
              } else {
                break;
              }

              await lineClient.replyMessage(e.replyToken, { text: generatedText, type: 'text' });
              break;
            default:
              break;
          }
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
