import { AnimatePresence, motion } from "framer-motion"
import React, { ReactElement } from "react"
import { ItemWrapper } from "./Item.style"
import ItemContent from "./ItemContent/ItemContent"

export default function Item({
  title,
  active,
  onClick,
  image,
  rating,
  reviewer,
  regards,
}: {
  title: string
  active: boolean
  onClick: () => any
  image: string
  rating: number
  reviewer: string
  regards: string
}): ReactElement {
  return (
    <ItemWrapper active={active} onClick={onClick}>
      <AnimatePresence>
        {active && (
          <ItemContent
            title={title}
            rating={rating}
            reviewer={reviewer}
            regards={regards}
            // active={active}
          />
        )}
      </AnimatePresence>
      <motion.img
        src={image}
        loading={"lazy"}
        whileHover={{ scale: active ? 1 : 1.04, rotate: active ? 0 : -1 }}
      />
    </ItemWrapper>
  )
}
