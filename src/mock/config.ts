import MockAdapter from "axios-mock-adapter"
import { RegisterType } from "../schema"
import { createNewAxiosInstance } from "../services/apiMethodFunctions"

export const axios = createNewAxiosInstance()

const mock = new MockAdapter(axios)

mock.onPost("/register").reply(async (config) => {
  const data = JSON.parse(config.data) as RegisterType
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        200,
        {
          message: "User registeration successful",
          payload: data,
        },
      ])
    }, 3000)
  })
})

mock.onPost("/login").reply(async (config) => {
  const data = JSON.parse(config.data) as RegisterType
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        200,
        {
          message: "User Login Successful",
          payload: {
            accessToken: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ`,
            refreshToken: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ`,
          },
        },
      ])
    }, 3000)
  })
})
