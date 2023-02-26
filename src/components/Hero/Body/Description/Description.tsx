import Button from "@/src/components/Button/Button"
import React from "react"
import { DescriptionContainerDiv } from "./Description.style"

export default function Description() {
  return (
    <DescriptionContainerDiv>
      <h1>
        Create a review, research network.
        <br /> Let people know good in market place
      </h1>
      <p>
        Nepalese first open review writing platform where you can share your
        story.
      </p>
      <Button onClick={() => console.log("clicked")} active>
        Start Reading
      </Button>
    </DescriptionContainerDiv>
  )
}
