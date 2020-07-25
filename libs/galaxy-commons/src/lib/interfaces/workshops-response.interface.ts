import { InstructorResponse } from './instructor-response.interface';

export interface WorkshopResponse {
  _id: string;
  name: string;
  description: string;
  date: Date;
  start: number;
  startMeridiem: string;
  end: number;
  endMeridiem: string;
  instructor: InstructorResponse;
  publish: boolean;
  poster?: string;
}
