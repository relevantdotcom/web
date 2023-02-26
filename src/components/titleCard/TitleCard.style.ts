import styled from "@emotion/styled"

type TitleCardStyleTypes = {
  active: boolean
}

export const TitleCardDiv = styled("div")<TitleCardStyleTypes>`
  transition: height 300ms ease;
  overflow: hidden;
  width: ${({ active }) => (active === true ? "521px" : "290px")};
  height: ${({ active }) => (active === true ? "132px" : "36px")};
  background-color: ${({ active }) =>
    active === true ? "#3AB574;" : "transparent"};
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  div {
    ${({ active }) =>
      active === true
        ? "display: flex;\
  flex-flow: column nowrap;\
  margin: 16px 0 20px 16px;\
  row-gap: 4px;\
  width: clamp(200px, 100%, 505px);\
    "
        : "display:flex;\
         margin:0px;\
        row-gap:0px;\
        width: 100%;\
        "}
  }
  span {
    color: ${({ active }) => (active === true ? "#ffffff" : "#383A32;")};
  }
  p {
    display: ${({ active }) => (active === true ? "flex;" : "none")};
  }
  &:hover {
    cursor: pointer;
  }
`

export const TitleCardTitle = styled("div")``

export const TitleName = styled("span")`
  width: clamp(250px, 290px, 100%);
  height: 36px;
  font-family: "Lora";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 36px;
  font-feature-settings: "salt" on, "liga" off;
`
export const TitleDescription = styled("p")`
  width: 490px;
  height: 56px;
  margin: 0;
  padding: 0;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  font-feature-settings: "salt" on, "liga" off;
  color: #f2f5eb;
  overflow: hidden;
`
