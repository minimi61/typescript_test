import { useCallback, useEffect, useRef, useState } from "react"

export const useList = () => {
    const typeStorage = sessionStorage.getItem("type")
    const textStorage = sessionStorage.getItem("text")
    const [listType, setListType] = useState<string>(
        typeStorage === null ? "a" : String(sessionStorage.getItem("type"))
    )
    const [text, setText] = useState(
        textStorage === null ? "" : String(sessionStorage.getItem("text"))
    );


    return
}