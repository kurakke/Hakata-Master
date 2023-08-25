import 'dotenv/config';
import { middleware } from '@line/bot-sdk';
import express, { Request, Response } from 'express';

import { richMenu } from './features/line/richMenu';
import { resetRichMenu } from './lib/line/rich-menu/resetRichMenu';
import { webhookRouter } from './routes/webhook.route';
import { middlewareConfig } from './utils/lineConfig';

const app = express();
const port = process.env.PORT || 7777;

app.use('/webhook', middleware(middlewareConfig));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/webhook', webhookRouter());

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// resetRichMenu();
richMenu();
