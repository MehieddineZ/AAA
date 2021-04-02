
import {Subjects} from '../../eventsCommon/subjects';
import {Publisher} from '../../eventsCommon/base-publisher';
import {ExpirationCompleteEvent} from '../../eventsCommon/expiration-complete-event'

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
