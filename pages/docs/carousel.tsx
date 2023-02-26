import Carousel from "@/src/components/Carousel/Carousel"
import DocsContainer from "@/src/components/docsContainer/DocsContainer"
import Link from "next/link"
import React from "react"

export default function Index() {
  return (
    <DocsContainer>
      <Carousel />
      <Link href={"/docs"}>
        <button>Docs</button>
      </Link>
    </DocsContainer>
  )
}
