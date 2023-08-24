import { Router } from 'express';

import { webhookController } from '../controllers/webhook.controller';

export const webhookRouter = () => {
  const router = Router();

  router.post('/', webhookController);

  return router;
};
