!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("iU1Pc");function i(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}({form:document.querySelector(".form"),firstDelay:document.querySelector('input[name = "delay"]'),step:document.querySelector('input[name = "step"]'),amount:document.querySelector('input[name = "amount"]'),button:document.querySelector("button")}).form.addEventListener("submit",(function(t){t.preventDefault();for(var n=t.currentTarget.elements,o=n.delay,r=n.step,a=n.amount,c=Number(o.value),l=Number(r.value),d=Number(a.value),f=1;f<=d;f+=1)i(f,c).then((function(t){var n=t.position,o=t.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),c+=l}))}();
//# sourceMappingURL=03-promises.48157223.js.map
