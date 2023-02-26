import styled from "@emotion/styled"
import { motion } from "framer-motion"

export const FullScreenContainerDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 100px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`
