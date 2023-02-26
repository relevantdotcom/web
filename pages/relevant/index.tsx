import React from "react"

export default function Index() {
  return <div>Index</div>
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/relevant/home",
    },
  }
}
