import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { APIDatas } from './APIDatas';
import { Content } from "./Content";

interface DataProps {
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
    const [data, setData] = useState<DataProps[] | undefined>([]);
    const [page, setPage] = useState<number>(0);
    console.log('타입', data && data)
    const typeStatus = data && data[0].type

    const [bottom, setBottom] = useState<HTMLDivElement | null>(null);

    //const bottonObserver = useRef(null);
    
    const axiosMethod = async () => await axios
        .get(`${baseURL}/${token}/a-posts?page=${page}`)
        .then(function (response) {
            console.log(response.data)
            // data?.push(response.data)
        setData(data?.concat(response.data))
    })
    const onIntersect = (entries:IntersectionObserverEntry[], observer:IntersectionObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              observer.observe(entry.target);
              setPage((page) => page + 1)
          }
        });
      };
    useEffect(() => {
        axiosMethod()       
    }, [page])

    useEffect(() => {
        let observer;
        if (bottom) {
          observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
          observer.observe(bottom);
        }
    },[bottom])
    return (
        <div className="grid place-items-center">
            <Content status={typeStatus} />
            <div className="mt-1 mb-3 py-6 w-1/2   border-2 border-gray rounded-lg ">
                {data?.map((item: any, index: number): any => {
                    return (
                        <div key={index}>
                            <APIDatas items={item} />
                            <div ref={setBottom} />
                        </div>
                    )
                }
                )}
            </div >
        </div>
    )
}