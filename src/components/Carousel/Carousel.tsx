import React, { useState } from "react"
import { CarouselWrapper } from "./Carousel.style"
import Item from "./Item/Item"

const carouselItem = [
  {
    title: "What a nice guitar and build quality",
    active: false,
    image:
      "https://i.pinimg.com/1200x/fa/96/6f/fa966f2794f277078e9f0379efdfb1bc.jpg",
    rating: 4,
    reviewer: "Abin",
    regards: "Yamaha Guitar",
  },
  {
    title: "In love with taste of food at Juicary Cafe",
    active: false,
    image:
      "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600",
    rating: 5,
    reviewer: "Rajiv",
    regards: "Juicary Cafe",
  },
  {
    title: "Furniture from AB Cafe needs a little maintainence",
    active: false,
    image:
      "https://www.ulcdn.net/images/products/312897/original/Arabia_Dining_Table_TK_3.jpg?1609230339",
    rating: 5,
    reviewer: "Ranjit",
    regards: "Dining Table",
  },
  {
    title: "Really a nice book, Worth of your time",
    active: true,
    image: "/assets/sirishKoFul.jpg",
    rating: 4,
    reviewer: "Saliya",
    regards: "Sirish Ko Ful ",
  },
  {
    title: "Just in love with build qualit of Tata Nexon EV",
    active: false,
    image:
      "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/41645/nexon-exterior-left-rear-three-quarter.jpeg?q=75",
    rating: 5,
    reviewer: "Anupa",
    regards: "Tata Nexon EV",
  },
  {
    title: "Just in love with the acceleration of KTM duke 200",
    active: false,
    image:
      "https://news.maxabout.com/wp-content/uploads/2017/04/2017-ktm-200-duke.jpg",
    rating: 4,
    reviewer: "Nutan",
    regards: "KTM Duke 200",
  },
  {
    title:
      "NTC service is too slow and is down on 20th of July , need high skilled engineers",
    active: false,
    image:
      "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/news/3-1673956061.jpg&w=900&height=601",
    rating: 2,
    reviewer: "Samrat",
    regards: "NTC Sundhara",
  },
]

export default function Carousel() {
  const [items, setItems] = useState(carouselItem)
  function setActive(title: string) {
    setItems(
      items.map((item) => {
        if (item.title === title) item.active = true
        else item.active = false
        return item
      })
    )
  }
  const activeItemIndex = items.findIndex((item) => item.active)
  return (
    <CarouselWrapper activeItemIndex={activeItemIndex}>
      {items.map((item) => (
        <Item
          title={item.title}
          key={item.image}
          active={item.active}
          onClick={() => setActive(item.title)}
          image={item.image}
          rating={item.rating}
          reviewer={item.reviewer}
          regards={item.regards}
        />
      ))}
    </CarouselWrapper>
  )
}
