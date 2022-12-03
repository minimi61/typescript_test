"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Main_1 = require("./pages/Main");
var react_router_dom_1 = require("react-router-dom");
var Detail_1 = require("./pages/Detail");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: '/', element: react_1["default"].createElement(Main_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/:id", element: react_1["default"].createElement(Detail_1["default"], null) })));
}
exports["default"] = App;
