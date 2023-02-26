import { AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"
import Logo from "../Logo/Logo"
import Actions from "./Actions/Actions"
import { HeadroomWrapper, NavbarContainerDiv } from "./Navbar.style"

export default function Navbar({
  headroomEffect,
}: {
  headroomEffect?: boolean
}) {
  const Navbar = (
    <NavbarContainerDiv headroomEffect={headroomEffect}>
      <Logo />
      <Actions />
    </NavbarContainerDiv>
  )

  if (headroomEffect) {
    return (
      <AnimatePresence>
        <HeadroomWrapper
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.3 },
          }}
          exit={{
            x: -100,
            opacity: 0,
            transition: { ease: "easeOut", duration: 0.3 },
          }}
          // transition={{ delay: 0.1 }}
        >
          {Navbar}
        </HeadroomWrapper>
      </AnimatePresence>
    )
  }

  return Navbar
}
