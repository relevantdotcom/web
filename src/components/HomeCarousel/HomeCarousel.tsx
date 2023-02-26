import React from "react"
import Carousel from "../Carousel/Carousel"
import { HomeCarouselSection, TitleWrapper } from "./HomeCarousel.style"

export default function HomeCarousel() {
  return (
    <HomeCarouselSection>
      <TitleWrapper>
        <h2>Find what is best for you</h2>
        <p>
          Feel whats other are feeling and find what other saying about the
          thing you trying to do.
        </p>
      </TitleWrapper>
      <Carousel />
    </HomeCarouselSection>
  )
}
