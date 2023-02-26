import axios, { Method } from "axios"
import { BASE_URL } from "../utils/default-config"
import { TokenSourceType } from "./tokenSource"

export function createNewAxiosInstance() {
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  return instance
}

export async function mutatorFunction<T extends object>(
  resourcePath: string,
  method: Method,
  tokenSourceFunction: TokenSourceType,
  data: T,
  {
    shouldBeAuthenticated = true,
    isFormDataMethod,
  }: { shouldBeAuthenticated: boolean; isFormDataMethod: boolean }
) {
  const url = BASE_URL + resourcePath
  const axiosInstance = createNewAxiosInstance()

  const response = await axiosInstance(url, {
    method: method,
    headers: {
      Authorization: shouldBeAuthenticated
        ? `Bearer ${tokenSourceFunction()}`
        : "",
    },
    data: isFormDataMethod ? data : JSON.stringify(data),
  })

  return await response.data
}

export async function fetcherFunction<ResponseType extends {}>(
  resourcePath: string,
  tokenSourceFunction: TokenSourceType,

  shouldBeAuthenticated: boolean = true
): Promise<ResponseType> {
  const url = BASE_URL + resourcePath
  const axiosInstance = createNewAxiosInstance()

  const axiosResponse = await axiosInstance.get(url, {
    headers: {
      Authorization: shouldBeAuthenticated
        ? `Bearer ${tokenSourceFunction()}`
        : ``,
    },
  })

  const response = await axiosResponse.data

  return response
}
