(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{18:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(1),o=n(4),u=n(14),a=n.n(u),c=n(0),i=n.n(c),d=n(19),s=n(12),f=n(15),l=n(3),p=[],m=[null,null];function b(e,t){var n=e[1];return[t.payload,n+1]}function v(e,t,n){Object(f.a)((function(){return e.apply(void 0,t)}),n)}function O(e,t,n,r,o,u,a){e.current=r,t.current=o,n.current=!1,u.current&&(u.current=null,a())}function j(e,t,n,r,o,u,a,c,i,d){if(e){var s=!1,f=null,l=function(){if(!s){var e,n,l=t.getState();try{e=r(l,o.current)}catch(e){n=e,f=e}n||(f=null),e===u.current?a.current||i():(u.current=e,c.current=e,a.current=!0,d({type:"STORE_UPDATED",payload:{error:n}}))}};n.onStateChange=l,n.trySubscribe(),l();return function(){if(s=!0,n.tryUnsubscribe(),n.onStateChange=null,f)throw f}}}var h=function(){return[null,0]};function C(e,t){void 0===t&&(t={});var n=t,u=n.getDisplayName,f=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,C=n.methodName,w=void 0===C?"connectAdvanced":C,y=n.renderCountProp,R=void 0===y?void 0:y,N=n.shouldHandleStateChanges,g=void 0===N||N,S=n.storeKey,x=void 0===S?"store":S,M=(n.withRef,n.forwardRef),E=void 0!==M&&M,B=n.context,D=void 0===B?l.a:B,P=Object(o.a)(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),A=D;return function(t){var n=t.displayName||t.name||"Component",u=f(n),l=Object(r.a)({},P,{getDisplayName:f,methodName:w,renderCountProp:R,shouldHandleStateChanges:g,storeKey:x,displayName:u,wrappedComponentName:n,WrappedComponent:t}),C=P.pure;var y=C?c.useMemo:function(e){return e()};function N(n){var u=Object(c.useMemo)((function(){var e=n.reactReduxForwardedRef,t=Object(o.a)(n,["reactReduxForwardedRef"]);return[n.context,e,t]}),[n]),a=u[0],f=u[1],C=u[2],w=Object(c.useMemo)((function(){return a&&a.Consumer&&Object(d.isContextConsumer)(i.a.createElement(a.Consumer,null))?a:A}),[a,A]),R=Object(c.useContext)(w),N=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch);Boolean(R)&&Boolean(R.store);var S=N?n.store:R.store,x=Object(c.useMemo)((function(){return function(t){return e(t.dispatch,l)}(S)}),[S]),M=Object(c.useMemo)((function(){if(!g)return m;var e=new s.a(S,N?null:R.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[S,N,R]),E=M[0],B=M[1],D=Object(c.useMemo)((function(){return N?R:Object(r.a)({},R,{subscription:E})}),[N,R,E]),P=Object(c.useReducer)(b,p,h),F=P[0][0],H=P[1];if(F&&F.error)throw F.error;var K=Object(c.useRef)(),W=Object(c.useRef)(C),k=Object(c.useRef)(),J=Object(c.useRef)(!1),T=y((function(){return k.current&&C===W.current?k.current:x(S.getState(),C)}),[S,F,C]);v(O,[W,K,J,C,T,k,B]),v(j,[g,S,E,x,W,K,J,k,B,H],[S,E,x]);var U=Object(c.useMemo)((function(){return i.a.createElement(t,Object(r.a)({},T,{ref:f}))}),[f,t,T]);return Object(c.useMemo)((function(){return g?i.a.createElement(w.Provider,{value:D},U):U}),[w,U,D])}var S=C?i.a.memo(N):N;if(S.WrappedComponent=t,S.displayName=u,E){var M=i.a.forwardRef((function(e,t){return i.a.createElement(S,Object(r.a)({},e,{reactReduxForwardedRef:t}))}));return M.displayName=u,M.WrappedComponent=t,a()(M,t)}return a()(S,t)}}}}]);