!function(e){function r(r){for(var n,u,a=r[0],i=r[1],l=r[2],p=0,s=[];p<a.length;p++)u=a[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(f&&f(r);s.length;)s.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(n=!1)}n&&(c.splice(r--,1),e=u(u.s=t[0]))}return e}var n={},o={1:0},c=[];function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=r,a=a.slice();for(var l=0;l<a.length;l++)r(a[l]);var f=i;c.push([64,5,12,10,4,3,8,9,6,20,18,15,11,21,19,7,13,17,16,14,0,2]),t()}({5:function(e,r,t){"use strict";t.d(r,"a",(function(){return n})),t.d(r,"c",(function(){return o})),t.d(r,"b",(function(){return c})),t.d(r,"e",(function(){return u})),t.d(r,"d",(function(){return a}));var n="getUsers",o="error",c="empty",u="loading",a="firstCharge"},58:function(e,r,t){},6:function(e,r,t){"use strict";t.d(r,"a",(function(){return n})),t.d(r,"c",(function(){return o})),t.d(r,"b",(function(){return c})),t.d(r,"e",(function(){return u})),t.d(r,"d",(function(){return a}));var n="getPublications",o="publicationsError",c="publicationsEmpty",u="publicationsLoading",a="publicationsFirstCharge"},60:function(e,r,t){},61:function(e,r,t){},62:function(e,r,t){},63:function(e,r,t){},64:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),c=t(20),u=t.n(c),a=t(10),i=t(15),l=t(42),f=(t(57),t(5));function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){b(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d={users:[],error:!1,empty:!1,loading:!0,firstCharge:!0},y=t(6);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){j(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var v={publications:[],error:!1,empty:!1,loading:!0,firstCharge:[]},h=Object(a.c)({usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case f.a:return s(s({},e),{},{users:r.payload});case f.d:return s(s({},e),{},{firstCharge:r.payload});case f.c:return s(s({},e),{},{error:r.payload});case f.b:return s(s({},e),{},{empty:r.payload});case f.e:return s(s({},e),{},{loading:r.payload});default:return e}},publicationsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case y.a:return g(g({},e),{},{publications:r.payload});case y.c:return g(g({},e),{},{error:r.payload});case y.b:return g(g({},e),{},{empty:r.payload});case y.e:return g(g({},e),{},{loading:r.payload});case y.d:return g(g({},e),{},{firstCharge:r.payload});default:return e}}}),P=t(47),w=Object(a.d)(h,{},Object(a.a)(l.a));u.a.render(o.a.createElement(i.a,{store:w},o.a.createElement(P.a,null)),document.getElementById("root"))}});