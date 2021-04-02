import express, { Request, Response } from 'express';
import {requireAuth} from '../middlewares/require-auth';
import {NotFoundError} from '../errors/not-found-error';
import {NotAuthorizedError} from '../errors/not-authorized-error';
import { Order } from '../models/order';

const router = express.Router();

router.get(
  '/api/orders/:orderId',
  requireAuth,
  async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.orderId).populate('ticket');

    if (!order) {
      throw new NotFoundError();
    }
    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    res.send(order);
  }
);

export { router as showOrderRouter };
