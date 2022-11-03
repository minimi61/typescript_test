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
    const [data, setData] = useState<DataProps[] | undefined>();
    const typeStatus = data && data[0].type

    const [bottom, setBottom] = useState<HTMLDivElement | null>(null);
    const bottonObserver = useRef(null);

    const axiosMethod = async () => await axios.get(`${baseURL}/${token}/a-posts?page=0`).then(function (response) {
        setData(response.data)
    })
    console.log(data)
    useEffect(() => {
        axiosMethod()
        let observer;
        // if (bottom) {
        //   observer = new IntersectionObserver();
        //   observer.observe(bottom);
        // }

    }, [bottom])

    return (
        <div className="grid place-items-center">
            <Content status={typeStatus} />
            <div className="mt-1 mb-3 py-6 w-1/2   border-2 border-gray rounded-lg ">
                {data && data.map((item: any, index: number): any => {
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