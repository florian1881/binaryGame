/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlMethod.js */ \"./src/htmlMethod.js\");\n/* harmony import */ var _external_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external.js */ \"./src/external.js\");\n// Instance of Game ====> myGame²²\r\n;\r\n\r\n\r\n\r\n\r\nclass Game {\r\n\r\n    static pseudoInit() {\r\n        // Optionnal : init()  --->  Auto generated pseudo value into input\r\n        (0,_external_js__WEBPACK_IMPORTED_MODULE_1__.pseudoGenerator)(\"player-pseudo\");\r\n        // Display the right field\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlDisplay)(\"game\", \"none\");\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlDisplay)(\"result\", \"none\");\r\n    }\r\n\r\n    initGame() {\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlDisplay)(\"intro\", \"none\");\r\n        //Display inline on all game HTML\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlDisplay)(\"game\", \"inline\");\r\n        this.getPlayerName();\r\n        this.newGame();\r\n    }\r\n\r\n    constructor() {\r\n        this.playerLevel = 1;\r\n    }\r\n\r\n    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n    //$$$$$$$ Modifer cette partie pour la faire marcher avec le this dans la classe exernal $$$$$$$$\r\n    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n\r\n    newGame() {\r\n        let byteNumberMax = 1;\r\n        if (this.playerLevel == 1) {\r\n            let rand = (0,_external_js__WEBPACK_IMPORTED_MODULE_1__.randNumber)(byteNumberMax);\r\n            let result = rand.toString(2);\r\n            (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlInnerHtml)(\"binary\", result);\r\n        } else {\r\n            byteNumberMax = 2 ** this.playerLevel - 1;\r\n            let rand = (0,_external_js__WEBPACK_IMPORTED_MODULE_1__.randNumber)(byteNumberMax);\r\n            let result = rand.toString(2);\r\n            (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlInnerHtml)(\"binary\", result);\r\n        }\r\n    }\r\n\r\n    levelUp() {\r\n        this.playerLevel += 1;\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlInnerHtml)(\"player-level\", `Niveau : ${this.playerLevel}<br>`);\r\n\r\n    }\r\n\r\n    guess() {\r\n        let guess = (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlValue)(\"binary-guess\").trim();\r\n        // Expected value of binary converted back to decimal\r\n        let expectedValue = parseInt((0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlInnerHtml)(\"binary\"), 2);\r\n        if (guess == expectedValue) {\r\n            (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlIdDisplay)(\"fail\", \"none\");\r\n            this.levelUp();\r\n            (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlInnerHtml)(\"success\", `Bravo ! Vous passez au niveau ${this.playerLevel}`);\r\n            (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlIdDisplay)(\"success\", \"inline\");\r\n            this.newGame();\r\n            (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlValue)(\"binary-guess\",\"\");\r\n        } else {\r\n            this.gameOver();\r\n            (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlValue)(\"binary-guess\",\"\");\r\n            \r\n        }\r\n    }\r\n\r\n    gameOver() {\r\n        this.playerLevel = 1;\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlInnerHtml)(\"player-level\", `Niveau : ${this.playerLevel}<br>`);\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlInnerHtml)(\"fail\", \"Raté ! Vous revenez au niveau 1\");\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlIdDisplay)(\"success\", \"none\");\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlIdDisplay)(\"fail\", \"inline\");\r\n\r\n\r\n        ///////////////////////////////////////////////////////////////////////////////////:\r\n        ///////////////////////////////////////////////////////////////////////////////////:\r\n        ////////////////////////////////////DUPLICATION ///////////////////////////////////:\r\n        ///////////////////////////////////////////////////////////////////////////////////:\r\n        let byteNumberMax = 1;\r\n        let rand = (0,_external_js__WEBPACK_IMPORTED_MODULE_1__.randNumber)(byteNumberMax);\r\n        let result = rand.toString(2);\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlInnerHtml)(\"binary\", result);\r\n    }\r\n\r\n\r\n\r\n \r\n    //SETTERS AND GETTERS\r\n    setPlayerName() {\r\n        let playerName = document.getElementById(\"player-pseudo\").value;\r\n        this.playerName = playerName;\r\n    }\r\n\r\n    setPseudo(){\r\n        //Display the right field\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlDisplay)(\"intro\", \"inline\");\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlDisplay)(\"game\", \"none\");\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlDisplay)(\"result\", \"none\");\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlValue)(\"player-pseudo\",this.playerName);\r\n        document.getElementById(\"player-pseudo\").classList.remove(\"form-control\");\r\n    }\r\n\r\n    getPlayerName() {\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlInnerHtml)(\"player\", `Pseudo : ${this.playerName}`);\r\n        return `Pseudo : ${this.playerName}<br>`;\r\n    }\r\n\r\n    getLevel() {\r\n        (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlInnerHtml)(\"player-level\", `Niveau : ${this.playerLevel}<br>`);\r\n        return \"player-level\", `Niveau : ${this.playerLevel}<br>`;\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n// INITIALIZATION OF THE GAME\r\n\r\n//Random fill suggested pseudo\r\nGame.pseudoInit();\r\nlet myGame = new Game();\r\n//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ EVENT LISTENER $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  PSEUDO > GAME $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n\r\n\r\n// for setting pseudo into real game transition with myGame instance. \r\n\r\n// Event on click\r\nlet buttonPseudo = document.getElementById(\"intro-button\");\r\nbuttonPseudo.addEventListener('click', () => {\r\n    myGame.setPlayerName();\r\n    myGame.getLevel();\r\n    myGame.initGame()\r\n})\r\n\r\n// Event on enter\r\nlet pseudo = document.getElementById(\"player-pseudo\");\r\npseudo.addEventListener('keypress', function (e) {\r\n    if (e.key === 'Enter') {\r\n        myGame.setPlayerName();\r\n        myGame.getLevel();\r\n        myGame.initGame()\r\n    }\r\n});\r\n\r\n\r\n//**************************EVENT LISTENER******************************//\r\n//**************************   LEVEL UP   ******************************//\r\n\r\n\r\n// Event on click\r\nlet buttonLevelUp = document.getElementById(\"level-up\");\r\nlet binaryGuess = document.getElementById(\"binary-guess\");\r\nbuttonLevelUp.addEventListener('click', () => {\r\n    myGame.guess();\r\n});\r\n\r\n// Event on enter\r\nbinaryGuess.addEventListener('keypress', function (e) {\r\n    if (e.key === 'Enter') {\r\n        myGame.guess();\r\n    }\r\n});\r\n\r\n//**************************EVENT LISTENER******************************//\r\n//**************************   LEVEL UP   ******************************//\r\n\r\n// Event on click\r\nlet setPseudo = document.getElementById(\"set-pseudo\");\r\n\r\nsetPseudo.addEventListener('click', () => {\r\n    myGame.setPseudo();\r\n});\r\n\n\n//# sourceURL=webpack://testjs/./src/Game.js?");

/***/ }),

/***/ "./src/external.js":
/*!*************************!*\
  !*** ./src/external.js ***!
  \*************************/
/*! namespace exports */
/*! export pseudoGenerator [provided] [no usage info] [missing usage info prevents renaming] */
/*! export randArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! export randBinary [provided] [no usage info] [missing usage info prevents renaming] */
/*! export randNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pseudoGenerator\": () => /* binding */ pseudoGenerator,\n/* harmony export */   \"randArray\": () => /* binding */ randArray,\n/* harmony export */   \"randNumber\": () => /* binding */ randNumber,\n/* harmony export */   \"randBinary\": () => /* binding */ randBinary\n/* harmony export */ });\n/* harmony import */ var _htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlMethod.js */ \"./src/htmlMethod.js\");\n;\r\n\r\n/**\r\n * \r\n * @param {Array[String]}:Array\r\n */\r\nfunction randArray(tableau) {\r\n    return Math.floor(Math.random() * Math.floor(tableau.length));\r\n}\r\n\r\n\r\nfunction randNumber(number) {\r\n    return Math.floor(Math.random() * Math.floor(number + 1));\r\n}\r\n\r\n\r\n    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n    //$$$$$$$ Modifer cette partie pour la faire marcher avec le this dans la classe exernal $$$$$$$$\r\n    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\r\n\r\nfunction randBinary() {\r\n    let byteNumberMax = 1;\r\n    if (this.playerLevel == 1) {\r\n        let rand = randNumber(byteNumberMax);\r\n        return rand.toString(2);\r\n    } else {\r\n        byteNumberMax = 2 ** this.playerLevel - 1;\r\n        let rand = randNumber(byteNumberMax);\r\n        return rand.toString(2);\r\n    }\r\n}\r\n\r\n\r\nfunction pseudoGenerator(id) {\r\n    let firstPicks = [\"Super\", \"Ultra\", \"Méga\", \"Hyper\", \"King\", \"King\", \"Capitaine\", \"Général\", \"Docteur\", \"Professeur\", \"The\"];\r\n    let secondPicks = [\"Raccoon\", \"Patate\", \"Lama\", \"Vilain\", \"Navet\", \"Mulot\", \"Licorne\", \"Sanglier\", \"Belette\", \"Marmotte\", \"Singe\", \"Citrouille\", \"Limace\", \"Chenille\", \"Escargot\", \"Chewing-Gum\", \"Proton\", \"Neutron\", \"Electron\", \"Concombre\", \"Méduse\", \"Murène\", \"Poisson\"];\r\n    let result = firstPicks[randArray(firstPicks)] + \"-\" + secondPicks[randArray(secondPicks)];\r\n\r\n    (0,_htmlMethod_js__WEBPACK_IMPORTED_MODULE_0__.setHtmlValue)(id, result);\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://testjs/./src/external.js?");

/***/ }),

/***/ "./src/htmlMethod.js":
/*!***************************!*\
  !*** ./src/htmlMethod.js ***!
  \***************************/
/*! namespace exports */
/*! export getHtmlInnerHtml [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getHtmlValue [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setHtmlDisplay [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setHtmlIdDisplay [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setHtmlInnerHtml [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setHtmlValue [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHtmlInnerHtml\": () => /* binding */ getHtmlInnerHtml,\n/* harmony export */   \"getHtmlValue\": () => /* binding */ getHtmlValue,\n/* harmony export */   \"setHtmlIdDisplay\": () => /* binding */ setHtmlIdDisplay,\n/* harmony export */   \"setHtmlValue\": () => /* binding */ setHtmlValue,\n/* harmony export */   \"setHtmlDisplay\": () => /* binding */ setHtmlDisplay,\n/* harmony export */   \"setHtmlInnerHtml\": () => /* binding */ setHtmlInnerHtml\n/* harmony export */ });\nfunction setHtmlDisplay(className, propertie) {\r\n    let elements = document.getElementsByClassName(className);\r\n    for (let index = 0; index < elements.length; index++) {\r\n        const element = elements[index].style.display = propertie;\r\n    }\r\n}\r\n\r\nfunction setHtmlIdDisplay(id, propertie) {\r\n    let element = document.getElementById(id);\r\n    element.style.display = propertie; \r\n}\r\n\r\n\r\nfunction setHtmlValue(id, content) {\r\n    let input = document.getElementById(id);\r\n    input.value = content;\r\n}\r\n\r\n\r\nfunction setHtmlInnerHtml(id, content) {\r\n    let input = document.getElementById(id);\r\n    input.innerHTML = content;\r\n}\r\n\r\nfunction getHtmlValue(id) {\r\n    let input = document.getElementById(id);\r\n    return input.value;\r\n}\r\nfunction getHtmlInnerHtml(id) {\r\n    let input = document.getElementById(id);\r\n    return input.innerHTML;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://testjs/./src/htmlMethod.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Game.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;