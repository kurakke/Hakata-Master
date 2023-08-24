import { middleware } from '@line/bot-sdk';
import { Router } from 'express';

import { webhookController } from '../controllers/webhook.controller';
import { middlewareConfig } from '../utils/lineConfig';

export const webhookRouter = () => {
  const router = Router();

  router.post('/', middleware(middlewareConfig), webhookController);

  return router;
};
