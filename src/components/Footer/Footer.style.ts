import { colors } from "@/src/config"
import styled from "@emotion/styled"

export const Footer = styled("footer")``

export const FooterDescription = styled("div")`
  display: flex;
  justify-content: space-between;
  height: 74px;
  align-items: center;
`

export const ListWrapper = styled("div")`
  ul {
    display: flex;
    justify-content: space-between;
    li {
      list-style: none;
      padding: 0px 6px 0px 6px;
      border-right: 1px solid ${colors.primary800};
      color: ${colors.primary800};
      cursor: pointer;
      :last-child {
        border: none !important;
      }
    }
  }
`
