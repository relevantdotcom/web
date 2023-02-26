import { CardData, reviewTitleCardArray } from "@/src/utils/DummyData"
import { useState } from "react"
import TitleCard from "../titleCard/TitleCard"
import { Definition } from "./Definition/Definition"
import { CardGalleryDiv, KnowRelevantSection } from "./KnowRelevant.style"
import { ReviewDemo } from "./ReviewDemo/ReviewDemo"

export type ReviewCardTypes = {
  business: string
  likes: string
  title: string
  description: string
  reviewer: string
  profileImg: string
  rating: number
}

type reviewTitleCardType = {
  title: String
  description: string
  isActive: boolean
}

export function KnowRelevant() {
  const [cards, setCards] = useState<ReviewCardTypes[]>(CardData)
  const [reviewTitleCards, setReviewTitleCards] =
    useState<reviewTitleCardType[]>(reviewTitleCardArray)

  const handleScroll = (event: any) => {
    const scrollTop = event.target.scrollTop
    const scrollHeight = event.target.scrollHeight
    const clientHeight = event.target.clientHeight
    const scrollPosition = scrollTop + clientHeight
  }

  return (
    <KnowRelevantSection onScroll={handleScroll}>
      <div style={{ position: "sticky", top: "0", height: "100%" }}>
        <Definition title="About relevant" description="Read. Write. Find">
          <p>
            In relevant you can write & read unbiased review and earn reward.
          </p>
        </Definition>
        <CardGallery data={reviewTitleCards} />
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <ReviewDemo list={cards} />
        <ReviewDemo list={cards} />
      </div>
    </KnowRelevantSection>
  )
}

function CardGallery({ data }: { data: reviewTitleCardType[] }) {
  const [cards, setCards] = useState(data)

  function chooseCard(toSetIndex: number) {
    setCards(
      cards.map((card, idx) => {
        if (idx === toSetIndex) card.isActive = true
        else card.isActive = false
        return card
      })
    )
  }

  return (
    <CardGalleryDiv>
      {cards.map((card: any, idx: number) => (
        <TitleCard
          title={card.title}
          titleDescription={card.description}
          key={card.title}
          active={card.isActive}
          onClick={() => chooseCard(idx)}
        />
      ))}
    </CardGalleryDiv>
  )
}
