import React from "react"
import { BodyContainerDiv } from "./Body.style"
import Description from "./Description/Description"
import NetworkImage from "./NetworkImage/NetworkImage"

export default function Body() {
  return (
    <BodyContainerDiv>
      <Description />
      <NetworkImage />
    </BodyContainerDiv>
  )
}
