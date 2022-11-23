import React from "react";
import { useEffect, useState, useRef,useMemo } from "react";
import { APIDatas } from './APIDatas';
import { Content } from "./Content";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import useObserver from "../../hooks/useObserver";
import { instance } from "../../api/axios";
import { DataProps } from './../../api/type';


export type DataType = string;


export const InfiniteData = () => {

    // const [getData, setgetData] = useState<DataProps[]>([]);
    // const [page, setPage] = useState<number>(0);
    const [changeType, setChangeType] = useState<string>('a')
    console.log('changeType',changeType)
    const observerRef = useRef<IntersectionObserver>();
    const boxRef = useRef<HTMLLIElement>(null);
    const fetchDatas = async ({ pageParam = 0 }) => {
        const res = await instance.get(`/${changeType}-posts?page=${pageParam}`)
        return res.data
    }


    const { isSuccess, data, fetchNextPage,hasNextPage } = useInfiniteQuery({
        queryKey: ['projects'],
        queryFn: fetchDatas,
        getNextPageParam: (lastPage, allPages) => 
       { return allPages.length}
          }
    )
    const typeStatus = data?.pages[0]?.[0]?.type

    // if (isSuccess) console.log('성공')

    
    const onIntersect: IntersectionObserverCallback = ([entry], io: IntersectionObserver) => {
        if (entry.isIntersecting) {
            io.unobserve(entry.target);
            if (hasNextPage) {
                fetchNextPage();
            }
        }
    };
    useEffect(() => {
        if (changeType) {
            fetchDatas
        }
    },[changeType])
    useEffect(() => {
        if (observerRef.current) {
            observerRef.current.disconnect();
        }
        observerRef.current = new IntersectionObserver(onIntersect);
        boxRef.current && observerRef.current.observe(boxRef.current);
    }, [data, onIntersect]);
    
    const { setTarget } = useObserver({ onIntersect });
    

    return (
        <div className="grid place-items-center">
            <Content status={typeStatus} setChangeType={setChangeType} />
            <div className="mt-1 mb-3 py-6 w-1/2   border-2 border-gray rounded-lg ">
                {data && data?.pages.map((items) => 
                    items.map((item: DataProps, index:number) => {
                        return (
                            <div key={index}>
                                <APIDatas items={item} />
                                <div ref={setTarget} />
                            </div>
                        )
                    })
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