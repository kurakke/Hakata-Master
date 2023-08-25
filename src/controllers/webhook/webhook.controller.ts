import { WebhookEvent } from '@line/bot-sdk';
import { Request, Response } from 'express';

import { history as historyMessage } from './message/history';
import { parrot } from './parrot';
import { history as historyPostback } from './postback/hitory';

export const webhookController = async (req: Request, res: Response) => {
  const events: WebhookEvent[] = req.body.events;

  const results = await Promise.all(
    events.map(async (e: WebhookEvent) => {
      try {
        switch (e.type) {
          case 'message':
            if (e.message.type === 'text') {
              const text = e.message.text;

              if (text === '歴史') {
                console.log('歴史');
                await historyMessage(e, text);
              } else {
                parrot(text, e);
              }
            } else {
              break;
            }

            break;
          case 'postback':
            if (e.postback.data.split('&')[0] === 'history') {
              console.log('history');
              await historyPostback(e, e.postback.data);
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
