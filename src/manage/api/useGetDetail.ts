import React from 'react';
import { DataProps, DataPropsArray } from '../../api/type';
import { instance } from '../../api/axios';
import {useQuery} from '@tanstack/react-query'
import { AxiosError } from 'axios';

export interface ListProp {
  id: string;
  title: string;
  content: string;
  type: "a" | "b";
  createAt?: string;
}

export interface IPostList {
  data: ListProp[];
}

export interface IPostDetail {
  data: ListProp;
}


const useGetDetail = (type: string, id: string) => {
  return useQuery<IPostDetail, AxiosError, ListProp>(
    ["Detail", type, id],
    () => instance.get(`/${type}-posts/${id}`),
    {
      select: (data) => data.data,
    }
  )
}
export default useGetDetail;