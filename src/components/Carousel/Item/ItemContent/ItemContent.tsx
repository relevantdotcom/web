import React from "react"
import {
  DoubleQuoteImg,
  InformationWrapper,
  ItemContentWrapper,
  ReadMoreWrapper,
  StarContainer,
} from "./ItemContent.style"

export default function ItemContent({
  title,
  rating,
  reviewer,
  regards,
}: {
  title: string
  rating: number
  reviewer: string
  regards: string
}) {
  return (
    <ItemContentWrapper
      exit={{ opacity: 0, transition: { delay: 0 } }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <DoubleQuoteImg src={"/assets/doublequote.svg"} />
      <StarGroup count={rating} />
      <InformationWrapper>
        <Heading title={title} />
        <Quotation personName={reviewer} regards={regards} />
      </InformationWrapper>
      <ReadMore />
    </ItemContentWrapper>
  )
}

function StarGroup({ count }: { count: number }) {
  return (
    <StarContainer>
      {Array(count)
        .fill(1)
        .map((item) => (
          <img src={`/assets/star.svg`} key={item} />
        ))}
    </StarContainer>
  )
}

function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>
}

function Quotation({
  personName,
  regards,
}: {
  personName: string
  regards: string
}) {
  return (
    <h3>
      {personName} <span>experienced</span> {regards}
    </h3>
  )
}

function ReadMore() {
  return (
    <ReadMoreWrapper>
      <span>Read More</span>
      <div>
        <img src={"/assets/chevron.svg"} loading={"lazy"} />
      </div>
    </ReadMoreWrapper>
  )
}
