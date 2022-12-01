"use strict";
exports.__esModule = true;
exports.SearchBox = void 0;
var react_1 = require("react");
var axios_1 = require("../../api/axios");
exports.SearchBox = function () {
    var _a = axios_1.queryData(), text = _a.text, setText = _a.setText;
    var searchContent = function (e) {
        console.log(e.target.value);
        setText(e.target.value);
    };
    return (react_1["default"].createElement("div", { className: "mt-10 rounded text-xl w-96 border-solid border-2 focus-within:border-indigo-600 focus-within:shadow-lg\r\n        hover:border-indigo-600 " },
        react_1["default"].createElement("button", { className: "inline ml-5" }, "\uD83D\uDD0D"),
        react_1["default"].createElement("input", { className: " p-5 rounded text-xl  outline-none ", placeholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694", onChange: searchContent })));
};
