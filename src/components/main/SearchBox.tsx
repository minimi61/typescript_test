import React from "react";
import { queryData } from "../../api/axios";

export const SearchBox = () => {
    const { text, setText } = queryData();
    const searchContent = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setText(e.target.value)
    }
    return (
        <div className="mt-10 rounded text-xl w-96 border-solid border-2 focus-within:border-indigo-600 focus-within:shadow-lg
        hover:border-indigo-600 " >
            <button className="inline ml-5" >🔍</button>
            <input className=" p-5 rounded text-xl  outline-none " placeholder="검색어를 입력하세요" onChange={searchContent}/>
        </div>
    )
}