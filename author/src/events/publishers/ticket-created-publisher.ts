import { Publisher} from '../../eventsCommon/base-publisher';
import {Subjects} from '../../eventsCommon/subjects';
import {TicketCreatedEvent} from '../../eventsCommon/ticket-created-event';
export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
