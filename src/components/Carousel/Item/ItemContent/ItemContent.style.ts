import styled from "@emotion/styled"
import { motion } from "framer-motion"

export const ItemContentWrapper = styled(motion.div)`
  background-color: #2f375d;
  width: 50%;
  height: 100%;
  padding: 28px 24px;
`
export const DoubleQuoteImg = styled("img")`
  height: 40px;
  width: 45px;
`
export const InformationWrapper = styled("div")`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 200px;
  h1 {
    font-size: 25px;
    line-height: 34px;
    font-weight: 600;
    color: #f3fbf7;
    font-family: "Lora", serif;
  }
  h3 {
    color: #f3fbf7;
    font-size: 15px;
    line-height: 26px;
    span {
      color: #a6e3c3;
    }
  }
`
export const StarContainer = styled("div")`
  display: flex;
  margin-top: 16px;
  gap: 4px;
`

export const ReadMoreWrapper = styled("button")`
  display: flex;
  /* margin-top: 79px; */
  align-items: center;
  width: 121px;
  border: none;
  background: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #f3fbf7;
  }
  > div {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 20px;
      width: 20px;
      margin-top: 2px;
    }
  }
`
