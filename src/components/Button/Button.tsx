import React from "react"
import { ButtonContainer } from "./Button.style"
import { ButtonPropsType, ButtonType, VariantType } from "./Button.type"

export default function Button({
  title,
  active,
  children,
  type,
  disabled,
  apply,
  ...rest
}: ButtonPropsType & ButtonType & VariantType) {
  return (
    <ButtonContainer
      active={active}
      {...rest}
      type={type}
      disabled={disabled}
      apply={apply}
    >
      {title || children}
    </ButtonContainer>
  )
}
