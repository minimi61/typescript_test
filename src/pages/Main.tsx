import React from 'react'
import { SearchBox } from '../components/main/SearchBox'
import { InfiniteData } from '../components/main/InfiniteData'
import PageCommon from '../components/PageCommon'
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    sessionStorage.setItem("text", "")
    sessionStorage.setItem("type", "a")
  })
  return (

    <section className="grid place-items-center">
      <PageCommon />
      <header className='title my-20' >  과제</header >
      <article className="text-3xl  text-gray-500 -mt-10 ">게시물을 검색해보세요</article>
      <SearchBox />
      <InfiniteData />
    </section>
  )
}

export default Main