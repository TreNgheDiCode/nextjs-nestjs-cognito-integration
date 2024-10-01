import { Organizations } from "../organizations";

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  avatar?: string;
  organizations?: Organizations[];
}
