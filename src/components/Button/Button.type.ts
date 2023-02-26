import { MouseEvent } from "react"

export type ButtonType = {
  type?: "button" | "submit" | "reset" | undefined
}

export type VariantType = {
  variant?: "outlined" | "contained"
}
export type ButtonPropsType = {
  title?: string
  active?: boolean
  children?: any
  onClick: (e: MouseEvent) => void
  disabled?: boolean
  apply?: string
}
