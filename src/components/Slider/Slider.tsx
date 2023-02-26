import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectCoverflow, EffectFade } from "swiper"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Props } from "./Slider.type"
import HomepageReviewCard from "../homepageReviewCard/HomepageReviewCard"

export function Slider({ items, componentType }: Props) {
  const list = [...items, ...items, ...items, ...items]

  return (
    <Swiper
      id="swiper"
      slidesPerView={3}
      speed={2000}
      spaceBetween={16}
      autoplay={{ delay: 2000 }}
      effect={"coverflow"}
      modules={[Pagination, Autoplay, EffectFade, EffectCoverflow, EffectFade]}
    >
      {list.map((item: any, idx: number) => (
        <SwiperSlide key={idx}>
          {componentType === "homepageReviewCard" ? (
            <HomepageReviewCard
              business={item.business}
              likes={item.list}
              title={item.title}
              description={item.description}
              reviewer={item.reviewer}
              rating={item.rating}
              type={"normalCard"}
            />
          ) : (
            <HomepageReviewCard
              business={item.business}
              likes={item.list}
              title={item.title}
              description={item.description}
              reviewer={item.reviewer}
              rating={item.rating}
              type={"normalCard"}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
