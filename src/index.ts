import 'dotenv/config';
import express, { Request, Response } from 'express';
import webhookRouter from './routes/webhook.route';

const app = express();
const port = process.env.PORT || 7777;
const TOKEN = process.env.LINE_ACCESS_TOKEN;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use('/webhook', webhookRouter);

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));
app.use('/webhook', webhookRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
