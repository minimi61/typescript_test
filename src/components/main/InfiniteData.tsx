import React from "react";
import { APIDatas } from './APIDatas';
import { Content } from "./Content";
import useObserver from "../../hooks/useObserver";
import { DataProps } from './../../api/type';
import { queryData,detailQueryData } from "../../api/axios";

export type DataType = string;




export const InfiniteData = () => {
    const { detailChangeType, setdetailChangeType } =  detailQueryData()

    const { isSuccess, data, fetchNextPage, hasNextPage, setChangeType } = queryData();
    const typeStatus = data?.pages[0]?.[0]?.type
    
    const onIntersect: IntersectionObserverCallback = ([entry], io: IntersectionObserver) => {
        if (entry.isIntersecting) {
            io.unobserve(entry.target);
            if (hasNextPage) {
                fetchNextPage();
            }
        }
    };

    
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