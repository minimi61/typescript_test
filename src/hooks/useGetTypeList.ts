import { instance } from "../api/axios"

export const useGetTypeList = async (
  listType: string,
  {pageParam=0}
  // page: number
) => {
  console.log('함수 들어옴 listType', listType)
  const getData = await instance.get(`/${listType}-posts?page=${pageParam}`)
  return getData
}