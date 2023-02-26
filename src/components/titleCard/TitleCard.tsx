import { TitleCardTypes } from "@/src/types/TitleCardTypes"
import React from "react"
import {
  TitleCardDiv,
  TitleName,
  TitleCardTitle,
  TitleDescription,
} from "./TitleCard.style"

export default function TitleCard(props: TitleCardTypes) {
  const { active, title, titleDescription, ...onClick } = props

  return (
    <>
      <TitleCardDiv active={active} {...onClick}>
        <TitleCardTitle>
          <TitleName>{title} </TitleName>
          <TitleDescription>{titleDescription}</TitleDescription>
        </TitleCardTitle>
      </TitleCardDiv>
    </>
  )
}
