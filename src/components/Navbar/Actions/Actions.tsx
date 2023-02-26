import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import Button from "../../Button/Button"
import { useModal } from "../../Modal/Modal.state"
import { ActionContainerDiv } from "./Actions.style"

export default function Actions() {
  const { push } = useRouter()
  const { setOpen } = useModal()
  return (
    <ActionContainerDiv>
      <Button onClick={() => console.log("Explore business clicked")}>
        Explore Business
      </Button>
      <Button onClick={setOpen}>Sign In</Button>
      <Button active onClick={() => push("/register")}>
        Get Started
      </Button>
    </ActionContainerDiv>
  )
}
