"use strict";
exports.__esModule = true;
var axios_1 = require("../../api/axios");
var react_query_1 = require("@tanstack/react-query");
var useGetDetail = function (type, id) {
    return react_query_1.useQuery(["Detail", type, id], function () { return axios_1.instance.get("/" + type + "-posts/" + id); }, {
        select: function (data) { return data.data; }
    });
};
exports["default"] = useGetDetail;
