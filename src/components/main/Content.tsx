import React from "react";
import { DataProps } from "../../api/type";

export const Content = ({ status, setChangeType }: {
    status: string, setChangeType: React.Dispatch<React.SetStateAction<string>>
}) => {

    console.log('실제로 받는 값', status)
    return (
        <>
            <div className="mt-10 py-6 flex w-1/2 text-xl  border-b-2 border-gray  mb-3">

                <div className={`${status === 'a' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"}`}
                    onClick={() => {
                        setChangeType('a')
                    }}>A Posts</div>
                <div className={`${status === 'b' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"}`}
                    onClick={() => {
                        setChangeType('b')
                    }}>B Posts</div>
            </div>
        </>
    )
}