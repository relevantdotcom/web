import React, { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import Body from "./Body/Body"
import { HeroContainerSection } from "./Hero.style"

export default function Hero() {
  const [headroom, setHeadroom] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setHeadroom(true)
      } else {
        setHeadroom(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <HeroContainerSection>
      <Navbar headroomEffect={headroom ? true : false} />
      <Body />
    </HeroContainerSection>
  )
}
