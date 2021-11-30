import { EventInterface } from 'models/EventModel';
import { EventService } from 'services/EventService';

import { Controller } from './Controller';

export class EventController extends Controller<EventInterface> {
  constructor() {
    super(new EventService());
  }
}

export const eventController = new EventController();
