
import axios from "axios";
import { useEffect, useState } from "react";
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
    const [data, setData] = useState<DataProps[] | undefined>();

    const axiosMethod = async () => await axios.get('https://recruit-api.yonple.com/recruit/112547/a-posts?page=0 ').then(function (response) {
        setData(response.data)
    })
    useEffect(() => {
        axiosMethod()
    }, [])
    const typeStatus = data && data[0].type

    return (
        <div className="grid place-items-center">
            <Content status={typeStatus} />
            <div className="mt-1 mb-3 py-6 w-1/2   border-2 border-gray rounded-lg ">
                {data && data.map((item: any, index: number): any => {
                    return (
                        <div >
                            <APIDatas items={item} key={index} />
                        </div>
                    )
                }
                )}
            </div >
        </div>
    )
}