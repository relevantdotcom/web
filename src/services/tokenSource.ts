import { AppUserSession } from "./userSession"

type TokenType = string

export type TokenSourceType = () => TokenType | null

export const tokenSourceFunction = AppUserSession.getToken.bind(AppUserSession)
