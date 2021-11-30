import { model,Schema } from 'mongoose';

export interface EventInterface {
  id: string;
  subject: string;
  description: string;
  location?: string;
  active_date: string;
  active_date_time: string;
  end_date_time: string;
  duration_in_minutes: number;
}

const schema = new Schema<EventInterface>();

export const Event = model<EventInterface>('Event', schema);
