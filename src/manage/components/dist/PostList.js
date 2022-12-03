"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var PostList = function (_a) {
    var text = _a.text, list = _a.list, listType = _a.listType, boxRef = _a.boxRef;
    return (react_1["default"].createElement("ul", null, list === null || list === void 0 ? void 0 : list.pages.map(function (data, pageIndex) {
        return data.map(function (item, itemIndex) {
            {
                console.log(data.length, pageIndex, itemIndex, list.pages.length, list.pages.length * data.length);
            }
            return (react_1["default"].createElement("li", { key: item.id, ref: data.length * pageIndex + itemIndex === list.pages.length * data.length - 1
                    ? boxRef : null, className: "p-4 duration-150 hover:bg-gray-100" },
                react_1["default"].createElement(react_router_dom_1.Link, { onClick: function () {
                        sessionStorage.setItem("type", listType);
                        sessionStorage.setItem("text", text);
                    }, to: listType + "?id=" + item.id },
                    react_1["default"].createElement("span", { className: "font-semibold text-blue-500" }, item.id + ". "),
                    react_1["default"].createElement("span", { className: "font-semibold" }, item.title),
                    react_1["default"].createElement("p", { className: "textBreak break-words text-sm" }, item.content))));
        });
    })));
};
exports["default"] = PostList;
