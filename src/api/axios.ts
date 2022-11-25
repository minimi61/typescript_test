import axios from "axios";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { DataPropsArray } from "./type";
import { paramItem } from "./type";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY
})

export const queryData = () => {
  const [changeType, setChangeType] = useState<string>('a')

  console.log('함수 들어오기전 changeType', changeType)

  const fetchDatas = async ({ pageParam = 0 }) => {
    // console.log('함수 들어옴 changeType', changeType)
    const res = await instance.get(`/${changeType}-posts?page=${pageParam}`)
    return res.data
  }

  const { isSuccess, data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: fetchDatas,
    getNextPageParam: (lastPage, allPages) => { return allPages.length }
  }
  )

  return { isSuccess, data, fetchNextPage, hasNextPage, setChangeType }
}

export const detailQueryData = (id?:number ) => {
  const [detailChangeType, setdetailChangeType] = useState<string>('a')

  const fetchDatas = async () => {
    console.log('함수 들어옴 changeType', detailChangeType)
    const res = await instance.get(`/${detailChangeType}-posts/${id}`)
    return res.data
  }

  const { isSuccess, data } = useQuery({
    queryKey: ['detail'],
    queryFn: fetchDatas,
  })

  return {isSuccess, data, setdetailChangeType, detailChangeType}
}