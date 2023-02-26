import jwtDecode from "jwt-decode"

type DecodedTokenType = {
  exp: number
  iat: number
}

export function validateToken(token: string): boolean {
  const decodedToken = jwtDecode(token) as DecodedTokenType | null

  if (!decodedToken) return false

  return decodedToken.exp > Date.now() / 1000
}
