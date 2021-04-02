import { Message } from 'node-nats-streaming';
import {  TicketCreatedEvent } from '../../eventsCommon/ticket-created-event';
import {Listener} from '../../eventsCommon/base-listener'
import {Subjects} from '../../eventsCommon/subjects';
import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-name';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    const { id, title, price } = data;

    const ticket = Ticket.build({
      id,
      title,
      price,
    });
    await ticket.save();

    msg.ack();
  }
}
