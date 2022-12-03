"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PageCommon_1 = require("../components/PageCommon");
var react_router_dom_1 = require("react-router-dom");
var usePath_1 = require("../hooks/usePath");
var useGetDetail_1 = require("../manage/api/useGetDetail");
var Detail = function () {
    var navigate = react_router_dom_1.useNavigate();
    // const { changeType } = queryData()
    // const param = useParams();
    // if (!param) {
    //   throw new Error('No Params')
    // }
    // console.log(changeType)
    //매니저님
    var _a = usePath_1.usePath(), type = _a.type, id = _a.id;
    var data = useGetDetail_1["default"](type, id).data;
    var goToBack = function () {
        navigate(-1);
    };
    // const  {data}  = detailQueryData(param?.id as unknown as number)
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageCommon_1["default"], null),
        react_1["default"].createElement("div", { className: "grid place-items-center mt-56" },
            react_1["default"].createElement("div", { className: "w-4/5 h-full border-2 p-10" },
                react_1["default"].createElement("div", { className: "text-bold text-xl font-semibold mb-5" }, data === null || data === void 0 ? void 0 : data.title),
                react_1["default"].createElement("div", { className: "text-md" }, data === null || data === void 0 ? void 0 : data.content)),
            react_1["default"].createElement("div", { className: 'w-4/5 h-full mt-5' },
                react_1["default"].createElement("div", { className: 'w-32 h-12 bg-sky-600 grid place-items-center rounded-lg text-white cursor-pointer ', onClick: goToBack }, "\uB4A4\uB85C\uAC00\uAE30")))));
};
exports["default"] = Detail;
