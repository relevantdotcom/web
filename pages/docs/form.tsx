import React from "react"
import { useFormik } from "formik"
import * as yup from "yup"
import Link from "next/link"
import TextField from "@/src/components/form/TextField/TextField"
import TextAreaField from "@/src/components/form/TextField/TextArea"
export default function Index() {
  let schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    textArea: yup.string().required(),
  })
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      password: "",
      textArea: "",
    },
    onSubmit: (values) => {
      console.log("values are", values)
    },
    validationSchema: schema,
  })
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField name="name" error={errors.name} onChange={handleChange} />
        <TextField
          name="password"
          error={errors.password}
          onChange={handleChange}
          type="password"
        />
        <TextAreaField
          name="textArea"
          error={errors.textArea}
          onChange={handleChange}
          type="textArea"
        />
        <button type="submit">Submit</button>
      </form>
      <Link href={"/docs"}>
        <button>Docs</button>
      </Link>
    </>
  )
}
