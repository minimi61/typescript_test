"use strict";
exports.__esModule = true;
exports.InfiniteData = void 0;
var react_1 = require("react");
var APIDatas_1 = require("./APIDatas");
var Content_1 = require("./Content");
var useObserver_1 = require("../../hooks/useObserver");
var axios_1 = require("../../api/axios");
exports.InfiniteData = function () {
    // const { detailChangeType, setdetailChangeType } =  detailQueryData()
    var _a = axios_1.queryData(), isSuccess = _a.isSuccess, data = _a.data, fetchNextPage = _a.fetchNextPage, hasNextPage = _a.hasNextPage, changeType = _a.changeType, setChangeType = _a.setChangeType, text = _a.text, setText = _a.setText;
    // const typeStatus = data?.pages[0]?.[0]?.type
    console.log('데이터뿌려주는 곳에서', data && data);
    var onIntersect = function (_a, io) {
        var entry = _a[0];
        if (entry.isIntersecting) {
            io.unobserve(entry.target);
            if (hasNextPage) {
                fetchNextPage();
            }
        }
    };
    var setTarget = useObserver_1["default"]({ onIntersect: onIntersect }).setTarget;
    return (react_1["default"].createElement("div", { className: "grid place-items-center" },
        react_1["default"].createElement(Content_1.Content, { status: changeType, setListType: setChangeType }),
        react_1["default"].createElement("div", { className: "mt-1 mb-3 py-6 w-1/2   border-2 border-gray rounded-lg " }, data && (data === null || data === void 0 ? void 0 : data.pages.map(function (items) {
            return items.map(function (item, index) {
                return (react_1["default"].createElement("div", { key: index },
                    react_1["default"].createElement(APIDatas_1.APIDatas, { items: item }),
                    react_1["default"].createElement("div", { ref: setTarget })));
            });
        })))));
};
//무한 스크롤 일반적인 경우
// const axiosMethod = async () => await axios
//     .get(`${baseURL}/${token}/${changeType}-posts?page=${page}`)
//     .then(function (response) {
//         console.log(response.data)
//         setgetData(getData && getData.concat(response.data))
//     })
// const onIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             observer.observe(entry.target);
//              setPage((page) => page + 1)
//         }
//     });
// };
// useEffect(() => {
//     axiosMethod()
// }, [page, changeType])
// useEffect(() => {
//     let observer;
//     if (bottom) {
//         observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
//         observer.observe(bottom);
//     }
// }, [bottom])
