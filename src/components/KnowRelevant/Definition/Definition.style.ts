import { colors } from "@/src/config"
import styled from "@emotion/styled"

export const DefinitionWrapperDiv = styled("div")`
  width: 566px;
  h4 {
    color: ${colors.primary700};
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
    font-weight: 900;
    font-family: "IBM Plex Sans";
  }
  h1 {
    color: ${colors.secondary};
    font-size: 32px;
    line-height: 47px;
    margin-top: 4px;
    padding: 0;
    margin: 0;
  }
  p {
    font-family: "IBM Plex Sans";
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: ${colors.text600};
    margin-top: 16px;
    line-height: 28px;
  }
`
