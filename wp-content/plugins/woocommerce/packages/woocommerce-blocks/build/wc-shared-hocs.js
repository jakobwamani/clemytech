<<<<<<< HEAD
this.wc=this.wc||{},this.wc.wcSharedHocs=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=172)}({0:function(t,e){!function(){t.exports=this.wp.element}()},13:function(t,e,r){var n=r(22),o=r(23),u=r(19),c=r(24);t.exports=function(t,e){return n(t)||o(t,e)||u(t,e)||c()},t.exports.default=t.exports,t.exports.__esModule=!0},16:function(t,e){function r(){return t.exports=r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},t.exports.default=t.exports,t.exports.__esModule=!0,r.apply(this,arguments)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},172:function(t,e,r){"use strict";r.r(e),r.d(e,"withProductDataContext",(function(){return b}));var n=r(16),o=r.n(n),u=r(25),c=r.n(u),i=r(13),a=r.n(i),s=r(0),f=r(3),l=r.n(f),p=r(8),d=r.n(p),x=r(31),y=function(t){var e=t.productId,r=t.OriginalComponent,n=Object(s.useState)(null),o=a()(n,2),u=o[0],i=o[1],f=Object(s.useState)(!0),p=a()(f,2),y=p[0],b=p[1];return Object(s.useEffect)((function(){t.product&&(i(t.product),b(!1))}),[t.product]),Object(s.useEffect)((function(){e>0&&(b(!0),d()({path:"/wc/store/products/".concat(e)}).then((function(t){i(t)})).catch(c()(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(null);case 1:case"end":return t.stop()}}),t)})))).finally((function(){b(!1)})))}),[e]),y||u?Object(s.createElement)(x.ProductDataContextProvider,{product:u,isLoading:y},Object(s.createElement)(r,t)):null},b=function(t){return function(e){var r=Object(x.useProductDataContext)();return e.product||!r.hasContext?Object(s.createElement)(y,o()({},e,{OriginalComponent:t})):Object(s.createElement)(t,e)}}},19:function(t,e,r){var n=r(20);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},20:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},22:function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},23:function(t,e){t.exports=function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,o,u=[],c=!0,i=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(u.push(n.value),!e||u.length!==e);c=!0);}catch(t){i=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return u}},t.exports.default=t.exports,t.exports.__esModule=!0},24:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},25:function(t,e){function r(t,e,r,n,o,u,c){try{var i=t[u](c),a=i.value}catch(t){return void r(t)}i.done?e(a):Promise.resolve(a).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,u){var c=t.apply(e,n);function i(t){r(c,o,u,i,a,"next",t)}function a(t){r(c,o,u,i,a,"throw",t)}i(void 0)}))}},t.exports.default=t.exports,t.exports.__esModule=!0},3:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},31:function(t,e){!function(){t.exports=this.wc.wcSharedContext}()},8:function(t,e){!function(){t.exports=this.wp.apiFetch}()}});
=======
this.wc=this.wc||{},this.wc.wcSharedHocs=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=37)}([function(t,n){!function(){t.exports=this.regeneratorRuntime}()},,function(t,n){!function(){t.exports=this.wp.element}()},,,,function(t,n){!function(){t.exports=this.wp.apiFetch}()},,,,function(t,n,e){var r=e(17),o=e(18),u=e(13),c=e(19);t.exports=function(t,n){return r(t)||o(t,n)||u(t,n)||c()}},,,function(t,n,e){var r=e(14);t.exports=function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}},function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}},,,function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},function(t,n){t.exports=function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,u=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return e}}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(t,n){!function(){t.exports=this.wc.wcSharedContext}()},,,function(t,n){function e(){return t.exports=e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},e.apply(this,arguments)}t.exports=e},function(t,n){function e(t,n,e,r,o,u,c){try{var i=t[u](c),a=i.value}catch(t){return void e(t)}i.done?n(a):Promise.resolve(a).then(r,o)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise((function(o,u){var c=t.apply(n,r);function i(t){e(c,o,u,i,a,"next",t)}function a(t){e(c,o,u,i,a,"throw",t)}i(void 0)}))}}},,,,,,,,,,,,function(t,n,e){"use strict";e.r(n),e.d(n,"withProductDataContext",(function(){return v}));var r=e(24),o=e.n(r),u=e(0),c=e.n(u),i=e(25),a=e.n(i),f=e(10),l=e.n(f),s=e(2),p=e(6),d=e.n(p),y=e(21),b=function(t){var n=t.productId,e=t.OriginalComponent,r=Object(s.useState)(null),o=l()(r,2),u=o[0],i=o[1],f=Object(s.useState)(!0),p=l()(f,2),b=p[0],v=p[1];return Object(s.useEffect)((function(){t.product&&(i(t.product),v(!1))}),[t.product]),Object(s.useEffect)((function(){n>0&&(v(!0),d()({path:"/wc/store/products/".concat(n)}).then((function(t){i(t)})).catch(a()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(null);case 1:case"end":return t.stop()}}),t)})))).finally((function(){v(!1)})))}),[n]),b||u?Object(s.createElement)(y.ProductDataContextProvider,{product:u,isLoading:b},Object(s.createElement)(e,t)):null},v=function(t){return function(n){var e=Object(y.useProductDataContext)();return n.product||!e.hasContext?Object(s.createElement)(b,o()({},n,{OriginalComponent:t})):Object(s.createElement)(t,n)}}}]);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
