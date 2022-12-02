"use strict";
exports.__esModule = true;
exports.useList = void 0;
var react_1 = require("react");
var useGetList_1 = require("./useGetList");
var useInput_1 = require("./useInput");
exports.useList = function () {
    var typeStorage = sessionStorage.getItem("type");
    var textStorage = sessionStorage.getItem("text");
    var _a = react_1.useState(typeStorage === null ? "a" : String(sessionStorage.getItem("type"))), listType = _a[0], setListType = _a[1];
    var _b = react_1.useState(textStorage === null ? "" : String(sessionStorage.getItem("text"))), text = _b[0], setText = _b[1];
    var query = useInput_1["default"](text);
    var _c = useGetList_1.useGetList(listType, query), List = _c.data, fetchNextPage = _c.fetchNextPage, hasNextPage = _c.hasNextPage;
    var boxRef = react_1.useRef(null);
    var observerRef = react_1.useRef();
    var intersectionObserver = react_1.useCallback(function (entries, io) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                io.unobserve(entry.target);
                if (hasNextPage) {
                    fetchNextPage();
                }
            }
        });
    }, [fetchNextPage, hasNextPage]);
    react_1.useEffect(function () {
        if (observerRef.current) {
            observerRef.current.disconnect();
        }
        observerRef.current = new IntersectionObserver(intersectionObserver);
        boxRef.current && observerRef.current.observe(boxRef.current);
    }, [List, intersectionObserver]);
    return { List: List, boxRef: boxRef, text: text, setText: setText, listType: listType, setListType: setListType };
};
