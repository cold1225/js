(function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if(installedModules[moduleId]) {
            return installedModules[moduleId].exports
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
        module.l = true
        return module.exports
    }
    return __webpack_require__("./src/index.js")
})(
    {
        
            "./src/index.js":
            (function (module, exports, __webpack_require__) {
                // require('./sync')
// import(/*webpackChunkName: 'title' */'./title').then(result => {
//     console.log(result.default)
// })
// import(/*webpackChunkName: 'sum' */'./sum').then(result => {
//     console.log(result.default)
// })
const isarray = __webpack_require__("./node_modules/_isarray@2.0.5@isarray/index.js");
console.log(isarray([1, 2, 3]));
            }),
            
            "./node_modules/_isarray@2.0.5@isarray/index.js":
            (function (module, exports, __webpack_require__) {
                var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};
            }),
            
    }
)