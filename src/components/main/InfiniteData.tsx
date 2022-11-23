import React from "react";
import axios from "axios";
import { useEffect, useState, useRef,useMemo } from "react";
import { APIDatas } from './APIDatas';
import { Content } from "./Content";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import useObserver from "../../hooks/useObserver";
import { instance } from "../../api/axios";

export interface DataProps {
    id: number;
    content: string;
    title: string;
    type: string;
    createdAt: number
}

export type DataType = string;

export const InfiniteData = () => {
    
    const baseURL = process.env.REACT_APP_API_KEY;
    const token = process.env.REACT_APP_TOKEN_KEY;
    const [getData, setgetData] = useState<DataProps[]>([]);
    // const [page, setPage] = useState<number>(0);
    // const typeStatus = getData && getData[0]?.type
    // console.log(getData && getData)
    const [changeType, setChangeType] = useState<string>('a')


    // const [bottom, setBottom] = useState<HTMLDivElement | null>(null);

    const { isSuccess, data, fetchNextPage } = useInfiniteQuery(['posts'],
        async ({ pageParam = 0 }) =>
            await instance.get(`/${changeType}-posts?page=${pageParam}`)
        
        // return { data, nextPage: pageParam+1}
        ,{
        getNextPageParam: (lastPage, allPages) => {
            // 다음 페이지 요청에 사용될 pageParam값 return 하기
            //return true; // 여기서는 pageParam을 따로 사용하지 않기 떄문에 true return
            // return console.log(lastPage,allPages)
               
                console.log(lastPage)
            return  
            }
        }
    )

    if(isSuccess) console.log('성공')
    const posts = useMemo(() => {
        if (!data) {
            return []
        }
        return ([] as DataProps[]).concat(data.pages[0].data);
    }, [data])
    
    console.log(posts)
    const onIntersect: IntersectionObserverCallback = ([entry]) => {
        entry.isIntersecting && fetchNextPage();
      };
    
    const { setTarget } = useObserver({ onIntersect });
    

    return (
        <div className="grid place-items-center">
            {/* <Content status={typeStatus} setChangeType={setChangeType}
                setPage={setPage}
                setData={setgetData} /> */}
            <div className="mt-1 mb-3 py-6 w-1/2   border-2 border-gray rounded-lg ">
                {posts && posts.map((item: DataProps, index: number) => {
                    return (
                        <div key={index}>
                            <APIDatas items={item} />
                            <div ref={setTarget} />
                        </div>
                    )
                }
                )}
            </div >
        </div>
    )
}

    //무한 스크롤 일반적인 경우
    // const axiosMethod = async () => await axios
    //     .get(`${baseURL}/${token}/${changeType}-posts?page=${page}`)
    //     .then(function (response) {
    //         console.log(response.data)
            
    //         setgetData(getData && getData.concat(response.data))
    //     })
    //React-Query
    // const { isLoading, error, data } = useQuery(['repoData'], () =>
    //     fetch(`${baseURL}/${token}/${changeType}-posts?page=${page}`).then(res =>
    //         res.json()
    //     )
    // )
    // if (isLoading) console.log('isLoaging')
    // if(error) console.log('error')
    
    // const getDataToAxios = () => {
    //     const res = useInfiniteQuery(
    //         ['infiniteData'],({pageParam=0})=> axios.get(`${baseURL}/${token}/${changeType}-posts?page=${page}`)
    //     )
    // }
    // const onIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             observer.observe(entry.target);
    //              setPage((page) => page + 1)

    //         }
    //     });
    // };
    // useEffect(() => {
    //     axiosMethod()
        
    // }, [page, changeType])

    // useEffect(() => {
    //     let observer;
    //     if (bottom) {
    //         observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
    //         observer.observe(bottom);
    //     }
    // }, [bottom])