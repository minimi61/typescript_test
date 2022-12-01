"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var Search_1 = require("../manage/components/Search");
var TypeToggle_1 = require("../manage/components/TypeToggle");
var PostList_1 = require("../manage/components/PostList");
//내가 한거
// const Main = () => {
//   useEffect(() => {
//     sessionStorage.setItem("text", "")
//     sessionStorage.setItem("type", "a")
//   })
//   return (
//     <section className="grid place-items-center">
//       <PageCommon />
//       <header className='title my-20' >  과제</header >
//       <article className="text-3xl  text-gray-500 -mt-10 ">게시물을 검색해보세요</article>
//       <SearchBox />
//       <InfiniteData />
//     </section>
//   )
// }
var Main = function () {
    react_2.useEffect(function () {
        sessionStorage.setItem('text', '');
        sessionStorage.setItem('type', 'a');
    }, []);
    return (react_1["default"].createElement("section", { className: 'text-center' },
        react_1["default"].createElement("header", { className: 'mt-32 text-xl text-gray-600' }, "\uAC8C\uC2DC\uBB3C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694"),
        react_1["default"].createElement("main", null,
            react_1["default"].createElement("article", { className: "my-10 flex w-full justify-center" },
                react_1["default"].createElement(Search_1["default"], null)),
            react_1["default"].createElement("article", { className: "mb-2 border-b-[1px]" },
                react_1["default"].createElement(TypeToggle_1.TypeToggle, null)),
            react_1["default"].createElement("article", { className: "rounded-md border-[1px] p-4 shadow-inner mb-4" },
                react_1["default"].createElement(PostList_1["default"], null)))));
};
exports["default"] = Main;
