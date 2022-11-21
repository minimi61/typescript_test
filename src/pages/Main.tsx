import React from 'react'
import { SearchBox } from '../components/main/SearchBox'
import { InfiniteData } from '../components/main/InfiniteData'
import PageCommon from '../components/PageCommon'

const Main = () => {
  return (

    <section className="grid place-items-center">
      <PageCommon />
      <div className='title my-20' > 솔리다디테 개발자 사전 과제</div >
      <div className="text-3xl  text-gray-500 -mt-10 ">게시물을 검색해보세요</div>
      <SearchBox />
      <InfiniteData />
    </section>
  )
}

export default Main