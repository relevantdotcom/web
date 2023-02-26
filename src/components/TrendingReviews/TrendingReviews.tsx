import { CardData } from "@/src/utils/DummyData"
import { MouseEvent, useState } from "react"
import Button from "../Button/Button"
import HomepageReviewCard from "../homepageReviewCard/HomepageReviewCard"
import {
  CardGallery,
  HeaderDiv,
  TrendingReviewsWrapper,
} from "./TrendingReviews.style"

export function TrendingReviews() {
  const [open, setOpen] = useState(false)

  const buttonTitle = open ? `See More` : "Read more testimonials"

  function onButtonClick(e: MouseEvent) {
    if (!open) {
      return setOpen(true)
    }
    return console.log("See more")
  }
  return (
    <TrendingReviewsWrapper open={open}>
      <HeaderDiv>
        <h1>See what is trending this week?</h1>
        <p>This week hot topics that might interest you</p>
      </HeaderDiv>

      <CardGallery>
        {CardData.map((item) => (
          <HomepageReviewCard
            business={item.business}
            likes={item.likes}
            title={item.title}
            description={item.description}
            reviewer={item.reviewer}
            rating={item.rating}
            type={"trending"}
            key={item.business}
          />
        ))}
      </CardGallery>
      <Button active onClick={onButtonClick}>
        {buttonTitle}&nbsp; <img src="/assets/right arrow.svg" />{" "}
      </Button>
    </TrendingReviewsWrapper>
  )
}
