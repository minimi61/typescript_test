import { instance } from "./axios";
import { DataPropsArray } from "./type";
import { useInfiniteQuery } from '@tanstack/react-query';

export const getList = async (
  type: string,
  page: number,
  searchValue: string
) => {
  // const { data }: DataPropsArray = await instance.get(`/${type}-posts?page=${page}&search=${searchValue}`)
  // return data
}

export const useGetList = (type: string, searchValue: string) => {
  return useInfiniteQuery(
    ['List', type, searchValue],
    async ({ pageParam = 0 }) => {
      return await getList(
        type,
        pageParam === null ? 0 : pageParam,
        searchValue
      )
    },
    {
      getNextPageParam: (_, allPages) => {
        return allPages.length;
      }
    }
  )
}
