import styled from "@emotion/styled"
import { motion } from "framer-motion"

type navTypes = {
  headroomEffect?: boolean
}

export const NavbarContainerDiv = styled("nav")<navTypes>`
  width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeadroomWrapper = styled(motion.div)`
  background: linear-gradient(
    100.07deg,
    #2e303d -12.41%,
    #22604a 107.77%,
    #201e1f 156.14%
  );
  position: fixed;
  top: 0;
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  border-radius: 0px 0px 20px 20px;
  height: 72px;
  margin: 0px 25px;
`
