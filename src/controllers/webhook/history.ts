import { Request, Response } from 'express';
import { lineClient } from '../../lib/line/lineClient';

export const history = async (res:Response, req: Request) => {
    const request = req.body;
    await lineClient.replyMessage(request.replyToken, { text: request.message, type: 'text' });
}
