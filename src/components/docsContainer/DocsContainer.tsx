import styled from '@emotion/styled'
import React from 'react'

export default function DocsContainer({children}:{children:JSX.Element | JSX.Element[]}) {
  return (
    <Container>{children}</Container>
  )
}

const Container=styled('div')`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        width: 100%;
`