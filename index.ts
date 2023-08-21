import express, { Request, Response } from 'express';

const app = express();
const port = 7777 || process.env.PORT;

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
