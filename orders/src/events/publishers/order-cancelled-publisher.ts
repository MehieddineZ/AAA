import {  OrderCancelledEvent } from '../../eventsCommon/order-cancelled-event';
import {Subjects} from '../../eventsCommon/subjects';
import{Publisher} from '../../eventsCommon/base-publisher';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
