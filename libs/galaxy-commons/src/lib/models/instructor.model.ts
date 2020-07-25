import { InstructorResponse } from '../interfaces/instructor-response.interface';

export class Instructor {
  id: string;
  fullName: string;
  mail: string;

  constructor(data?: InstructorResponse) {
    this.fullName = data ? data.fullName : '';
    this.id = data ? data._id : '';
    this.mail = (data && data.mail) ? data.mail : '';
  }

}
