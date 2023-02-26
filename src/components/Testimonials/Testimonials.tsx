import Button from "../Button/Button"
import { HomepageSection } from "../HomepageSection/HomepageSection"
import { Definition } from "../KnowRelevant/Definition/Definition"
import {
  ImageWrapper,
  ListWrapper,
  TestimonialWrapper,
} from "./Testimonials.style"

export function Testimonials({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <HomepageSection>
      <TestimonialWrapper>
        <Definition title={title} description={description}>
          {children}
        </Definition>
        <ImageWrapper>
          <img src="/assets/businessSloganImg.jpg" />
          <Button active onClick={() => console.log("Clicked")}>
            Add Your Business Now &nbsp; <img src="/assets/right arrow.svg" />{" "}
          </Button>
        </ImageWrapper>
      </TestimonialWrapper>
    </HomepageSection>
  )
}
