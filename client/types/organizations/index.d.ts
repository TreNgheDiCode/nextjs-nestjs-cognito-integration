export interface Organization {
  _id: string;
  name: string;
  email: string;
  status: string;
  phoneNumber?: string;
  avatar?: string;
  slug: string;
  roles: string[];
}
