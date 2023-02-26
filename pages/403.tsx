import { NextPage } from "next"
import Link from "next/link"
import React from "react"
const Custom403: NextPage = () => {
  return (
    <>
      <div>Un authorized </div>
      <Link href="/login">Login</Link>
    </>
  )
}
export default Custom403
