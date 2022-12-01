"use strict";
exports.__esModule = true;
exports.APIDatas = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
exports.APIDatas = function (_a) {
    var items = _a.items;
    var navigate = react_router_dom_1.useNavigate();
    var detailClick = function () {
        navigate("/detail/" + (items === null || items === void 0 ? void 0 : items.id));
    };
    var sliceData = items.content.slice(0, 300);
    return (react_1["default"].createElement("div", { className: "p-5" },
        react_1["default"].createElement("div", { className: "p-5 cursor-pointer hover:bg-gray-100", onClick: detailClick },
            react_1["default"].createElement("div", { className: "flex" },
                react_1["default"].createElement("div", { className: "text-blue-500 text-xl" }, items === null || items === void 0 ? void 0 :
                    items.id,
                    "."),
                react_1["default"].createElement("div", { className: "text-bold text-xl font-semibold ml-3" }, items === null || items === void 0 ? void 0 : items.title)),
            react_1["default"].createElement("div", { className: "text-lg" },
                sliceData,
                "..."))));
};
