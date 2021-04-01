
import { Publisher} from '../../eventsCommon/base-publisher';
import {Subjects} from '../../eventsCommon/subjects';
import {TicketUpdatedEvent} from '../../eventsCommon/ticket-updated-event';
export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
