
import {Subjects} from '../../eventsCommon/subjects';
import{Publisher} from '../../eventsCommon/base-publisher'
import {  OrderCreatedEvent } from '../../eventsCommon/order-created-event';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
