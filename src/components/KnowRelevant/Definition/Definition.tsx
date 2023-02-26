import { DefinitionWrapperDiv } from "./Definition.style"

export function Definition({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <DefinitionWrapperDiv>
      <h4>{title}</h4>
      <h1>{description}</h1>
      {children}
    </DefinitionWrapperDiv>
  )
}
