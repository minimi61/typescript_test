interface DataProps {
    id: number;
    content: string;
    title: string;
    type: string;
    createdAt: number
}
import React from "react";

export const APIDatas = ({ items }: {items:DataProps}) => {
    const sliceData = items.content.slice(0, 300)
    return (
        <div className="p-5">
            <div className="p-5 cursor-pointer hover:bg-gray-100">
                <div className="flex">
                    <div className="text-blue-500 text-xl">{items.id}.</div>
                    <div className="text-bold text-xl font-semibold ml-3">{items.title}</div>
                </div>
                <div className="text-lg">{sliceData}...</div>
            </div>
        </div>
    )
}