import axios from "axios";
import { useQuery, useInfiniteQuery,useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { DataPropsArray } from "./type";
// import { paramItem } from "./type";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY
})


const fetchDatas = async (
  listType: string,
  page: number
) => {
  const res = await instance.get(`/${listType}-posts?page=${page}`)
  return res.data
}
export const queryData = () => {
  const queryClient = useQueryClient()
  queryClient.invalidateQueries({ queryKey: ['projects'] })
  const [changeType, setChangeType] = useState<string>('a')


  const { isSuccess, data, fetchNextPage, hasNextPage,status } = useInfiniteQuery(
    ['projects',changeType],
    async ({ pageParam = 0 }) => {
      return await fetchDatas(
        changeType,
        pageParam === null ? 0 : pageParam
      )
    },
    {
    getNextPageParam: (lastPage, allPages) => { return allPages.length }
  }
  )

  return { isSuccess, data, fetchNextPage, hasNextPage,changeType,setChangeType}
}


////////////////////////////디테일페이지
export const detailQueryData = (id?: number) => {
  const [detailChangeType, setdetailChangeType] = useState<string>('a')

  const fetchDatas = async () => {
    // console.log('함수 들어옴 changeType', detailChangeType)
    const res = await instance.get(`/${detailChangeType}-posts/${id}`)
    return res.data
  }

  const { isSuccess, data } = useQuery({
    queryKey: ['detail'],
    queryFn: fetchDatas,
  })

  return { isSuccess, data, setdetailChangeType, detailChangeType }
}



  // const typeStorage = sessionStorage.getItem("type");
  // const textStorate = sessionStorage.getItem("text");
  // const [listType, setListType] = useState<string>(
  //   typeStorage === null ? "a" : String(sessionStorage.getItem("type"))
  // );
  // const [text, setText] = useState(
  //   textStorate === null ? "" : String(sessionStorage.getItem("text"))
  // );
  // console.log('함수 들어오기전 listType', listType)