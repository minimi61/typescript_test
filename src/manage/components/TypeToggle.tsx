import React from "react"

interface props {
    listType: string;
    setListType: React.Dispatch<React.SetStateAction<string>>
}
export const TypeToggle = ({ listType,setListType}:props) => {
    return (
        <>
            <div className="mt-10 py-6 flex w-1/2 text-xl  border-b-2 border-gray  mb-3">
                <div className={`${listType === 'a' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"}`}
                onClick={() => setListType("a")}
                >
                    A Posts
                </div>
                <div className={`${listType === 'b' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"}`}
                onClick={() => setListType("b")}
                >
                    B Posts
                </div>
            </div>
        </>
    )
}