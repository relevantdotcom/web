import styled from "@emotion/styled"

export const HeroContainerSection = styled("section")`
  margin: 0px 25px;
  background: linear-gradient(
    100.07deg,
    #2e303d -12.41%,
    #22604a 107.77%,
    #201e1f 156.14%
  );
  border-radius: 0px 0px 20px 20px;
  height: 619px;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 126px;
  position: relative;

  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.05) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0.05) 75%,
      transparent 75%,
      transparent
    );
    background-size: 1000px 1000px;
  }

  ::after {
    mix-blend-mode: difference;
    background-color: #000;
  }
`
