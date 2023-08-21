import 'dotenv/config';
import express, { Request, Response } from 'express';

import { webhookRouter } from './routes/webhookRouter';

const app = express();
const port = process.env.PORT || 7777;

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));
app.use('/webhook', webhookRouter());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
