import { User } from "next-auth"

export interface IUserService {
  loginCredentials(email: string, password: string): Promise<User> | User
}
