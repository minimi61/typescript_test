"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useInput = function (value) {
    var _a = react_1.useState(value), onChangeValue = _a[0], setOnChangeValue = _a[1];
    react_1.useEffect(function () {
        var ChangeValue = setTimeout(function () {
            setOnChangeValue(value);
        }, 150);
        return function () {
            clearInterval(ChangeValue);
        };
    }, [value]);
    return onChangeValue;
};
exports["default"] = useInput;
