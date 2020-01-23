import { User } from '.';

export interface Context {
  getUser: () => Promise<User> | User;
}
