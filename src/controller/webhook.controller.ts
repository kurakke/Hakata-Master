import { Request, Response } from 'express';

export const sample = (req: Request, res: Response) => {
    return res.send('Hello Webhook Sample!');
};
