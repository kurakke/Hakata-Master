import { WebhookEvent } from '@line/bot-sdk';
import { Request, Response } from 'express';

import { parrot } from './parrot';
import { training } from './training';

export const webhookController = async (req: Request, res: Response) => {
  const events: WebhookEvent[] = req.body.events;

  const results = await Promise.all(
    events.map(async (e: WebhookEvent) => {
      try {
        switch (e.type) {
          case 'message':
            if (e.message.type === 'text') {
              // 最初の\nでのみ分割
              const splittedTexts = e.message.text.split(/(?<=^[^\n]+)\n/);

              if (splittedTexts[0] === '歴史') {
                //
              } else if (splittedTexts[0] === '練習') {
                training(splittedTexts[1], e.replyToken);
              } else {
                parrot(splittedTexts[0], e);
              }
            } else {
              break;
            }

            break;
          case 'postback':
            if (e.postback.data.split(',')[0] === 'history') {
              // ...
            } else if (e.postback.data.split(',')[0] === 'quiz') {
              // ...
            }

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
};
