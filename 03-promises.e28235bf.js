!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),a={form:document.querySelector(".form"),delayArea:document.querySelector('input[name="delay"]'),stepArea:document.querySelector('input[name="step"]'),amountArea:document.querySelector('input[name="amount"]')};function i(n,t){new Promise((function(e,o){setTimeout((function(){var r=Math.random()>.3,u={pos:n+1,del:t};r?e(u):o(u)}),t)})).then((function(n){e(u).Notify.success("Fulfilled promise ".concat(n.pos," in ").concat(n.del,"ms"))})).catch((function(n){e(u).Notify.failure("Rejected promise ".concat(n.pos," in ").concat(n.del,"ms"))}))}a.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=0;n<Number(a.amountArea.value);n+=1)i(n,Number(a.delayArea.value)+Number(a.stepArea.value)*n)}))}();
//# sourceMappingURL=03-promises.e28235bf.js.map