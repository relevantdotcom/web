import Button from "@/src/components/Button/Button"
import React, { useState } from "react"
import { useFormik } from "formik"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import {
  RegisterType,
  registerValidationSchema,
} from "@/src/schema/register.schema"
import { toFormikValidationSchema } from "zod-formik-adapter"
import { register } from "@/src/mock/users/users.service"
import { resetDefaultValue } from "@/src/services/resetForm"
import Navbar from "@/src/components/Navbar/Navbar"
import { HomepageSection } from "@/src/components/HomepageSection/HomepageSection"
import TextField from "@/src/components/form/TextField/TextField"

export default function Index() {
  const [submitted, setSubmitted] = useState(false)
  const { touched, isValid, errors, handleSubmit, handleChange, resetForm } =
    useFormik({
      initialValues: {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },

      validateOnBlur: false,

      onSubmit: (values) => {
        setSubmitted(true)
        mutate({ ...values, mode: "WEB" })
      },

      validationSchema: toFormikValidationSchema(registerValidationSchema),
    })

  const { data, mutate } = useMutation<
    { access_token: string },
    AxiosError,
    RegisterType & { mode: string }
  >({
    mutationFn: (data: RegisterType & { mode: string }) => register(data),
    onSuccess: (data) => {
      setSubmitted(false)
      resetDefaultValue([
        "input-firstName",
        "input-lastName",
        "input-middleName",
        "input-email",
        "input-password",
        "input-confirmPassword",
      ])
      resetForm()
      // AppUserSession.login(data.access_token)
    },
  })

  const isErrorPresent = !!Object.keys(errors).length

  return (
    <>
      <Navbar headroomEffect />

      <HomepageSection>
        <form onSubmit={handleSubmit}>
          <TextField
            name="firstName"
            defaultValue={""}
            error={touched.firstName && errors.firstName}
            onChange={handleChange}
          />
          <TextField
            name="middleName"
            defaultValue={""}
            error={touched.middleName && errors.middleName}
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            defaultValue={""}
            error={touched.lastName && errors.lastName}
            onChange={handleChange}
          />
          <TextField
            name="email"
            defaultValue={""}
            error={touched.email && errors.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            defaultValue={""}
            type="password"
            error={touched.password && errors.password}
            onChange={handleChange}
          />
          <TextField
            name="confirmPassword"
            type="password"
            error={touched.confirmPassword && errors.confirmPassword}
            onChange={handleChange}
          />

          <Button
            active
            type="submit"
            onClick={() => console.log("button clicked")}
            disabled={!isValid || submitted}
          >
            Register
          </Button>
        </form>
      </HomepageSection>
    </>
  )
}
