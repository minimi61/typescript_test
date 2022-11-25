import React from "react"

export const TypeToggle = () => {
    return (
        <>
            <div className="mt-10 py-6 flex w-1/2 text-xl  border-b-2 border-gray  mb-3">
                <div className={`${status === 'a' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"}`}
                // onClick={moveToA}///
                >
                    A Posts
                </div>
                <div className={`${status === 'b' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"}`}
                //onClick={moveToB}
                >
                    B Posts
                </div>
            </div>
        </>
    )
}