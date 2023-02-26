import { ReviewDemoLayout } from "./ReviewDemoLayout/ReviewDemoLayout"
import "swiper/css"
import { Slider } from "../../Slider/Slider"
import { ReviewCardTypes } from "../KnowRelevant"

export function ReviewDemo({ list }: { list: ReviewCardTypes[] }) {
  return (
    <ReviewDemoLayout>
      <Slider items={list} componentType="homepageReviewCard" />
    </ReviewDemoLayout>
  )
}
