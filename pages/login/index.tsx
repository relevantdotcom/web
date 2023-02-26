import Button from "@/src/components/Button/Button"
import { HomepageSection } from "@/src/components/HomepageSection/HomepageSection"
import Navbar from "@/src/components/Navbar/Navbar"
import { login } from "@/src/mock/users/users.service"
import { LoginType, loginValidationSchema } from "@/src/schema"
import { resetDefaultValue } from "@/src/services/resetForm"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useFormik } from "formik"
import React, { useState } from "react"
import { toFormikValidationSchema } from "zod-formik-adapter"
import { useSession, signIn, signOut } from "next-auth/react"
import { Modal } from "@/src/components/Modal/Modal"
// import SignInWithSMs from "@/src/components/SignInWithSMs/SignInWithSMs"
import dynamic from "next/dynamic"

const SignInWithSMs = dynamic(
  () => import("@/src/components/SignInWithSMs/SignInWithSMs"),
  { ssr: false }
)

export default function Index() {
  const [submitted, setSubmitted] = useState(false)
  const [isModal, setModal] = useState(true)

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    touched,
    isValid,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      setSubmitted(true)
      mutate({ ...values, mode: "WEB" })
    },

    validationSchema: toFormikValidationSchema(loginValidationSchema),
  })

  const { data, mutate } = useMutation<
    { access_token: string },
    AxiosError,
    LoginType & { mode: string }
  >({
    mutationFn: (data: LoginType & { mode: string }) => login(data),
    onSuccess: (data) => {
      setSubmitted(false)
      resetDefaultValue(["input-email", "input-password"])
      resetForm()
      // AppUserSession.login(data.access_token)
    },
  })

  return (
    <>
      {/* <Navbar headroomEffect />
      <HomepageSection>
        <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            defaultValue={""}
            error={touched.email && errors.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            type="password"
            error={touched.password && errors.password}
            onChange={handleChange}
          />

          <Button
            active
            type="submit"
            onClick={() => console.log("button clicked")}
            disabled={!isValid || submitted}
          >
            Sign In
          </Button>
        </form>
      </HomepageSection> */}
      <Modal isModal={isModal} setModal={setModal}>
        {/* <Login setModal={setModal}></Login> */}
        <SignInWithSMs />
      </Modal>
    </>
  )
}
