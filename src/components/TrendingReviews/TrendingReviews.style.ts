import { colors } from "@/src/config"
import styled from "@emotion/styled"

type TrendingReviewTypes = {
  open: boolean
}

export const TrendingReviewsWrapper = styled("div")<TrendingReviewTypes>`
  /* min-height: 1179px; */
  height: ${({ open }) => (open ? `950px` : `700px`)};
  overflow: hidden;
  width: 98%;
  padding: 96px 25px;
  margin-top: 96px;
  background: linear-gradient(
    100.07deg,
    #2e303d -12.41%,
    #22604a 107.77%,
    #201e1f 156.14%
  );
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in-out;

  ::before {
    content: "";
    background-image: url("/assets/dotttedCanvas.svg");
    transform: rotate(-180deg);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  ::after {
    background: linear-gradient(
      0deg,
      #ffffff 7.7%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
    opacity: ${({ open }) => (open ? "0" : "1")};
    transition: all 0.3s ease-in-out;
  }
  > div {
    width: 1140px;
    z-index: 3;
  }
  > button {
    z-index: 4;
    position: absolute;
    bottom: 10px;
    left: 46%;
    /* margin-top: 20px; */
  }
`

export const HeaderDiv = styled("div")`
  h1 {
    color: ${colors.primary50};
    font-weight: 700;
    font-size: 32px;
    line-height: 47px;
  }
  p {
    width: 450px;
    color: ${colors.primary50};
    font-size: 18px;
    line-height: 28px;
    font-size: 400;
    margin-top: 8px;
  }
`

export const CardGallery = styled("div")`
  display: flex;
  margin-top: 32px;
  flex-wrap: wrap;
  gap: 24px;
`
