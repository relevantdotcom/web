import { Footer } from "@/src/components/Footer/Footer"
import Hero from "@/src/components/Hero/Hero"
import HomeCarousel from "@/src/components/HomeCarousel/HomeCarousel"
import { KnowRelevant } from "@/src/components/KnowRelevant/KnowRelevant"
import { Testimonials } from "@/src/components/Testimonials/Testimonials"
import { ListWrapper } from "@/src/components/Testimonials/Testimonials.style"
import { TrendingReviews } from "@/src/components/TrendingReviews/TrendingReviews"
import styled from "@emotion/styled"
import React from "react"

export default function Index() {
  return (
    <AppWrapper>
      <Hero />
      <KnowRelevant />
      <Testimonials
        title="For market analysis"
        description="Compare, analyze and decide the product that you want"
      >
        <ListWrapper>
          <li>
            Reviews on Relevant can broaden your Organic Reach. Collect product
            reviews that convert new customers and drive purchases.
          </li>
          <li>
            Get real ratings and reviews from your customers. Understand
            consumer demands and Increase your Sales.
          </li>
          <li>
            Communicate and Engage with your customers to show you care about
            their opinions.
          </li>
          <li>
            Easily collect and Display Real Customer Reviews across your website
            and marketing campaigns.
          </li>
        </ListWrapper>
      </Testimonials>
      <HomeCarousel />
      <Testimonials
        title="For Business"
        description="Understand more clearly about your Customer"
      >
        <ListWrapper>
          <li>
            Reviews on Relevant can broaden your Organic Reach. Collect product
            reviews that convert new customers and drive purchases.
          </li>
          <li>
            Get real ratings and reviews from your customers. Understand
            consumer demands and Increase your Sales.
          </li>
          <li>
            Communicate and Engage with your customers to show you care about
            their opinions.
          </li>
          <li>
            Easily collect and Display Real Customer Reviews across your website
            and marketing campaigns.
          </li>
        </ListWrapper>
      </Testimonials>

      <TrendingReviews />
      <Testimonials
        title="Know your surrounding from your friends"
        description="Top rated Parks, Monuments, Restaurants, Dating spot, Natural heritages and many more"
      >
        <ListWrapper>
          <li>
            Reviews on Relevant can broaden your Organic Reach. Collect product
            reviews that convert new customers and drive purchases.
          </li>
          <li>
            Get real ratings and reviews from your customers. Understand
            consumer demands and Increase your Sales.
          </li>
          <li>
            Communicate and Engage with your customers to show you care about
            their opinions.
          </li>
          <li>
            Easily collect and Display Real Customer Reviews across your website
            and marketing campaigns.
          </li>
        </ListWrapper>
      </Testimonials>
      <Footer />
      {/* <Link href={"/docs"}>
        <button>docs</button>
      </Link> */}
    </AppWrapper>
  )
}
const AppWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
