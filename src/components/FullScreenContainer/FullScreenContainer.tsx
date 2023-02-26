import { FullScreenContainerDiv } from "./FullScreenContainer.style"

export function FullScreenContainer({ children }: any) {
  return (
    <FullScreenContainerDiv
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </FullScreenContainerDiv>
  )
}
