import { ReviewCardTypes } from "../KnowRelevant/KnowRelevant"

export type Props = {
  items: ReviewCardTypes[]
  title?: string
  effect?: `coverflow` | `fade` | `creative`
  show?: boolean
  componentType: "homepageReviewCard"
}
