'use client'

import { useRouter } from "next/router";

const PokemonPage = (): JSX.Element => {
  const router = useRouter()
  const {
    query: { name },
  } = router

  return(
    <>
      Page { name }
    </>
  )
}

export default PokemonPage;
