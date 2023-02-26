import styled from "@emotion/styled"
type ItemWrapperProps = {
  active: boolean
}

export const ItemWrapper = styled("div")<ItemWrapperProps>`
  width: ${({ active }) => (active ? "744px" : "34px")};
  transition: width 0.5s ease-in-out;
  overflow: hidden;
  display: flex;
  border-radius: 4px;
  background-color: #2f375d;
  cursor: ${({ active }) => (active ? "default" : "pointer")};
  > img {
    height: 100%;
    width: ${({ active }) => (active ? "50%" : "auto")};
    background-repeat: no-repeat;
    object-fit: ${({ active }) => (active ? "cover" : "none")};
    transition: width 0.5s ease-in-out;
  }
`
