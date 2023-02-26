import { storage, validateToken } from "../utils"

class UserSession {
  token = storage<string>("token")

  checkUserLogin() {
    const storedToken = this.token.get()

    if (!storedToken) return false

    if (validateToken(storedToken)) return true

    /*if the old token is invalidated remove it.*/

    this.token.remove()
    return false
  }

  getToken() {
    return this.token.get()
  }

  logout() {
    this.token.remove()
  }

  login(token: string) {
    return this.token.set(token)
  }
}

export const AppUserSession = new UserSession()
