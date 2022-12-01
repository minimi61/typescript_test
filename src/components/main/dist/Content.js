"use strict";
exports.__esModule = true;
exports.Content = void 0;
var react_1 = require("react");
exports.Content = function (_a) {
    var status = _a.status, setListType = _a.setListType;
    var moveToA = function () {
        setListType('a');
    };
    var moveToB = function () {
        setListType('b');
    };
    console.log('실제로 받는 값', status);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "mt-10 py-6 flex w-1/2 text-xl  border-b-2 border-gray  mb-3" },
            react_1["default"].createElement("div", { className: "" + (status === 'a' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"), onClick: moveToA }, "A Posts"),
            react_1["default"].createElement("div", { className: "" + (status === 'b' ? " text-blue-600 px-10 text-xl cursor-pointer font-semibold " : "text-black px-10 text-xl cursor-pointer font-semibold"), onClick: moveToB }, "B Posts"))));
};
