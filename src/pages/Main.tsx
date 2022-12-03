import React from 'react'
import { SearchBox } from '../components/main/SearchBox'
import { InfiniteData } from '../components/main/InfiniteData'
import PageCommon from '../components/PageCommon'
import { useEffect } from 'react';
import Search from '../manage/components/Search';
import { TypeToggle } from '../manage/components/TypeToggle';
import PostList from '../manage/components/PostList';
import { useList } from '../manage/api/useList';
//내가 한거
// const Main = () => {
//   useEffect(() => {
//     sessionStorage.setItem("text", "")
//     sessionStorage.setItem("type", "a")
//   })
//   return (

//     <section className="grid place-items-center">
//       <PageCommon />
//       <header className='title my-20' >  과제</header >
//       <article className="text-3xl  text-gray-500 -mt-10 ">게시물을 검색해보세요</article>
//       <SearchBox />
//       <InfiniteData />
//     </section>
//   )
// }

const Main = () => {
  const { List, boxRef, text, setText, listType, setListType } = useList();
  useEffect(() => {
    sessionStorage.setItem('text', '');
    sessionStorage.setItem('type', 'a');
  }, [])
  return (
    <section className='text-center'>
      <header className='mt-32 text-xl text-gray-600'>게시물 검색해보세요</header>
      <main>
        <article className="my-10 flex w-full justify-center">
          <Search text={text} setText={setText} />
        </article>
        <article className="mb-2 border-b-[1px]">
          <TypeToggle  listType={listType} setListType={setListType}/>
        </article>
        <article className="rounded-md border-[1px] p-4 shadow-inner mb-4">
          <PostList
            text={text}
            list={List}
            listType={listType}
            boxRef={boxRef}
          />
        </article>
      </main>
    </section>
  )
}

export default Main