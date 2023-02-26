import {
  ChildrenWrapper,
  Circle,
  ImageWrapper,
  LayoutWrapper,
  MistImage,
  ShadowDiv,
} from "./ReviewDemoLayout.style"

export function ReviewDemoLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <LayoutWrapper>
      <ImageWrapper>
        <Circle />
        <MistImage src="/assets/mistImage.svg" />
      </ImageWrapper>
      <ShadowDiv />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </LayoutWrapper>
  )
}
