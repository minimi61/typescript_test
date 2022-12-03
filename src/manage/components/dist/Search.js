"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Search = function (_a) {
    var text = _a.text, setText = _a.setText;
    var inputRef = react_1.useRef(null);
    var onClickInput = function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (react_1["default"].createElement("div", { className: "w-80 space-x-2 rounded-md border-[1px] p-3 text-sm text-gray-400 duration-150 focus-within:border-blue-400  hover:border-blue-400", onClick: onClickInput },
        react_1["default"].createElement("button", null, "\uD83D\uDC2C"),
        react_1["default"].createElement("input", { autoFocus: true, ref: inputRef, onChange: function (e) { return setText(e.target.value); }, value: text, type: 'text', placeholder: '\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694', className: 'w-[80%] outline-none' })));
};
exports["default"] = Search;
