import { LoginType } from "@/src/schema"
import { axios } from "../config"

export const register = async (data: LoginType) => {
  const response = await axios.post("/register", data)

  return await response.data
}

export const login = async (data: LoginType) => {
  const response = await axios.post("/login", data)

  return await response.data
}
