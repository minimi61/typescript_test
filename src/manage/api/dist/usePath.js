"use strict";
exports.__esModule = true;
exports.usePath = void 0;
var react_router_dom_1 = require("react-router-dom");
//detail data에 필요한 정보 return 함수
exports.usePath = function () {
    var location = react_router_dom_1.useLocation();
    var type = location.pathname.split("")[1];
    var id = location.search.split("=")[1];
    return { type: type, id: id };
};
