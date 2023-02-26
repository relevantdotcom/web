import styled from "@emotion/styled"

export const TestimonialWrapper = styled("div")`
  height: 550px;
  display: flex;
`
export const ListWrapper = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  li {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }
  li::before {
    display: block;
    flex-shrink: 0;
    margin-right: 10px;
    width: 13.33px;
    height: 13.33px;
    background: url("/assets/filledCheckBox.svg") no-repeat left center;
    background-size: contain;
    content: "";
  }
`

export const ImageWrapper = styled("div")`
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    outline: 6px solid #fff;
    position: relative;
    bottom: 20px;
  }
`
