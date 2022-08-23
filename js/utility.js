"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.getValue = void 0;
function getInput(elementId) {
    let input = document.getElementById(elementId);
    console.log(input.value);
    return input.value;
}
exports.getValue = getInput;
function logger(message) {
    console.log(message);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map