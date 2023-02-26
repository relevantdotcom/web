import { colors } from "@/src/config"
import styled from "@emotion/styled"
import { ButtonType, VariantType } from "./Button.type"

type ButtonPropsType = {
  active?: boolean
  apply?: string
}

export const ButtonContainer = styled("button")<
  ButtonPropsType & ButtonType & VariantType
>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ variant }) =>
    variant === "outlined" ? `1px solid ${colors.primaryDef}` : `none`};
  background: ${({ disabled, active }) =>
    disabled ? colors.lightGrey : active ? "#3AB574" : "none"};
  border-radius: 20px;
  padding: ${({ apply, active }) =>
    apply === "auth" ? `11px 63px` : active ? "8px 32px" : "0px"};
  color: #f3fbf7;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  :focus {
    outline: none;
  }
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
`
