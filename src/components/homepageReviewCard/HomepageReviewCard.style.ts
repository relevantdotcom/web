import { colors } from "@/src/config"
import styled from "@emotion/styled"
type containerPropsType = {
  type: string
}

export const HPReviewcardContainerDiv = styled("div")<containerPropsType>`
  height: 209px;
  width: ${({ type }) => (type === "trending" ? "364px" : "297px")};
  border-radius: 6.53px;
  box-shadow: 4.89844px 4.89844px 24.4922px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  padding: 16.32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* justify-content: ${({ type }) =>
    type != "trending" ? "space-between" : "normal"}; */
  cursor: pointer;
  /* max-height: ${({ type }) => (type != "trending" ? "209px" : "")}; */

  /* gap: ${({ type }) => (type === "trending" ? "18px" : "0px")}; */
`

export const TitleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`

export const ProfileDiv = styled("div")`
  display: flex;
  gap: 6.53px;
  align-items: center;
  img {
    width: 26.11px;
    height: 26.12px;
    border-radius: 50%;
  }
  h1 {
    color: ${colors.text700};
    font-weight: 900;
    font-size: 14px;
    line-height: 21px;
    font-family: "IBM Plex Sans", serif;
    font-style: unset;
  }
`

export const ImageDiv = styled("div")`
  width: 32.64px;
  height: 32.66px;
  background-color: ${colors.primary100};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text {
    color: ${colors.primary800};
    font-weight: 900;
    font-size: 9.79688px;
    line-height: 16px;
  }
`

export const LikeDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.04px;
  > div {
    letter-spacing: 0.01em;
    font-style: Medium;
    font-size: 10px;
    line-height: 16px;
    font-weight: 600;
    color: rgba(74, 76, 68, 1);
    text-transform: uppercase;
  }
`

export const ReviewDiv = styled("div")`
  /* margin-top: 9.8px; */
  h3 {
    font-style: italic;
    font-weight: 600;
    font-size: 12.2461px;
    line-height: 21px;
    color: ${colors.text700};
  }
  p {
    font-weight: 400;
    font-size: 12.2461px;
    line-height: 21px;
    color: ${colors.text600};
  }
`

export const Divider = styled("div")`
  width: 100%;
  height: 1px;
  background: ${colors.primary100};
`

export const ReviewerWithRating = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
