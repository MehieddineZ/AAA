
import {Subjects} from '../../eventsCommon/subjects';
import {Publisher} from '../../eventsCommon/base-publisher';
import {PaymentCreatedEvent} from '../../eventsCommon/payment-created-event';
export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
