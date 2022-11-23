import React from "react";
import { DataProps } from "../../api/type";

export const Content = ({ status, setChangeType, setPage, setData }: {
    status: string, setChangeType: React.Dispatch<React.SetStateAction<string>>, setPage: React.Dispatch<React.SetStateAction<number>>, setData: React.Dispatch<React.SetStateAction<DataProps[]>>
}) => {
    const moveToA = () => {
        setChangeType('a')
        setData([])
        setPage(0)
    }
    const moveToB = () => {
        setChangeType('b')
        setData([])
        setPage(0)
    }
    return (
        <>
            <div className="mt-10 py-6 flex w-1/2 text-xl  border-b-2 border-gray  mb-3">

                <div className={`${status === 'a' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"}`}
                    onClick={moveToA}>A Posts</div>
                <div className={`${status === 'b' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"}`}
                    onClick={moveToB}>B Posts</div>
            </div>
        </>
    )
}