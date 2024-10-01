import { User } from "../users";

export interface Team {
  _id: string;
  name: string;
  slug: string;
  users: User[];
}
