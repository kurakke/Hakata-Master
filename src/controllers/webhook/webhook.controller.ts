import { WebhookEvent } from '@line/bot-sdk';
import { Request, Response } from 'express';

import { history as historyMessage } from './message/history';
import { quiz } from './message/quiz';
import { history as historyPostback } from './postback/hitory';
import { nextQuiz } from './postback/nextQuiz';
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

              if (splittedTexts[0] === 'クイズ') {
                quiz(e.replyToken, 3);
              } else if (splittedTexts[0] === '歴史') {
                historyMessage(e.replyToken, splittedTexts[0]);
              } else if (splittedTexts[0] === '博多弁を練習する') {
                training(splittedTexts[1], e.replyToken, e.source.userId || '');
              }
            } else {
              break;
            }

            break;
          case 'postback':
            if (e.postback.data.split('&')[0] === 'history') {
              if (e.postback.data.split('&')[1]) {
                await historyPostback(e, e.postback.data);
              } else {
                historyMessage(e.replyToken, e.postback.data.split('&')[0]);
              }
              // ...
            } else if (e.postback.data.split('&')[0] === 'quiz') {
              if (e.postback.data.split('&')[6]) {
                const data = e.postback.data.split('&');
                nextQuiz(
                  e.replyToken,
                  e.source.userId || '',
                  3,
                  data[1],
                  data[2],
                  data[3],
                  data[4],
                  data[5],
                  data[6],
                );
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
