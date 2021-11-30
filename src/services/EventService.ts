import { Event, EventInterface } from 'models/EventModel';

import { Service } from './Service';

export class EventService extends Service<EventInterface> {
  constructor() {
    super(Event);
  }
}
