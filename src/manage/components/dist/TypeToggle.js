"use strict";
exports.__esModule = true;
exports.TypeToggle = void 0;
var react_1 = require("react");
exports.TypeToggle = function (_a) {
    var listType = _a.listType, setListType = _a.setListType;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "mt-10 py-6 flex w-1/2 text-xl  border-b-2 border-gray  mb-3" },
            react_1["default"].createElement("div", { className: "" + (listType === 'a' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"), onClick: function () { return setListType("a"); } }, "A Posts"),
            react_1["default"].createElement("div", { className: "" + (listType === 'b' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"), onClick: function () { return setListType("b"); } }, "B Posts"))));
};
