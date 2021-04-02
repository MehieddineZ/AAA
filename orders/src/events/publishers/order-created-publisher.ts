import { OrderCreatedEvent } from '../../eventsCommon/order-created-event';
import {Publisher} from '../../eventsCommon/base-publisher'
import {Subjects} from '../../eventsCommon/subjects';
export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
