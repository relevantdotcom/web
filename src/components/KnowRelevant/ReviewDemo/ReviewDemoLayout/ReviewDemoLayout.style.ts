import { colors } from "@/src/config"
import styled from "@emotion/styled"

export const LayoutWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
`
export const ImageWrapper = styled("div")`
  position: relative;
  width: 323px;
  height: 323px;
  position: sticky;
  top: 0;
`

export const Circle = styled("div")`
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: ${colors.secondary};
  z-index: 3;
`

export const MistImage = styled("img")`
  width: 118.7px;
  height: 118.7px;
  position: absolute;
  top: 10px;
  left: 250px;
`

export const ChildrenWrapper = styled("div")`
  z-index: 3;
  position: absolute;
  width: 100%;
  padding-left: 78px;
`

export const ShadowDiv = styled("div")`
  width: 296px;
  height: 327px;
  position: absolute;
  left: 0;
  bottom: 8px;
  z-index: 4;
  background: linear-gradient(
    91.73deg,
    #ffffff 33.77%,
    rgba(255, 255, 255, 0) 94.72%
  );
`
