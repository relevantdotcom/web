import styled from "@emotion/styled"
type WrapperTypes = {
  activeItemIndex: number
}

export const CarouselWrapper = styled("div")<WrapperTypes>`
  display: flex;
  height: 371px;
  width: 1140px;
  align-items: flex-end;
  gap: 32px;
  > div:nth-of-type(${({ activeItemIndex }) => activeItemIndex + 1}) {
    height: 100% !important;
  }
  > div:nth-of-type(odd) {
    height: 100%;
  }
  > div:nth-of-type(even) {
    height: 95%;
  }
`
