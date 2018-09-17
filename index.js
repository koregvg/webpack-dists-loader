'use strict';

var loaderUtils = require('loader-utils');

module.exports = function (source) {
    var replaced = source
    var options = loaderUtils.getOptions(this) || {};
    var i;
    var envArr = options.env;
    var len = envArr.length;

    for (i = 0; i < len; ++i) {
        if (process.env.NODE_ENV === envArr[i]) {
            replaced = source.replace(/(\/\*<debug>\*\/[\s\S]*\/\*<\/debug>\*\/|<!--debug-->[\s\S]*<!--\/debug-->)/g, '')
        }
    }

    return replaced;
};
