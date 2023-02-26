import styled from "@emotion/styled"
import Link from "next/link"

export default function Index() {

  return (
    <ContainerDiv>
      <Link href={"/docs/form"}>
        <button>Form Components</button>
      </Link>
      <Link href={"/docs/homepagereviewcard"}>
        <button>Homepage review card</button>
      </Link>
      <Link href={"/docs/titlecard"}>
        <button>Title Card</button>
      </Link>
      <Link href={"/docs/carousel"}>
        <button>Carousel</button>
      </Link>
    </ContainerDiv>
  )
}


const ContainerDiv=styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;


`