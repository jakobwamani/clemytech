<<<<<<< HEAD
(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[11],{146:function(t,e,c){"use strict";var n=c(0),r=c(108),o=c(92),a=function(t){var e=t.indexOf("</p>");return-1===e?t:t.substr(0,e+4)},u=function(t){return t.replace(/<\/?[a-z][^>]*?>/gi,"")},s=function(t,e){return t.replace(/[\s|\.\,]+$/i,"")+e},i=function(t,e){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"&hellip;",n=u(t),r=n.split(" ").splice(0,e).join(" ");return Object(o.autop)(s(r,c))},l=function(t,e){var c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&hellip;",r=u(t),a=r.slice(0,e);if(c)return Object(o.autop)(s(a,n));var i=a.match(/([\s]+)/g),l=i?i.length:0,p=r.slice(0,e+l);return Object(o.autop)(s(p,n))};e.a=function(t){var e=t.source,c=t.maxLength,u=void 0===c?15:c,s=t.countType,p=void 0===s?"words":s,d=t.className,m=void 0===d?"":d,v=Object(n.useMemo)((function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"words",n=Object(o.autop)(t),u=Object(r.count)(n,c);if(u<=e)return n;var s=a(n),p=Object(r.count)(s,c);return p<=e?s:"words"===c?i(s,e):l(s,e,"characters_including_spaces"===c)}(e,u,p)}),[e,u,p]);return React.createElement(n.RawHTML,{className:m},v)}},302:function(t,e){},312:function(t,e,c){"use strict";c.r(e);var n=c(7),r=c.n(n),o=(c(3),c(4)),a=c.n(o),u=c(146),s=c(12),i=c(84),l=c(211);c(302);e.default=Object(l.withProductDataContext)((function(t){var e=t.className,c=Object(i.useInnerBlockLayoutContext)().parentClassName,n=Object(i.useProductDataContext)().product;if(!n)return React.createElement("div",{className:a()(e,"wc-block-components-product-summary",r()({},"".concat(c,"__product-summary"),c))});var o=n.short_description?n.short_description:n.description;return o?React.createElement(u.a,{className:a()(e,"wc-block-components-product-summary",r()({},"".concat(c,"__product-summary"),c)),source:o,maxLength:150,countType:s.k.wordCountType||"words"}):null}))}}]);
=======
(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[11],{148:function(t,e,n){"use strict";var c=n(0),r=n(104),o=n(88),a=function(t){var e=t.indexOf("</p>");return-1===e?t:t.substr(0,e+4)},u=function(t){return t.replace(/<\/?[a-z][^>]*?>/gi,"")},s=function(t,e){return t.replace(/[\s|\.\,]+$/i,"")+e},i=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"&hellip;",c=u(t),r=c.split(" ").splice(0,e).join(" ");return Object(o.autop)(s(r,n))},l=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&hellip;",r=u(t),a=r.slice(0,e);if(n)return Object(o.autop)(s(a,c));var i=a.match(/([\s]+)/g),l=i?i.length:0,p=r.slice(0,e+l);return Object(o.autop)(s(p,c))};e.a=function(t){var e=t.source,n=t.maxLength,u=void 0===n?15:n,s=t.countType,p=void 0===s?"words":s,d=t.className,m=void 0===d?"":d,v=Object(c.useMemo)((function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"words",c=Object(o.autop)(t),u=Object(r.count)(c,n);if(u<=e)return c;var s=a(c),p=Object(r.count)(s,n);return p<=e?s:"words"===n?i(s,e):l(s,e,"characters_including_spaces"===n)}(e,u,p)}),[e,u,p]);return React.createElement(c.RawHTML,{className:m},v)}},308:function(t,e){},318:function(t,e,n){"use strict";n.r(e);var c=n(7),r=n.n(c),o=(n(3),n(5)),a=n.n(o),u=n(148),s=n(4),i=n(79),l=n(206);n(308);e.default=Object(l.withProductDataContext)((function(t){var e=t.className,n=Object(i.useInnerBlockLayoutContext)().parentClassName,c=Object(i.useProductDataContext)().product;if(!c)return React.createElement("div",{className:a()(e,"wc-block-components-product-summary",r()({},"".concat(n,"__product-summary"),n))});var o=c.short_description?c.short_description:c.description;if(!o)return null;var l=Object(s.getSetting)("wordCountType","words");return React.createElement(u.a,{className:a()(e,"wc-block-components-product-summary",r()({},"".concat(n,"__product-summary"),n)),source:o,maxLength:150,countType:l})}))}}]);
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3