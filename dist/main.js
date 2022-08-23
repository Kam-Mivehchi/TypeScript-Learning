/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst player_1 = __webpack_require__(/*! ./player */ \"./js/player.js\");\r\nconst game_1 = __webpack_require__(/*! ./game */ \"./js/game.js\");\r\nconst Helpers = __webpack_require__(/*! ./utility */ \"./js/utility.js\");\r\nlet newGame;\r\ndocument.getElementById('startGame').addEventListener('click', () => {\r\n    const player = new player_1.Player();\r\n    player.name = Helpers.getValue('playername');\r\n    const problemCount = Number(Helpers.getValue('problemCount'));\r\n    const factor = Number(Helpers.getValue('factor'));\r\n    newGame = new game_1.Game(player, problemCount, factor);\r\n    newGame.displayGame();\r\n});\r\ndocument.getElementById('calculate').addEventListener('click', () => {\r\n    newGame.calculateScore();\r\n});\r\n//# sourceMappingURL=app.js.map\n\n//# sourceURL=webpack://my-webpack-project/./js/app.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Game = void 0;\r\nconst utility_1 = __webpack_require__(/*! ./utility */ \"./js/utility.js\");\r\nconst scoreboard_1 = __webpack_require__(/*! ./scoreboard */ \"./js/scoreboard.js\");\r\nclass Game {\r\n    constructor(player, problemCount, factor) {\r\n        this.player = player;\r\n        this.problemCount = problemCount;\r\n        this.factor = factor;\r\n        this.scoreboard = new scoreboard_1.Scoreboard();\r\n    }\r\n    displayGame() {\r\n        let gameForm = '';\r\n        for (let i = 1; i <= this.problemCount; i++) {\r\n            gameForm += '<div class=\"form-group\">';\r\n            gameForm += '<label for=\"answer\"' + i + '\" class=\"col-sm-1 control label\">';\r\n            gameForm += String(this.factor) + ' x ' + i + ' =</label>';\r\n            gameForm += '<div class=\"col-sm-1\"><input type=\"text\"class=\"form-control\" id=\"answer' + i + '\"size=\"5\"/></div>';\r\n            gameForm += '</div>';\r\n        }\r\n        const gameElement = document.getElementById('game');\r\n        gameElement.innerHTML = gameForm;\r\n        document.getElementById('calculate').removeAttribute('disabled');\r\n    }\r\n    calculateScore() {\r\n        let score = 0;\r\n        for (let i = 1; i <= this.problemCount; i++) {\r\n            const answer = Number((0, utility_1.getValue)('answer' + 1));\r\n            if (i * this.factor === answer) {\r\n                score++;\r\n            }\r\n        }\r\n        const result = {\r\n            playerName: this.player.name,\r\n            score: score,\r\n            problemCount: this.problemCount,\r\n            factor: this.factor\r\n        };\r\n        this.scoreboard.addResult(result);\r\n        this.scoreboard.updateScoreBoard();\r\n        document.getElementById('calculate').setAttribute('disabled', 'true');\r\n    }\r\n}\r\nexports.Game = Game;\r\n//# sourceMappingURL=game.js.map\n\n//# sourceURL=webpack://my-webpack-project/./js/game.js?");

/***/ }),

/***/ "./js/player.js":
/*!**********************!*\
  !*** ./js/player.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Player = void 0;\r\nclass Player {\r\n    formatName() {\r\n        return this.name.toUpperCase();\r\n    }\r\n}\r\nexports.Player = Player;\r\n//# sourceMappingURL=player.js.map\n\n//# sourceURL=webpack://my-webpack-project/./js/player.js?");

/***/ }),

/***/ "./js/scoreboard.js":
/*!**************************!*\
  !*** ./js/scoreboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Scoreboard = void 0;\r\nclass Scoreboard {\r\n    constructor() {\r\n        this.results = [];\r\n    }\r\n    addResult(newResult) {\r\n        this.results.push(newResult);\r\n    }\r\n    updateScoreBoard() {\r\n        let output = '<h2>Scoreboard</h2>';\r\n        for (let index = 0; index < this.results.length; index++) {\r\n            const result = this.results[index];\r\n            output += '<h4>' + result.score + '</h4>';\r\n            output += result.playerName + ':' + result.score + result.problemCount + ' for factor ' + result.factor;\r\n            output += '</h4>';\r\n        }\r\n        const scoresElement = document.getElementById('scores');\r\n        scoresElement.innerHTML = output;\r\n    }\r\n}\r\nexports.Scoreboard = Scoreboard;\r\n//# sourceMappingURL=scoreboard.js.map\n\n//# sourceURL=webpack://my-webpack-project/./js/scoreboard.js?");

/***/ }),

/***/ "./js/utility.js":
/*!***********************!*\
  !*** ./js/utility.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.logger = exports.getValue = void 0;\r\nfunction getInput(elementId) {\r\n    let input = document.getElementById(elementId);\r\n    console.log(input.value);\r\n    return input.value;\r\n}\r\nexports.getValue = getInput;\r\nfunction logger(message) {\r\n    console.log(message);\r\n}\r\nexports.logger = logger;\r\n//# sourceMappingURL=utility.js.map\n\n//# sourceURL=webpack://my-webpack-project/./js/utility.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;