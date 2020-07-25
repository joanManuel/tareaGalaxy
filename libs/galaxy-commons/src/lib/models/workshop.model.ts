import { WorkshopResponse } from '../interfaces/workshops-response.interface';
import { Instructor } from './instructor.model';
import { environment } from 'apps/galaxy/src/environments/environment';

type meridiem = 'am' | 'pm';

export class Workshop {
  id: string;
  name: string;
  description: string;
  date: Date;
  start: number;
  startMeridiem: meridiem;
  end: number;
  endMeridiem: string;
  instructor: Instructor;
  publish: boolean;
  poster: string;

  constructor(data: WorkshopResponse) {
    this.id = data._id || '';
    this.name = data.name || '';
    this.description = data.description || '';
    this.date = data.date || null;
    this.start = data.start || null;
    this.startMeridiem = (data.startMeridiem  as meridiem) || null;
    this.end = data.end || null;
    this.endMeridiem = (data.endMeridiem  as meridiem) || null;
    this.instructor = new Instructor(data.instructor);
    this.publish = data.publish;
    this.poster = data.poster ? `${environment.api}${data.poster}` : null;
  }

  get instructorName() {
    return this.instructor ? this.instructor.fullName : '';
  }

  get startTime() {
    return `${this.start} ${this.startMeridiem }`;
  }

  get endTime() {
    return `${this.end} ${this.endMeridiem}`;
  }

  get displayTime() {
    return `${this.startTime } - ${this.endTime}`;
  }

}
