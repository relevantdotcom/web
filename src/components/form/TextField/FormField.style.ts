import { colors } from "@/src/config"
import styled from "@emotion/styled"

export const FormField = styled("div")`
  padding: 3px;
  position: relative;
`

type FormFieldLabelType = {
  error?: string
  theme: string
}

export const FormFieldLabel = styled("label")<FormFieldLabelType>`
  font-weight: bold;
  color: ${({ error, theme }) =>
    error
      ? colors.red
      : theme === "light"
      ? colors.lightGrey
      : colors.lightGrey};
  font-size: 14px;
`
