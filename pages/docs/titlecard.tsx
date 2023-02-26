import DocsContainer from "@/src/components/docsContainer/DocsContainer"
import TitleCard from "@/src/components/titleCard/TitleCard"
import Link from "next/link"
import React from "react"

export default function Index() {
  return (
    <DocsContainer>
      <TitleCard
        active={true}
        title={"Know Relevant"}
        titleDescription={"bla bla bla"}
        onClick={() => console.log("clicked")}
      />
      <Link href={"/docs"}>
        <button>Docs</button>
      </Link>
    </DocsContainer>
  )
}
