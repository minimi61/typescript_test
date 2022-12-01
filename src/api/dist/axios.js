"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.detailQueryData = exports.queryData = exports.instance = void 0;
var axios_1 = require("axios");
var react_query_1 = require("@tanstack/react-query");
var react_1 = require("react");
// import { paramItem } from "./type";
exports.instance = axios_1["default"].create({
    baseURL: process.env.REACT_APP_API_KEY
});
var fetchDatas = function (listType, page, text) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.instance.get("/" + listType + "-posts?page=" + page + "&search=" + text)];
            case 1:
                data = (_a.sent()).data;
                return [2 /*return*/, data];
        }
    });
}); };
exports.queryData = function () {
    var queryClient = react_query_1.useQueryClient();
    queryClient.invalidateQueries({ queryKey: ['projects'] });
    var _a = react_1.useState('a'), changeType = _a[0], setChangeType = _a[1];
    var _b = react_1.useState(''), text = _b[0], setText = _b[1];
    var _c = react_query_1.useInfiniteQuery(['projects', changeType, text], function (_a) {
        var _b = _a.pageParam, pageParam = _b === void 0 ? 0 : _b;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, fetchDatas(changeType, pageParam === null ? 0 : pageParam, text)];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    }, {
        getNextPageParam: function (lastPage, allPages) { return allPages.length; }
    }), isSuccess = _c.isSuccess, data = _c.data, fetchNextPage = _c.fetchNextPage, hasNextPage = _c.hasNextPage, status = _c.status;
    return { isSuccess: isSuccess, data: data, fetchNextPage: fetchNextPage, hasNextPage: hasNextPage, changeType: changeType, setChangeType: setChangeType, text: text, setText: setText };
};
////////////////////////////디테일페이지
exports.detailQueryData = function (id) {
    var _a = react_1.useState('a'), detailChangeType = _a[0], setdetailChangeType = _a[1];
    var fetchDatas = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.instance.get("/" + detailChangeType + "-posts/" + id)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
            }
        });
    }); };
    var _b = react_query_1.useQuery({
        queryKey: ['detail', detailChangeType],
        queryFn: fetchDatas
    }), isSuccess = _b.isSuccess, data = _b.data;
    return { isSuccess: isSuccess, data: data, setdetailChangeType: setdetailChangeType, detailChangeType: detailChangeType };
};
// const typeStorage = sessionStorage.getItem("type");
// const textStorate = sessionStorage.getItem("text");
// const [listType, setListType] = useState<string>(
//   typeStorage === null ? "a" : String(sessionStorage.getItem("type"))
// );
// const [text, setText] = useState(
//   textStorate === null ? "" : String(sessionStorage.getItem("text"))
// );
// console.log('함수 들어오기전 listType', listType)
