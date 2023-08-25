import { WebhookEvent } from '@line/bot-sdk';
import { Request, Response } from 'express';

import { quiz } from './message/quiz';
import { parrot } from './parrot';
import { nextQuiz } from './postback/nextQuiz';

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
                //
              } else if (text === 'クイズ') {
                quiz(e.replyToken, 3);
              } else {
                parrot(text, e);
              }
            } else {
              break;
            }

            break;
          case 'postback':
            if (e.postback.data.split(',')[0] === 'history') {
              // ...
            } else if (e.postback.data.split('&')[0] === 'quiz') {
              if (e.postback.data.split('&')[5]) {
                const data = e.postback.data.split('&');
                nextQuiz(e.replyToken, 3, data[1], data[2], data[3], data[4], data[5]);
              } else {
                quiz(e.replyToken, 3);
              }
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
