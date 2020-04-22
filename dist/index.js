module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(104);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 104:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const exec = __webpack_require__(129).exec
const fs = __webpack_require__(747)

exec('git describe --abbrev=0 --tags',
  (error, stdout, stderr) => {
    if (stdout) {
      exec(`git log ${stdout.trim()}..master --oneline`,
        (error, stdout, stderr) => {
          if (stdout) {
            const stream = fs.createWriteStream('Changelog.md', { flags: 'w' })
            stream.write(stdout)
            exec('git commit -a -m "update changelog"')
          }
        })
    }
  });


/***/ }),

/***/ 129:
/***/ (function(module) {

module.exports = require("child_process");

/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ })

/******/ });