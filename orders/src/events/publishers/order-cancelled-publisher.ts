import { OrderCancelledEvent } from '../../eventsCommon/order-cancelled-event';
import {Publisher} from '../../eventsCommon/base-publisher'
import {Subjects} from '../../eventsCommon/subjects';
export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
