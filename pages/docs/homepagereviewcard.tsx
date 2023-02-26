import DocsContainer from "@/src/components/docsContainer/DocsContainer"
import HomepageReviewCard from "@/src/components/homepageReviewCard/HomepageReviewCard"
import Link from "next/link"
import React from "react"

export default function Index() {
  return (
    <DocsContainer>
      {/* <HomepageReviewCard /> */}
      <Link href={"/docs"}>
        <button>Docs</button>
      </Link>
    </DocsContainer>
  )
}
