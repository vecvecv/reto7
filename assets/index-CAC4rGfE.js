function iy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yp={exports:{}},al={},wp={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ds=Symbol.for("react.element"),oy=Symbol.for("react.portal"),ly=Symbol.for("react.fragment"),ay=Symbol.for("react.strict_mode"),uy=Symbol.for("react.profiler"),cy=Symbol.for("react.provider"),dy=Symbol.for("react.context"),hy=Symbol.for("react.forward_ref"),fy=Symbol.for("react.suspense"),py=Symbol.for("react.memo"),my=Symbol.for("react.lazy"),Hd=Symbol.iterator;function gy(t){return t===null||typeof t!="object"?null:(t=Hd&&t[Hd]||t["@@iterator"],typeof t=="function"?t:null)}var Ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cp=Object.assign,Sp={};function Vr(t,e,n){this.props=t,this.context=e,this.refs=Sp,this.updater=n||Ep}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ip(){}Ip.prototype=Vr.prototype;function Ju(t,e,n){this.props=t,this.context=e,this.refs=Sp,this.updater=n||Ep}var Xu=Ju.prototype=new Ip;Xu.constructor=Ju;Cp(Xu,Vr.prototype);Xu.isPureReactComponent=!0;var $d=Array.isArray,Tp=Object.prototype.hasOwnProperty,Zu={current:null},kp={key:!0,ref:!0,__self:!0,__source:!0};function Rp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tp.call(e,r)&&!kp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ds,type:t,key:s,ref:o,props:i,_owner:Zu.current}}function _y(t,e){return{$$typeof:ds,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ec(t){return typeof t=="object"&&t!==null&&t.$$typeof===ds}function vy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gd=/\/+/g;function Vl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vy(""+t.key):e.toString(36)}function Qs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ds:case oy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vl(o,0):r,$d(i)?(n="",t!=null&&(n=t.replace(Gd,"$&/")+"/"),Qs(i,e,n,"",function(u){return u})):i!=null&&(ec(i)&&(i=_y(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$d(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Vl(s,l);o+=Qs(s,e,n,a,i)}else if(a=gy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Vl(s,l++),o+=Qs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ps(t,e,n){if(t==null)return t;var r=[],i=0;return Qs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function yy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ne={current:null},Ys={transition:null},wy={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Ys,ReactCurrentOwner:Zu};j.Children={map:Ps,forEach:function(t,e,n){Ps(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ps(t,function(){e++}),e},toArray:function(t){return Ps(t,function(e){return e})||[]},only:function(t){if(!ec(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=Vr;j.Fragment=ly;j.Profiler=uy;j.PureComponent=Ju;j.StrictMode=ay;j.Suspense=fy;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Cp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Tp.call(e,a)&&!kp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ds,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:dy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cy,_context:t},t.Consumer=t};j.createElement=Rp;j.createFactory=function(t){var e=Rp.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:hy,render:t}};j.isValidElement=ec;j.lazy=function(t){return{$$typeof:my,_payload:{_status:-1,_result:t},_init:yy}};j.memo=function(t,e){return{$$typeof:py,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=Ys.transition;Ys.transition={};try{t()}finally{Ys.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return Ne.current.useCallback(t,e)};j.useContext=function(t){return Ne.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return Ne.current.useDeferredValue(t)};j.useEffect=function(t,e){return Ne.current.useEffect(t,e)};j.useId=function(){return Ne.current.useId()};j.useImperativeHandle=function(t,e,n){return Ne.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return Ne.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return Ne.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return Ne.current.useMemo(t,e)};j.useReducer=function(t,e,n){return Ne.current.useReducer(t,e,n)};j.useRef=function(t){return Ne.current.useRef(t)};j.useState=function(t){return Ne.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return Ne.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return Ne.current.useTransition()};j.version="18.2.0";wp.exports=j;var I=wp.exports;const Ey=sy(I),Cy=iy({__proto__:null,default:Ey},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=I,Iy=Symbol.for("react.element"),Ty=Symbol.for("react.fragment"),ky=Object.prototype.hasOwnProperty,Ry=Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ny={key:!0,ref:!0,__self:!0,__source:!0};function Np(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ky.call(e,r)&&!Ny.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Iy,type:t,key:s,ref:o,props:i,_owner:Ry.current}}al.Fragment=Ty;al.jsx=Np;al.jsxs=Np;yp.exports=al;var C=yp.exports,xa={},Pp={exports:{}},He={},xp={exports:{}},Op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,D){var L=R.length;R.push(D);e:for(;0<L;){var re=L-1>>>1,ce=R[re];if(0<i(ce,D))R[re]=D,R[L]=ce,L=re;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var D=R[0],L=R.pop();if(L!==D){R[0]=L;e:for(var re=0,ce=R.length,Rs=ce>>>1;re<Rs;){var Sn=2*(re+1)-1,Bl=R[Sn],In=Sn+1,Ns=R[In];if(0>i(Bl,L))In<ce&&0>i(Ns,Bl)?(R[re]=Ns,R[In]=L,re=In):(R[re]=Bl,R[Sn]=L,re=Sn);else if(In<ce&&0>i(Ns,L))R[re]=Ns,R[In]=L,re=In;else break e}}return D}function i(R,D){var L=R.sortIndex-D.sortIndex;return L!==0?L:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=R)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function y(R){if(v=!1,m(R),!_)if(n(a)!==null)_=!0,zl(T);else{var D=n(u);D!==null&&Wl(y,D.startTime-R)}}function T(R,D){_=!1,v&&(v=!1,p(x),x=-1),g=!0;var L=h;try{for(m(D),c=n(a);c!==null&&(!(c.expirationTime>D)||R&&!Xe());){var re=c.callback;if(typeof re=="function"){c.callback=null,h=c.priorityLevel;var ce=re(c.expirationTime<=D);D=t.unstable_now(),typeof ce=="function"?c.callback=ce:c===n(a)&&r(a),m(D)}else r(a);c=n(a)}if(c!==null)var Rs=!0;else{var Sn=n(u);Sn!==null&&Wl(y,Sn.startTime-D),Rs=!1}return Rs}finally{c=null,h=L,g=!1}}var N=!1,P=null,x=-1,K=5,F=-1;function Xe(){return!(t.unstable_now()-F<K)}function ei(){if(P!==null){var R=t.unstable_now();F=R;var D=!0;try{D=P(!0,R)}finally{D?ti():(N=!1,P=null)}}else N=!1}var ti;if(typeof f=="function")ti=function(){f(ei)};else if(typeof MessageChannel<"u"){var Vd=new MessageChannel,ry=Vd.port2;Vd.port1.onmessage=ei,ti=function(){ry.postMessage(null)}}else ti=function(){w(ei,0)};function zl(R){P=R,N||(N=!0,ti())}function Wl(R,D){x=w(function(){R(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,zl(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return R()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=h;h=R;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(R,D,L){var re=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?re+L:re):L=re,R){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=L+ce,R={id:d++,callback:D,priorityLevel:R,startTime:L,expirationTime:ce,sortIndex:-1},L>re?(R.sortIndex=L,e(u,R),n(a)===null&&R===n(u)&&(v?(p(x),x=-1):v=!0,Wl(y,L-re))):(R.sortIndex=ce,e(a,R),_||g||(_=!0,zl(T))),R},t.unstable_shouldYield=Xe,t.unstable_wrapCallback=function(R){var D=h;return function(){var L=h;h=D;try{return R.apply(this,arguments)}finally{h=L}}}})(Op);xp.exports=Op;var Py=xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap=I,Ve=Py;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dp=new Set,Li={};function Yn(t,e){Or(t,e),Or(t+"Capture",e)}function Or(t,e){for(Li[t]=e,t=0;t<e.length;t++)Dp.add(e[t])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=Object.prototype.hasOwnProperty,xy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kd={},qd={};function Oy(t){return Oa.call(qd,t)?!0:Oa.call(Kd,t)?!1:xy.test(t)?qd[t]=!0:(Kd[t]=!0,!1)}function Ay(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dy(t,e,n,r){if(e===null||typeof e>"u"||Ay(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Pe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Pe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Pe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Pe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Pe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Pe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Pe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Pe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Pe(t,5,!1,t.toLowerCase(),null,!1,!1)});var tc=/[\-:]([a-z])/g;function nc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tc,nc);ye[e]=new Pe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tc,nc);ye[e]=new Pe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tc,nc);ye[e]=new Pe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Pe(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Pe(t,1,!1,t.toLowerCase(),null,!0,!0)});function rc(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dy(e,n,i,r)&&(n=null),r||i===null?Oy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ft=Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xs=Symbol.for("react.element"),ir=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Lp=Symbol.for("react.provider"),Mp=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),La=Symbol.for("react.suspense_list"),oc=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),bp=Symbol.for("react.offscreen"),Qd=Symbol.iterator;function ni(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,Hl;function pi(t){if(Hl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hl=e&&e[1]||""}return`
`+Hl+t}var $l=!1;function Gl(t,e){if(!t||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pi(t):""}function Ly(t){switch(t.tag){case 5:return pi(t.type);case 16:return pi("Lazy");case 13:return pi("Suspense");case 19:return pi("SuspenseList");case 0:case 2:case 15:return t=Gl(t.type,!1),t;case 11:return t=Gl(t.type.render,!1),t;case 1:return t=Gl(t.type,!0),t;default:return""}}function Ma(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case sr:return"Fragment";case ir:return"Portal";case Aa:return"Profiler";case ic:return"StrictMode";case Da:return"Suspense";case La:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mp:return(t.displayName||"Context")+".Consumer";case Lp:return(t._context.displayName||"Context")+".Provider";case sc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oc:return e=t.displayName||null,e!==null?e:Ma(t.type)||"Memo";case Bt:e=t._payload,t=t._init;try{return Ma(t(e))}catch{}}return null}function My(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ma(e);case 8:return e===ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function by(t){var e=Fp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Os(t){t._valueTracker||(t._valueTracker=by(t))}function Up(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Fp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ba(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jp(t,e){e=e.checked,e!=null&&rc(t,"checked",e,!1)}function Fa(t,e){jp(t,e);var n=fn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ua(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ua(t,e.type,fn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ua(t,e,n){(e!=="number"||fo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var mi=Array.isArray;function vr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ja(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(mi(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fn(n)}}function zp(t,e){var n=fn(e.value),r=fn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function za(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var As,Bp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(As=As||document.createElement("div"),As.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=As.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fy=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(t){Fy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wi[e]=wi[t]})});function Vp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wi.hasOwnProperty(t)&&wi[t]?(""+e).trim():e+"px"}function Hp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Uy=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wa(t,e){if(e){if(Uy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Ba(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Va=null;function lc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ha=null,yr=null,wr=null;function eh(t){if(t=ps(t)){if(typeof Ha!="function")throw Error(E(280));var e=t.stateNode;e&&(e=fl(e),Ha(t.stateNode,t.type,e))}}function $p(t){yr?wr?wr.push(t):wr=[t]:yr=t}function Gp(){if(yr){var t=yr,e=wr;if(wr=yr=null,eh(t),e)for(t=0;t<e.length;t++)eh(e[t])}}function Kp(t,e){return t(e)}function qp(){}var Kl=!1;function Qp(t,e,n){if(Kl)return t(e,n);Kl=!0;try{return Kp(t,e,n)}finally{Kl=!1,(yr!==null||wr!==null)&&(qp(),Gp())}}function bi(t,e){var n=t.stateNode;if(n===null)return null;var r=fl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var $a=!1;if(xt)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){$a=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{$a=!1}function jy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ei=!1,po=null,mo=!1,Ga=null,zy={onError:function(t){Ei=!0,po=t}};function Wy(t,e,n,r,i,s,o,l,a){Ei=!1,po=null,jy.apply(zy,arguments)}function By(t,e,n,r,i,s,o,l,a){if(Wy.apply(this,arguments),Ei){if(Ei){var u=po;Ei=!1,po=null}else throw Error(E(198));mo||(mo=!0,Ga=u)}}function Jn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function th(t){if(Jn(t)!==t)throw Error(E(188))}function Vy(t){var e=t.alternate;if(!e){if(e=Jn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return th(i),t;if(s===r)return th(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Jp(t){return t=Vy(t),t!==null?Xp(t):null}function Xp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xp(t);if(e!==null)return e;t=t.sibling}return null}var Zp=Ve.unstable_scheduleCallback,nh=Ve.unstable_cancelCallback,Hy=Ve.unstable_shouldYield,$y=Ve.unstable_requestPaint,ie=Ve.unstable_now,Gy=Ve.unstable_getCurrentPriorityLevel,ac=Ve.unstable_ImmediatePriority,em=Ve.unstable_UserBlockingPriority,go=Ve.unstable_NormalPriority,Ky=Ve.unstable_LowPriority,tm=Ve.unstable_IdlePriority,ul=null,mt=null;function qy(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ul,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Jy,Qy=Math.log,Yy=Math.LN2;function Jy(t){return t>>>=0,t===0?32:31-(Qy(t)/Yy|0)|0}var Ds=64,Ls=4194304;function gi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _o(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=gi(l):(s&=o,s!==0&&(r=gi(s)))}else o=n&~i,o!==0?r=gi(o):s!==0&&(r=gi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ot(e),i=1<<n,r|=t[n],e&=~i;return r}function Xy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ot(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Xy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ka(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nm(){var t=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),t}function ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function hs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ot(e),t[e]=n}function e0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function uc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function rm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var im,cc,sm,om,lm,qa=!1,Ms=[],Zt=null,en=null,tn=null,Fi=new Map,Ui=new Map,Ht=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rh(t,e){switch(t){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Fi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(e.pointerId)}}function ii(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ps(e),e!==null&&cc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function n0(t,e,n,r,i){switch(e){case"focusin":return Zt=ii(Zt,t,e,n,r,i),!0;case"dragenter":return en=ii(en,t,e,n,r,i),!0;case"mouseover":return tn=ii(tn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fi.set(s,ii(Fi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ui.set(s,ii(Ui.get(s)||null,t,e,n,r,i)),!0}return!1}function am(t){var e=Pn(t.target);if(e!==null){var n=Jn(e);if(n!==null){if(e=n.tag,e===13){if(e=Yp(n),e!==null){t.blockedOn=e,lm(t.priority,function(){sm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Js(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Va=r,n.target.dispatchEvent(r),Va=null}else return e=ps(n),e!==null&&cc(e),t.blockedOn=n,!1;e.shift()}return!0}function ih(t,e,n){Js(t)&&n.delete(e)}function r0(){qa=!1,Zt!==null&&Js(Zt)&&(Zt=null),en!==null&&Js(en)&&(en=null),tn!==null&&Js(tn)&&(tn=null),Fi.forEach(ih),Ui.forEach(ih)}function si(t,e){t.blockedOn===e&&(t.blockedOn=null,qa||(qa=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,r0)))}function ji(t){function e(i){return si(i,t)}if(0<Ms.length){si(Ms[0],t);for(var n=1;n<Ms.length;n++){var r=Ms[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zt!==null&&si(Zt,t),en!==null&&si(en,t),tn!==null&&si(tn,t),Fi.forEach(e),Ui.forEach(e),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)am(n),n.blockedOn===null&&Ht.shift()}var Er=Ft.ReactCurrentBatchConfig,vo=!0;function i0(t,e,n,r){var i=B,s=Er.transition;Er.transition=null;try{B=1,dc(t,e,n,r)}finally{B=i,Er.transition=s}}function s0(t,e,n,r){var i=B,s=Er.transition;Er.transition=null;try{B=4,dc(t,e,n,r)}finally{B=i,Er.transition=s}}function dc(t,e,n,r){if(vo){var i=Qa(t,e,n,r);if(i===null)ia(t,e,r,yo,n),rh(t,r);else if(n0(i,t,e,n,r))r.stopPropagation();else if(rh(t,r),e&4&&-1<t0.indexOf(t)){for(;i!==null;){var s=ps(i);if(s!==null&&im(s),s=Qa(t,e,n,r),s===null&&ia(t,e,r,yo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ia(t,e,r,null,n)}}var yo=null;function Qa(t,e,n,r){if(yo=null,t=lc(r),t=Pn(t),t!==null)if(e=Jn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yo=t,null}function um(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gy()){case ac:return 1;case em:return 4;case go:case Ky:return 16;case tm:return 536870912;default:return 16}default:return 16}}var Yt=null,hc=null,Xs=null;function cm(){if(Xs)return Xs;var t,e=hc,n=e.length,r,i="value"in Yt?Yt.value:Yt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xs=i.slice(t,1<r?1-r:void 0)}function Zs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bs(){return!0}function sh(){return!1}function $e(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bs:sh,this.isPropagationStopped=sh,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),e}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=$e(Hr),fs=ee({},Hr,{view:0,detail:0}),o0=$e(fs),Ql,Yl,oi,cl=ee({},fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oi&&(oi&&t.type==="mousemove"?(Ql=t.screenX-oi.screenX,Yl=t.screenY-oi.screenY):Yl=Ql=0,oi=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),oh=$e(cl),l0=ee({},cl,{dataTransfer:0}),a0=$e(l0),u0=ee({},fs,{relatedTarget:0}),Jl=$e(u0),c0=ee({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=$e(c0),h0=ee({},Hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f0=$e(h0),p0=ee({},Hr,{data:0}),lh=$e(p0),m0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_0[t])?!!e[t]:!1}function pc(){return v0}var y0=ee({},fs,{key:function(t){if(t.key){var e=m0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(t){return t.type==="keypress"?Zs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w0=$e(y0),E0=ee({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=$e(E0),C0=ee({},fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),S0=$e(C0),I0=ee({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),T0=$e(I0),k0=ee({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=$e(k0),N0=[9,13,27,32],mc=xt&&"CompositionEvent"in window,Ci=null;xt&&"documentMode"in document&&(Ci=document.documentMode);var P0=xt&&"TextEvent"in window&&!Ci,dm=xt&&(!mc||Ci&&8<Ci&&11>=Ci),uh=" ",ch=!1;function hm(t,e){switch(t){case"keyup":return N0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var or=!1;function x0(t,e){switch(t){case"compositionend":return fm(e);case"keypress":return e.which!==32?null:(ch=!0,uh);case"textInput":return t=e.data,t===uh&&ch?null:t;default:return null}}function O0(t,e){if(or)return t==="compositionend"||!mc&&hm(t,e)?(t=cm(),Xs=hc=Yt=null,or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dm&&e.locale!=="ko"?null:e.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!A0[t.type]:e==="textarea"}function pm(t,e,n,r){$p(r),e=wo(e,"onChange"),0<e.length&&(n=new fc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Si=null,zi=null;function D0(t){Tm(t,0)}function dl(t){var e=ur(t);if(Up(e))return t}function L0(t,e){if(t==="change")return e}var mm=!1;if(xt){var Xl;if(xt){var Zl="oninput"in document;if(!Zl){var hh=document.createElement("div");hh.setAttribute("oninput","return;"),Zl=typeof hh.oninput=="function"}Xl=Zl}else Xl=!1;mm=Xl&&(!document.documentMode||9<document.documentMode)}function fh(){Si&&(Si.detachEvent("onpropertychange",gm),zi=Si=null)}function gm(t){if(t.propertyName==="value"&&dl(zi)){var e=[];pm(e,zi,t,lc(t)),Qp(D0,e)}}function M0(t,e,n){t==="focusin"?(fh(),Si=e,zi=n,Si.attachEvent("onpropertychange",gm)):t==="focusout"&&fh()}function b0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(zi)}function F0(t,e){if(t==="click")return dl(e)}function U0(t,e){if(t==="input"||t==="change")return dl(e)}function j0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ut=typeof Object.is=="function"?Object.is:j0;function Wi(t,e){if(ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oa.call(e,i)||!ut(t[i],e[i]))return!1}return!0}function ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mh(t,e){var n=ph(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ph(n)}}function _m(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_m(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vm(){for(var t=window,e=fo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fo(t.document)}return e}function gc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function z0(t){var e=vm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_m(n.ownerDocument.documentElement,n)){if(r!==null&&gc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=mh(n,s);var o=mh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var W0=xt&&"documentMode"in document&&11>=document.documentMode,lr=null,Ya=null,Ii=null,Ja=!1;function gh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ja||lr==null||lr!==fo(r)||(r=lr,"selectionStart"in r&&gc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ii&&Wi(Ii,r)||(Ii=r,r=wo(Ya,"onSelect"),0<r.length&&(e=new fc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=lr)))}function Fs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ar={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionend:Fs("Transition","TransitionEnd")},ea={},ym={};xt&&(ym=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function hl(t){if(ea[t])return ea[t];if(!ar[t])return t;var e=ar[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ym)return ea[t]=e[n];return t}var wm=hl("animationend"),Em=hl("animationiteration"),Cm=hl("animationstart"),Sm=hl("transitionend"),Im=new Map,_h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(t,e){Im.set(t,e),Yn(e,[t])}for(var ta=0;ta<_h.length;ta++){var na=_h[ta],B0=na.toLowerCase(),V0=na[0].toUpperCase()+na.slice(1);_n(B0,"on"+V0)}_n(wm,"onAnimationEnd");_n(Em,"onAnimationIteration");_n(Cm,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(Sm,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(_i));function vh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,By(r,e,void 0,t),t.currentTarget=null}function Tm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;vh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;vh(i,l,u),s=a}}}if(mo)throw t=Ga,mo=!1,Ga=null,t}function q(t,e){var n=e[nu];n===void 0&&(n=e[nu]=new Set);var r=t+"__bubble";n.has(r)||(km(e,t,2,!1),n.add(r))}function ra(t,e,n){var r=0;e&&(r|=4),km(n,t,r,e)}var Us="_reactListening"+Math.random().toString(36).slice(2);function Bi(t){if(!t[Us]){t[Us]=!0,Dp.forEach(function(n){n!=="selectionchange"&&(H0.has(n)||ra(n,!1,t),ra(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Us]||(e[Us]=!0,ra("selectionchange",!1,e))}}function km(t,e,n,r){switch(um(e)){case 1:var i=i0;break;case 4:i=s0;break;default:i=dc}n=i.bind(null,e,n,t),i=void 0,!$a||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ia(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Qp(function(){var u=s,d=lc(n),c=[];e:{var h=Im.get(t);if(h!==void 0){var g=fc,_=t;switch(t){case"keypress":if(Zs(n)===0)break e;case"keydown":case"keyup":g=w0;break;case"focusin":_="focus",g=Jl;break;case"focusout":_="blur",g=Jl;break;case"beforeblur":case"afterblur":g=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=a0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=S0;break;case wm:case Em:case Cm:g=d0;break;case Sm:g=T0;break;case"scroll":g=o0;break;case"wheel":g=R0;break;case"copy":case"cut":case"paste":g=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ah}var v=(e&4)!==0,w=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=bi(f,p),y!=null&&v.push(Vi(f,y,m)))),w)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Va&&(_=n.relatedTarget||n.fromElement)&&(Pn(_)||_[Ot]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Pn(_):null,_!==null&&(w=Jn(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=oh,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=ah,y="onPointerLeave",p="onPointerEnter",f="pointer"),w=g==null?h:ur(g),m=_==null?h:ur(_),h=new v(y,f+"leave",g,n,d),h.target=w,h.relatedTarget=m,y=null,Pn(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=w,y=v),w=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=nr(m))f++;for(m=0,y=p;y;y=nr(y))m++;for(;0<f-m;)v=nr(v),f--;for(;0<m-f;)p=nr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=nr(v),p=nr(p)}v=null}else v=null;g!==null&&yh(c,h,g,v,!1),_!==null&&w!==null&&yh(c,w,_,v,!0)}}e:{if(h=u?ur(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=L0;else if(dh(h))if(mm)T=U0;else{T=b0;var N=M0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=F0);if(T&&(T=T(t,u))){pm(c,T,n,d);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Ua(h,"number",h.value)}switch(N=u?ur(u):window,t){case"focusin":(dh(N)||N.contentEditable==="true")&&(lr=N,Ya=u,Ii=null);break;case"focusout":Ii=Ya=lr=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,gh(c,n,d);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":gh(c,n,d)}var P;if(mc)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else or?hm(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(dm&&n.locale!=="ko"&&(or||x!=="onCompositionStart"?x==="onCompositionEnd"&&or&&(P=cm()):(Yt=d,hc="value"in Yt?Yt.value:Yt.textContent,or=!0)),N=wo(u,x),0<N.length&&(x=new lh(x,t,null,n,d),c.push({event:x,listeners:N}),P?x.data=P:(P=fm(n),P!==null&&(x.data=P)))),(P=P0?x0(t,n):O0(t,n))&&(u=wo(u,"onBeforeInput"),0<u.length&&(d=new lh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=P))}Tm(c,e)})}function Vi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bi(t,n),s!=null&&r.unshift(Vi(t,s,i)),s=bi(t,e),s!=null&&r.push(Vi(t,s,i))),t=t.return}return r}function nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=bi(n,s),a!=null&&o.unshift(Vi(n,a,l))):i||(a=bi(n,s),a!=null&&o.push(Vi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $0=/\r\n?/g,G0=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace($0,`
`).replace(G0,"")}function js(t,e,n){if(e=wh(e),wh(t)!==e&&n)throw Error(E(425))}function Eo(){}var Xa=null,Za=null;function eu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(t){return Eh.resolve(null).then(t).catch(Q0)}:tu;function Q0(t){setTimeout(function(){throw t})}function sa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ji(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ji(e)}function nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ch(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $r=Math.random().toString(36).slice(2),ft="__reactFiber$"+$r,Hi="__reactProps$"+$r,Ot="__reactContainer$"+$r,nu="__reactEvents$"+$r,Y0="__reactListeners$"+$r,J0="__reactHandles$"+$r;function Pn(t){var e=t[ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ch(t);t!==null;){if(n=t[ft])return n;t=Ch(t)}return e}t=n,n=t.parentNode}return null}function ps(t){return t=t[ft]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function fl(t){return t[Hi]||null}var ru=[],cr=-1;function vn(t){return{current:t}}function Y(t){0>cr||(t.current=ru[cr],ru[cr]=null,cr--)}function G(t,e){cr++,ru[cr]=t.current,t.current=e}var pn={},Ie=vn(pn),Le=vn(!1),Fn=pn;function Ar(t,e){var n=t.type.contextTypes;if(!n)return pn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Me(t){return t=t.childContextTypes,t!=null}function Co(){Y(Le),Y(Ie)}function Sh(t,e,n){if(Ie.current!==pn)throw Error(E(168));G(Ie,e),G(Le,n)}function Rm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,My(t)||"Unknown",i));return ee({},n,r)}function So(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pn,Fn=Ie.current,G(Ie,t),G(Le,Le.current),!0}function Ih(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Rm(t,e,Fn),r.__reactInternalMemoizedMergedChildContext=t,Y(Le),Y(Ie),G(Ie,t)):Y(Le),G(Le,n)}var wt=null,pl=!1,oa=!1;function Nm(t){wt===null?wt=[t]:wt.push(t)}function X0(t){pl=!0,Nm(t)}function yn(){if(!oa&&wt!==null){oa=!0;var t=0,e=B;try{var n=wt;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wt=null,pl=!1}catch(i){throw wt!==null&&(wt=wt.slice(t+1)),Zp(ac,yn),i}finally{B=e,oa=!1}}return null}var dr=[],hr=0,Io=null,To=0,Ge=[],Ke=0,Un=null,Et=1,Ct="";function Tn(t,e){dr[hr++]=To,dr[hr++]=Io,Io=t,To=e}function Pm(t,e,n){Ge[Ke++]=Et,Ge[Ke++]=Ct,Ge[Ke++]=Un,Un=t;var r=Et;t=Ct;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var s=32-ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-ot(e)+i|n<<i|r,Ct=s+t}else Et=1<<s|n<<i|r,Ct=t}function _c(t){t.return!==null&&(Tn(t,1),Pm(t,1,0))}function vc(t){for(;t===Io;)Io=dr[--hr],dr[hr]=null,To=dr[--hr],dr[hr]=null;for(;t===Un;)Un=Ge[--Ke],Ge[Ke]=null,Ct=Ge[--Ke],Ge[Ke]=null,Et=Ge[--Ke],Ge[Ke]=null}var Be=null,We=null,J=!1,nt=null;function xm(t,e){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Th(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,We=nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Un!==null?{id:Et,overflow:Ct}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,We=null,!0):!1;default:return!1}}function iu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function su(t){if(J){var e=We;if(e){var n=e;if(!Th(t,e)){if(iu(t))throw Error(E(418));e=nn(n.nextSibling);var r=Be;e&&Th(t,e)?xm(r,n):(t.flags=t.flags&-4097|2,J=!1,Be=t)}}else{if(iu(t))throw Error(E(418));t.flags=t.flags&-4097|2,J=!1,Be=t}}}function kh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function zs(t){if(t!==Be)return!1;if(!J)return kh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!eu(t.type,t.memoizedProps)),e&&(e=We)){if(iu(t))throw Om(),Error(E(418));for(;e;)xm(t,e),e=nn(e.nextSibling)}if(kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=nn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Be?nn(t.stateNode.nextSibling):null;return!0}function Om(){for(var t=We;t;)t=nn(t.nextSibling)}function Dr(){We=Be=null,J=!1}function yc(t){nt===null?nt=[t]:nt.push(t)}var Z0=Ft.ReactCurrentBatchConfig;function et(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ko=vn(null),Ro=null,fr=null,wc=null;function Ec(){wc=fr=Ro=null}function Cc(t){var e=ko.current;Y(ko),t._currentValue=e}function ou(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cr(t,e){Ro=t,wc=fr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Oe=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(wc!==t)if(t={context:t,memoizedValue:e,next:null},fr===null){if(Ro===null)throw Error(E(308));fr=t,Ro.dependencies={lanes:0,firstContext:t}}else fr=fr.next=t;return e}var xn=null;function Sc(t){xn===null?xn=[t]:xn.push(t)}function Am(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sc(e)):(n.next=i.next,i.next=n),e.interleaved=n,At(t,r)}function At(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vt=!1;function Ic(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,At(t,n)}return i=r.interleaved,i===null?(e.next=e,Sc(r)):(e.next=i.next,i.next=e),r.interleaved=e,At(t,n)}function eo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,uc(t,n)}}function Rh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function No(t,e,n,r){var i=t.updateQueue;Vt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=ee({},c,h);break e;case 2:Vt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zn|=o,t.lanes=o,t.memoizedState=c}}function Nh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Lm=new Ap.Component().refs;function lu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ml={isMounted:function(t){return(t=t._reactInternals)?Jn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Re(),i=on(t),s=Rt(r,i);s.payload=e,n!=null&&(s.callback=n),e=rn(t,s,i),e!==null&&(lt(e,t,i,r),eo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Re(),i=on(t),s=Rt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rn(t,s,i),e!==null&&(lt(e,t,i,r),eo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),r=on(t),i=Rt(n,r);i.tag=2,e!=null&&(i.callback=e),e=rn(t,i,r),e!==null&&(lt(e,t,r,n),eo(e,t,r))}};function Ph(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wi(n,r)||!Wi(i,s):!0}function Mm(t,e,n){var r=!1,i=pn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=Me(e)?Fn:Ie.current,r=e.contextTypes,s=(r=r!=null)?Ar(t,i):pn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ml,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function xh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ml.enqueueReplaceState(e,e.state,null)}function au(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Lm,Ic(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=Me(e)?Fn:Ie.current,i.context=Ar(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ml.enqueueReplaceState(i,i.state,null),No(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function li(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Lm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Ws(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Oh(t){var e=t._init;return e(t._payload)}function bm(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=ln(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=fa(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var T=m.type;return T===sr?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Bt&&Oh(T)===f.type)?(y=i(f,m.props),y.ref=li(p,f,m),y.return=p,y):(y=oo(m.type,m.key,m.props,null,p.mode,y),y.ref=li(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=pa(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,T){return f===null||f.tag!==7?(f=Mn(m,p.mode,y,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=fa(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xs:return m=oo(f.type,f.key,f.props,null,p.mode,m),m.ref=li(p,null,f),m.return=p,m;case ir:return f=pa(f,p.mode,m),f.return=p,f;case Bt:var y=f._init;return c(p,y(f._payload),m)}if(mi(f)||ni(f))return f=Mn(f,p.mode,m,null),f.return=p,f;Ws(p,f)}return null}function h(p,f,m,y){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xs:return m.key===T?a(p,f,m,y):null;case ir:return m.key===T?u(p,f,m,y):null;case Bt:return T=m._init,h(p,f,T(m._payload),y)}if(mi(m)||ni(m))return T!==null?null:d(p,f,m,y,null);Ws(p,m)}return null}function g(p,f,m,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xs:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,T);case ir:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,T);case Bt:var N=y._init;return g(p,f,m,N(y._payload),T)}if(mi(y)||ni(y))return p=p.get(m)||null,d(f,p,y,T,null);Ws(f,y)}return null}function _(p,f,m,y){for(var T=null,N=null,P=f,x=f=0,K=null;P!==null&&x<m.length;x++){P.index>x?(K=P,P=null):K=P.sibling;var F=h(p,P,m[x],y);if(F===null){P===null&&(P=K);break}t&&P&&F.alternate===null&&e(p,P),f=s(F,f,x),N===null?T=F:N.sibling=F,N=F,P=K}if(x===m.length)return n(p,P),J&&Tn(p,x),T;if(P===null){for(;x<m.length;x++)P=c(p,m[x],y),P!==null&&(f=s(P,f,x),N===null?T=P:N.sibling=P,N=P);return J&&Tn(p,x),T}for(P=r(p,P);x<m.length;x++)K=g(P,p,x,m[x],y),K!==null&&(t&&K.alternate!==null&&P.delete(K.key===null?x:K.key),f=s(K,f,x),N===null?T=K:N.sibling=K,N=K);return t&&P.forEach(function(Xe){return e(p,Xe)}),J&&Tn(p,x),T}function v(p,f,m,y){var T=ni(m);if(typeof T!="function")throw Error(E(150));if(m=T.call(m),m==null)throw Error(E(151));for(var N=T=null,P=f,x=f=0,K=null,F=m.next();P!==null&&!F.done;x++,F=m.next()){P.index>x?(K=P,P=null):K=P.sibling;var Xe=h(p,P,F.value,y);if(Xe===null){P===null&&(P=K);break}t&&P&&Xe.alternate===null&&e(p,P),f=s(Xe,f,x),N===null?T=Xe:N.sibling=Xe,N=Xe,P=K}if(F.done)return n(p,P),J&&Tn(p,x),T;if(P===null){for(;!F.done;x++,F=m.next())F=c(p,F.value,y),F!==null&&(f=s(F,f,x),N===null?T=F:N.sibling=F,N=F);return J&&Tn(p,x),T}for(P=r(p,P);!F.done;x++,F=m.next())F=g(P,p,x,F.value,y),F!==null&&(t&&F.alternate!==null&&P.delete(F.key===null?x:F.key),f=s(F,f,x),N===null?T=F:N.sibling=F,N=F);return t&&P.forEach(function(ei){return e(p,ei)}),J&&Tn(p,x),T}function w(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===sr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xs:e:{for(var T=m.key,N=f;N!==null;){if(N.key===T){if(T=m.type,T===sr){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Bt&&Oh(T)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=li(p,N,m),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===sr?(f=Mn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=oo(m.type,m.key,m.props,null,p.mode,y),y.ref=li(p,f,m),y.return=p,p=y)}return o(p);case ir:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=pa(m,p.mode,y),f.return=p,p=f}return o(p);case Bt:return N=m._init,w(p,f,N(m._payload),y)}if(mi(m))return _(p,f,m,y);if(ni(m))return v(p,f,m,y);Ws(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=fa(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return w}var Lr=bm(!0),Fm=bm(!1),ms={},gt=vn(ms),$i=vn(ms),Gi=vn(ms);function On(t){if(t===ms)throw Error(E(174));return t}function Tc(t,e){switch(G(Gi,e),G($i,t),G(gt,ms),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:za(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=za(e,t)}Y(gt),G(gt,e)}function Mr(){Y(gt),Y($i),Y(Gi)}function Um(t){On(Gi.current);var e=On(gt.current),n=za(e,t.type);e!==n&&(G($i,t),G(gt,n))}function kc(t){$i.current===t&&(Y(gt),Y($i))}var X=vn(0);function Po(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var la=[];function Rc(){for(var t=0;t<la.length;t++)la[t]._workInProgressVersionPrimary=null;la.length=0}var to=Ft.ReactCurrentDispatcher,aa=Ft.ReactCurrentBatchConfig,jn=0,Z=null,le=null,he=null,xo=!1,Ti=!1,Ki=0,ew=0;function we(){throw Error(E(321))}function Nc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ut(t[n],e[n]))return!1;return!0}function Pc(t,e,n,r,i,s){if(jn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,to.current=t===null||t.memoizedState===null?iw:sw,t=n(r,i),Ti){s=0;do{if(Ti=!1,Ki=0,25<=s)throw Error(E(301));s+=1,he=le=null,e.updateQueue=null,to.current=ow,t=n(r,i)}while(Ti)}if(to.current=Oo,e=le!==null&&le.next!==null,jn=0,he=le=Z=null,xo=!1,e)throw Error(E(300));return t}function xc(){var t=Ki!==0;return Ki=0,t}function ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?Z.memoizedState=he=t:he=he.next=t,he}function Je(){if(le===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=he===null?Z.memoizedState:he.next;if(e!==null)he=e,le=t;else{if(t===null)throw Error(E(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},he===null?Z.memoizedState=he=t:he=he.next=t}return he}function qi(t,e){return typeof e=="function"?e(t):e}function ua(t){var e=Je(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((jn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,Z.lanes|=d,zn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ut(r,e.memoizedState)||(Oe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,zn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ca(t){var e=Je(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ut(s,e.memoizedState)||(Oe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function jm(){}function zm(t,e){var n=Z,r=Je(),i=e(),s=!ut(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,Oc(Vm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Qi(9,Bm.bind(null,n,r,i,e),void 0,null),me===null)throw Error(E(349));jn&30||Wm(n,e,i)}return i}function Wm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bm(t,e,n,r){e.value=n,e.getSnapshot=r,Hm(e)&&$m(t)}function Vm(t,e,n){return n(function(){Hm(e)&&$m(t)})}function Hm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ut(t,n)}catch{return!0}}function $m(t){var e=At(t,1);e!==null&&lt(e,t,1,-1)}function Ah(t){var e=ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},e.queue=t,t=t.dispatch=rw.bind(null,Z,t),[e.memoizedState,t]}function Qi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gm(){return Je().memoizedState}function no(t,e,n,r){var i=ht();Z.flags|=t,i.memoizedState=Qi(1|e,n,void 0,r===void 0?null:r)}function gl(t,e,n,r){var i=Je();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&Nc(r,o.deps)){i.memoizedState=Qi(e,n,s,r);return}}Z.flags|=t,i.memoizedState=Qi(1|e,n,s,r)}function Dh(t,e){return no(8390656,8,t,e)}function Oc(t,e){return gl(2048,8,t,e)}function Km(t,e){return gl(4,2,t,e)}function qm(t,e){return gl(4,4,t,e)}function Qm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ym(t,e,n){return n=n!=null?n.concat([t]):null,gl(4,4,Qm.bind(null,e,t),n)}function Ac(){}function Jm(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xm(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zm(t,e,n){return jn&21?(ut(n,e)||(n=nm(),Z.lanes|=n,zn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Oe=!0),t.memoizedState=n)}function tw(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=aa.transition;aa.transition={};try{t(!1),e()}finally{B=n,aa.transition=r}}function eg(){return Je().memoizedState}function nw(t,e,n){var r=on(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tg(t))ng(e,n);else if(n=Am(t,e,n,r),n!==null){var i=Re();lt(n,t,r,i),rg(n,e,r)}}function rw(t,e,n){var r=on(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tg(t))ng(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ut(l,o)){var a=e.interleaved;a===null?(i.next=i,Sc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Am(t,e,i,r),n!==null&&(i=Re(),lt(n,t,r,i),rg(n,e,r))}}function tg(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function ng(t,e){Ti=xo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,uc(t,n)}}var Oo={readContext:Ye,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},iw={readContext:Ye,useCallback:function(t,e){return ht().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:Dh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,no(4194308,4,Qm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return no(4194308,4,t,e)},useInsertionEffect:function(t,e){return no(4,2,t,e)},useMemo:function(t,e){var n=ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nw.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=ht();return t={current:t},e.memoizedState=t},useState:Ah,useDebugValue:Ac,useDeferredValue:function(t){return ht().memoizedState=t},useTransition:function(){var t=Ah(!1),e=t[0];return t=tw.bind(null,t[1]),ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=ht();if(J){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),me===null)throw Error(E(349));jn&30||Wm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Dh(Vm.bind(null,r,s,t),[t]),r.flags|=2048,Qi(9,Bm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ht(),e=me.identifierPrefix;if(J){var n=Ct,r=Et;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ki++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ew++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sw={readContext:Ye,useCallback:Jm,useContext:Ye,useEffect:Oc,useImperativeHandle:Ym,useInsertionEffect:Km,useLayoutEffect:qm,useMemo:Xm,useReducer:ua,useRef:Gm,useState:function(){return ua(qi)},useDebugValue:Ac,useDeferredValue:function(t){var e=Je();return Zm(e,le.memoizedState,t)},useTransition:function(){var t=ua(qi)[0],e=Je().memoizedState;return[t,e]},useMutableSource:jm,useSyncExternalStore:zm,useId:eg,unstable_isNewReconciler:!1},ow={readContext:Ye,useCallback:Jm,useContext:Ye,useEffect:Oc,useImperativeHandle:Ym,useInsertionEffect:Km,useLayoutEffect:qm,useMemo:Xm,useReducer:ca,useRef:Gm,useState:function(){return ca(qi)},useDebugValue:Ac,useDeferredValue:function(t){var e=Je();return le===null?e.memoizedState=t:Zm(e,le.memoizedState,t)},useTransition:function(){var t=ca(qi)[0],e=Je().memoizedState;return[t,e]},useMutableSource:jm,useSyncExternalStore:zm,useId:eg,unstable_isNewReconciler:!1};function br(t,e){try{var n="",r=e;do n+=Ly(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function da(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lw=typeof WeakMap=="function"?WeakMap:Map;function ig(t,e,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Do||(Do=!0,yu=r),uu(t,e)},n}function sg(t,e,n){n=Rt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uu(t,e),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ew.bind(null,t,e,n),e.then(t,t))}function Mh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rt(-1,1),e.tag=2,rn(n,e,1))),n.lanes|=1),t)}var aw=Ft.ReactCurrentOwner,Oe=!1;function ke(t,e,n,r){e.child=t===null?Fm(e,null,n,r):Lr(e,t.child,n,r)}function Fh(t,e,n,r,i){n=n.render;var s=e.ref;return Cr(e,i),r=Pc(t,e,n,r,s,i),n=xc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(J&&n&&_c(e),e.flags|=1,ke(t,e,r,i),e.child)}function Uh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,og(t,e,s,r,i)):(t=oo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wi,n(o,r)&&t.ref===e.ref)return Dt(t,e,i)}return e.flags|=1,t=ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function og(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wi(s,r)&&t.ref===e.ref)if(Oe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Oe=!0);else return e.lanes=t.lanes,Dt(t,e,i)}return cu(t,e,n,r,i)}function lg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(mr,ze),ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(mr,ze),ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(mr,ze),ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(mr,ze),ze|=r;return ke(t,e,i,n),e.child}function ag(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cu(t,e,n,r,i){var s=Me(n)?Fn:Ie.current;return s=Ar(e,s),Cr(e,i),n=Pc(t,e,n,r,s,i),r=xc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(J&&r&&_c(e),e.flags|=1,ke(t,e,n,i),e.child)}function jh(t,e,n,r,i){if(Me(n)){var s=!0;So(e)}else s=!1;if(Cr(e,i),e.stateNode===null)ro(t,e),Mm(e,n,r),au(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Me(n)?Fn:Ie.current,u=Ar(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&xh(e,o,r,u),Vt=!1;var h=e.memoizedState;o.state=h,No(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Le.current||Vt?(typeof d=="function"&&(lu(e,n,d,r),a=e.memoizedState),(l=Vt||Ph(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Dm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:et(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=Me(n)?Fn:Ie.current,a=Ar(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&xh(e,o,r,a),Vt=!1,h=e.memoizedState,o.state=h,No(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Le.current||Vt?(typeof g=="function"&&(lu(e,n,g,r),_=e.memoizedState),(u=Vt||Ph(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return du(t,e,n,r,s,i)}function du(t,e,n,r,i,s){ag(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ih(e,n,!1),Dt(t,e,s);r=e.stateNode,aw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Lr(e,t.child,null,s),e.child=Lr(e,null,l,s)):ke(t,e,l,s),e.memoizedState=r.state,i&&Ih(e,n,!0),e.child}function ug(t){var e=t.stateNode;e.pendingContext?Sh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sh(t,e.context,!1),Tc(t,e.containerInfo)}function zh(t,e,n,r,i){return Dr(),yc(i),e.flags|=256,ke(t,e,n,r),e.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function cg(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(X,i&1),t===null)return su(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yl(o,r,0,null),t=Mn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fu(n),e.memoizedState=hu,t):Dc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=ln(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ln(l,s):(s=Mn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hu,r}return s=t.child,t=s.sibling,r=ln(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dc(t,e){return e=yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bs(t,e,n,r){return r!==null&&yc(r),Lr(e,t.child,null,n),t=Dc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=da(Error(E(422))),Bs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yl({mode:"visible",children:r.children},i,0,null),s=Mn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Lr(e,t.child,null,o),e.child.memoizedState=fu(o),e.memoizedState=hu,s);if(!(e.mode&1))return Bs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=da(s,r,void 0),Bs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Oe||l){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,At(t,i),lt(r,t,i,-1))}return jc(),r=da(Error(E(421))),Bs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Cw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=nn(i.nextSibling),Be=e,J=!0,nt=null,t!==null&&(Ge[Ke++]=Et,Ge[Ke++]=Ct,Ge[Ke++]=Un,Et=t.id,Ct=t.overflow,Un=e),e=Dc(e,r.children),e.flags|=4096,e)}function Wh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ou(t.return,e,n)}function ha(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ke(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wh(t,n,e);else if(t.tag===19)Wh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Po(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ha(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Po(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ha(e,!0,n,null,s);break;case"together":ha(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ro(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cw(t,e,n){switch(e.tag){case 3:ug(e),Dr();break;case 5:Um(e);break;case 1:Me(e.type)&&So(e);break;case 4:Tc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(ko,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?cg(t,e,n):(G(X,X.current&1),t=Dt(t,e,n),t!==null?t.sibling:null);G(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,lg(t,e,n)}return Dt(t,e,n)}var hg,pu,fg,pg;hg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pu=function(){};fg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,On(gt.current);var s=null;switch(n){case"input":i=ba(t,i),r=ba(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=ja(t,i),r=ja(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Eo)}Wa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Li.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Li.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};pg=function(t,e,n,r){n!==r&&(e.flags|=4)};function ai(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dw(t,e,n){var r=e.pendingProps;switch(vc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Me(e.type)&&Co(),Ee(e),null;case 3:return r=e.stateNode,Mr(),Y(Le),Y(Ie),Rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(zs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nt!==null&&(Cu(nt),nt=null))),pu(t,e),Ee(e),null;case 5:kc(e);var i=On(Gi.current);if(n=e.type,t!==null&&e.stateNode!=null)fg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ee(e),null}if(t=On(gt.current),zs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ft]=e,r[Hi]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<_i.length;i++)q(_i[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Yd(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":Xd(r,s),q("invalid",r)}Wa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&js(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&js(r.textContent,l,t),i=["children",""+l]):Li.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Os(r),Jd(r,s,!0);break;case"textarea":Os(r),Zd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Eo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ft]=e,t[Hi]=r,hg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ba(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<_i.length;i++)q(_i[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":Yd(t,r),i=ba(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),q("invalid",t);break;case"textarea":Xd(t,r),i=ja(t,r),q("invalid",t);break;default:i=r}Wa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Hp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Bp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Mi(t,a):typeof a=="number"&&Mi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Li.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&rc(t,s,a,o))}switch(n){case"input":Os(t),Jd(t,r,!1);break;case"textarea":Os(t),Zd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vr(t,!!r.multiple,s,!1):r.defaultValue!=null&&vr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)pg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=On(Gi.current),On(gt.current),zs(e)){if(r=e.stateNode,n=e.memoizedProps,r[ft]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:js(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&js(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=e,e.stateNode=r}return Ee(e),null;case 13:if(Y(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&We!==null&&e.mode&1&&!(e.flags&128))Om(),Dr(),e.flags|=98560,s=!1;else if(s=zs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[ft]=e}else Dr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else nt!==null&&(Cu(nt),nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?ue===0&&(ue=3):jc())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return Mr(),pu(t,e),t===null&&Bi(e.stateNode.containerInfo),Ee(e),null;case 10:return Cc(e.type._context),Ee(e),null;case 17:return Me(e.type)&&Co(),Ee(e),null;case 19:if(Y(X),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ai(s,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Po(t),o!==null){for(e.flags|=128,ai(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Fr&&(e.flags|=128,r=!0,ai(s,!1),e.lanes=4194304)}else{if(!r)if(t=Po(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ai(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ee(e),null}else 2*ie()-s.renderingStartTime>Fr&&n!==1073741824&&(e.flags|=128,r=!0,ai(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=X.current,G(X,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Uc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ze&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function hw(t,e){switch(vc(e),e.tag){case 1:return Me(e.type)&&Co(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mr(),Y(Le),Y(Ie),Rc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kc(e),null;case 13:if(Y(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Dr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(X),null;case 4:return Mr(),null;case 10:return Cc(e.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var Vs=!1,Ce=!1,fw=typeof WeakSet=="function"?WeakSet:Set,k=null;function pr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function mu(t,e,n){try{n()}catch(r){te(t,e,r)}}var Bh=!1;function pw(t,e){if(Xa=vo,t=vm(),gc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Za={focusedElem:t,selectionRange:n},vo=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:et(e.type,v),w);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){te(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=Bh,Bh=!1,_}function ki(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mu(e,n,s)}i=i.next}while(i!==r)}}function _l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mg(t){var e=t.alternate;e!==null&&(t.alternate=null,mg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ft],delete e[Hi],delete e[nu],delete e[Y0],delete e[J0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gg(t){return t.tag===5||t.tag===3||t.tag===4}function Vh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _u(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Eo));else if(r!==4&&(t=t.child,t!==null))for(_u(t,e,n),t=t.sibling;t!==null;)_u(t,e,n),t=t.sibling}function vu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vu(t,e,n),t=t.sibling;t!==null;)vu(t,e,n),t=t.sibling}var ge=null,tt=!1;function zt(t,e,n){for(n=n.child;n!==null;)_g(t,e,n),n=n.sibling}function _g(t,e,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:Ce||pr(n,e);case 6:var r=ge,i=tt;ge=null,zt(t,e,n),ge=r,tt=i,ge!==null&&(tt?(t=ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(tt?(t=ge,n=n.stateNode,t.nodeType===8?sa(t.parentNode,n):t.nodeType===1&&sa(t,n),ji(t)):sa(ge,n.stateNode));break;case 4:r=ge,i=tt,ge=n.stateNode.containerInfo,tt=!0,zt(t,e,n),ge=r,tt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mu(n,e,o),i=i.next}while(i!==r)}zt(t,e,n);break;case 1:if(!Ce&&(pr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}zt(t,e,n);break;case 21:zt(t,e,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,zt(t,e,n),Ce=r):zt(t,e,n);break;default:zt(t,e,n)}}function Hh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fw),e.forEach(function(r){var i=Sw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,tt=!1;break e;case 3:ge=l.stateNode.containerInfo,tt=!0;break e;case 4:ge=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(ge===null)throw Error(E(160));_g(s,o,i),ge=null,tt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vg(e,t),e=e.sibling}function vg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ze(e,t),dt(t),r&4){try{ki(3,t,t.return),_l(3,t)}catch(v){te(t,t.return,v)}try{ki(5,t,t.return)}catch(v){te(t,t.return,v)}}break;case 1:Ze(e,t),dt(t),r&512&&n!==null&&pr(n,n.return);break;case 5:if(Ze(e,t),dt(t),r&512&&n!==null&&pr(n,n.return),t.flags&32){var i=t.stateNode;try{Mi(i,"")}catch(v){te(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&jp(i,s),Ba(l,o);var u=Ba(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Hp(i,c):d==="dangerouslySetInnerHTML"?Bp(i,c):d==="children"?Mi(i,c):rc(i,d,c,u)}switch(l){case"input":Fa(i,s);break;case"textarea":zp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?vr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?vr(i,!!s.multiple,s.defaultValue,!0):vr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hi]=s}catch(v){te(t,t.return,v)}}break;case 6:if(Ze(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){te(t,t.return,v)}}break;case 3:if(Ze(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ji(e.containerInfo)}catch(v){te(t,t.return,v)}break;case 4:Ze(e,t),dt(t);break;case 13:Ze(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bc=ie())),r&4&&Hh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ce=(u=Ce)||d,Ze(e,t),Ce=u):Ze(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(k=t,d=t.child;d!==null;){for(c=k=d;k!==null;){switch(h=k,g=h.child,h.tag){case 0:case 11:case 14:case 15:ki(4,h,h.return);break;case 1:pr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:pr(h,h.return);break;case 22:if(h.memoizedState!==null){Gh(c);continue}}g!==null?(g.return=h,k=g):Gh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Vp("display",o))}catch(v){te(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){te(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ze(e,t),dt(t),r&4&&Hh(t);break;case 21:break;default:Ze(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mi(i,""),r.flags&=-33);var s=Vh(t);vu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Vh(t);_u(t,l,o);break;default:throw Error(E(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mw(t,e,n){k=t,yg(t)}function yg(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ce;l=Vs;var u=Ce;if(Vs=o,(Ce=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?Kh(i):a!==null?(a.return=o,k=a):Kh(i);for(;s!==null;)k=s,yg(s),s=s.sibling;k=i,Vs=l,Ce=u}$h(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):$h(t)}}function $h(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ce||_l(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ji(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||e.flags&512&&gu(e)}catch(h){te(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Gh(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Kh(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_l(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{gu(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{gu(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var gw=Math.ceil,Ao=Ft.ReactCurrentDispatcher,Lc=Ft.ReactCurrentOwner,Qe=Ft.ReactCurrentBatchConfig,z=0,me=null,se=null,ve=0,ze=0,mr=vn(0),ue=0,Yi=null,zn=0,vl=0,Mc=0,Ri=null,xe=null,bc=0,Fr=1/0,yt=null,Do=!1,yu=null,sn=null,Hs=!1,Jt=null,Lo=0,Ni=0,wu=null,io=-1,so=0;function Re(){return z&6?ie():io!==-1?io:io=ie()}function on(t){return t.mode&1?z&2&&ve!==0?ve&-ve:Z0.transition!==null?(so===0&&(so=nm()),so):(t=B,t!==0||(t=window.event,t=t===void 0?16:um(t.type)),t):1}function lt(t,e,n,r){if(50<Ni)throw Ni=0,wu=null,Error(E(185));hs(t,n,r),(!(z&2)||t!==me)&&(t===me&&(!(z&2)&&(vl|=n),ue===4&&$t(t,ve)),be(t,r),n===1&&z===0&&!(e.mode&1)&&(Fr=ie()+500,pl&&yn()))}function be(t,e){var n=t.callbackNode;Zy(t,e);var r=_o(t,t===me?ve:0);if(r===0)n!==null&&nh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nh(n),e===1)t.tag===0?X0(qh.bind(null,t)):Nm(qh.bind(null,t)),q0(function(){!(z&6)&&yn()}),n=null;else{switch(rm(r)){case 1:n=ac;break;case 4:n=em;break;case 16:n=go;break;case 536870912:n=tm;break;default:n=go}n=Rg(n,wg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wg(t,e){if(io=-1,so=0,z&6)throw Error(E(327));var n=t.callbackNode;if(Sr()&&t.callbackNode!==n)return null;var r=_o(t,t===me?ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Mo(t,r);else{e=r;var i=z;z|=2;var s=Cg();(me!==t||ve!==e)&&(yt=null,Fr=ie()+500,Ln(t,e));do try{yw();break}catch(l){Eg(t,l)}while(!0);Ec(),Ao.current=s,z=i,se!==null?e=0:(me=null,ve=0,e=ue)}if(e!==0){if(e===2&&(i=Ka(t),i!==0&&(r=i,e=Eu(t,i))),e===1)throw n=Yi,Ln(t,0),$t(t,r),be(t,ie()),n;if(e===6)$t(t,r);else{if(i=t.current.alternate,!(r&30)&&!_w(i)&&(e=Mo(t,r),e===2&&(s=Ka(t),s!==0&&(r=s,e=Eu(t,s))),e===1))throw n=Yi,Ln(t,0),$t(t,r),be(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:kn(t,xe,yt);break;case 3:if($t(t,r),(r&130023424)===r&&(e=bc+500-ie(),10<e)){if(_o(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tu(kn.bind(null,t,xe,yt),e);break}kn(t,xe,yt);break;case 4:if($t(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gw(r/1960))-r,10<r){t.timeoutHandle=tu(kn.bind(null,t,xe,yt),r);break}kn(t,xe,yt);break;case 5:kn(t,xe,yt);break;default:throw Error(E(329))}}}return be(t,ie()),t.callbackNode===n?wg.bind(null,t):null}function Eu(t,e){var n=Ri;return t.current.memoizedState.isDehydrated&&(Ln(t,e).flags|=256),t=Mo(t,e),t!==2&&(e=xe,xe=n,e!==null&&Cu(e)),t}function Cu(t){xe===null?xe=t:xe.push.apply(xe,t)}function _w(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ut(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $t(t,e){for(e&=~Mc,e&=~vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ot(e),r=1<<n;t[n]=-1,e&=~r}}function qh(t){if(z&6)throw Error(E(327));Sr();var e=_o(t,0);if(!(e&1))return be(t,ie()),null;var n=Mo(t,e);if(t.tag!==0&&n===2){var r=Ka(t);r!==0&&(e=r,n=Eu(t,r))}if(n===1)throw n=Yi,Ln(t,0),$t(t,e),be(t,ie()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kn(t,xe,yt),be(t,ie()),null}function Fc(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Fr=ie()+500,pl&&yn())}}function Wn(t){Jt!==null&&Jt.tag===0&&!(z&6)&&Sr();var e=z;z|=1;var n=Qe.transition,r=B;try{if(Qe.transition=null,B=1,t)return t()}finally{B=r,Qe.transition=n,z=e,!(z&6)&&yn()}}function Uc(){ze=mr.current,Y(mr)}function Ln(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,K0(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(vc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:Mr(),Y(Le),Y(Ie),Rc();break;case 5:kc(r);break;case 4:Mr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Cc(r.type._context);break;case 22:case 23:Uc()}n=n.return}if(me=t,se=t=ln(t.current,null),ve=ze=e,ue=0,Yi=null,Mc=vl=zn=0,xe=Ri=null,xn!==null){for(e=0;e<xn.length;e++)if(n=xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xn=null}return t}function Eg(t,e){do{var n=se;try{if(Ec(),to.current=Oo,xo){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xo=!1}if(jn=0,he=le=Z=null,Ti=!1,Ki=0,Lc.current=null,n===null||n.return===null){ue=1,Yi=e,se=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Mh(o);if(g!==null){g.flags&=-257,bh(g,o,l,s,e),g.mode&1&&Lh(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){Lh(s,u,e),jc();break e}a=Error(E(426))}}else if(J&&l.mode&1){var w=Mh(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),bh(w,o,l,s,e),yc(br(a,l));break e}}s=a=br(a,l),ue!==4&&(ue=2),Ri===null?Ri=[s]:Ri.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=ig(s,a,e);Rh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(sn===null||!sn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=sg(s,l,e);Rh(s,y);break e}}s=s.return}while(s!==null)}Ig(n)}catch(T){e=T,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Cg(){var t=Ao.current;return Ao.current=Oo,t===null?Oo:t}function jc(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||!(zn&268435455)&&!(vl&268435455)||$t(me,ve)}function Mo(t,e){var n=z;z|=2;var r=Cg();(me!==t||ve!==e)&&(yt=null,Ln(t,e));do try{vw();break}catch(i){Eg(t,i)}while(!0);if(Ec(),z=n,Ao.current=r,se!==null)throw Error(E(261));return me=null,ve=0,ue}function vw(){for(;se!==null;)Sg(se)}function yw(){for(;se!==null&&!Hy();)Sg(se)}function Sg(t){var e=kg(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?Ig(t):se=e,Lc.current=null}function Ig(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hw(n,e),n!==null){n.flags&=32767,se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,se=null;return}}else if(n=dw(n,e,ze),n!==null){se=n;return}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);ue===0&&(ue=5)}function kn(t,e,n){var r=B,i=Qe.transition;try{Qe.transition=null,B=1,ww(t,e,n,r)}finally{Qe.transition=i,B=r}return null}function ww(t,e,n,r){do Sr();while(Jt!==null);if(z&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(e0(t,s),t===me&&(se=me=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hs||(Hs=!0,Rg(go,function(){return Sr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qe.transition,Qe.transition=null;var o=B;B=1;var l=z;z|=4,Lc.current=null,pw(t,n),vg(n,t),z0(Za),vo=!!Xa,Za=Xa=null,t.current=n,mw(n),$y(),z=l,B=o,Qe.transition=s}else t.current=n;if(Hs&&(Hs=!1,Jt=t,Lo=i),s=t.pendingLanes,s===0&&(sn=null),qy(n.stateNode),be(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Do)throw Do=!1,t=yu,yu=null,t;return Lo&1&&t.tag!==0&&Sr(),s=t.pendingLanes,s&1?t===wu?Ni++:(Ni=0,wu=t):Ni=0,yn(),null}function Sr(){if(Jt!==null){var t=rm(Lo),e=Qe.transition,n=B;try{if(Qe.transition=null,B=16>t?16:t,Jt===null)var r=!1;else{if(t=Jt,Jt=null,Lo=0,z&6)throw Error(E(331));var i=z;for(z|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:ki(8,d,s)}var c=d.child;if(c!==null)c.return=d,k=c;else for(;k!==null;){d=k;var h=d.sibling,g=d.return;if(mg(d),d===u){k=null;break}if(h!==null){h.return=g,k=h;break}k=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ki(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_l(9,l)}}catch(T){te(l,l.return,T)}if(l===o){k=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,k=y;break e}k=l.return}}if(z=i,yn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ul,t)}catch{}r=!0}return r}finally{B=n,Qe.transition=e}}return!1}function Qh(t,e,n){e=br(n,e),e=ig(t,e,1),t=rn(t,e,1),e=Re(),t!==null&&(hs(t,1,e),be(t,e))}function te(t,e,n){if(t.tag===3)Qh(t,t,n);else for(;e!==null;){if(e.tag===3){Qh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){t=br(n,t),t=sg(e,t,1),e=rn(e,t,1),t=Re(),e!==null&&(hs(e,1,t),be(e,t));break}}e=e.return}}function Ew(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&n,me===t&&(ve&n)===n&&(ue===4||ue===3&&(ve&130023424)===ve&&500>ie()-bc?Ln(t,0):Mc|=n),be(t,e)}function Tg(t,e){e===0&&(t.mode&1?(e=Ls,Ls<<=1,!(Ls&130023424)&&(Ls=4194304)):e=1);var n=Re();t=At(t,e),t!==null&&(hs(t,e,n),be(t,n))}function Cw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Tg(t,n)}function Sw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Tg(t,n)}var kg;kg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Le.current)Oe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Oe=!1,cw(t,e,n);Oe=!!(t.flags&131072)}else Oe=!1,J&&e.flags&1048576&&Pm(e,To,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ro(t,e),t=e.pendingProps;var i=Ar(e,Ie.current);Cr(e,n),i=Pc(null,e,r,t,i,n);var s=xc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Me(r)?(s=!0,So(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ic(e),i.updater=ml,e.stateNode=i,i._reactInternals=e,au(e,r,t,n),e=du(null,e,r,!0,s,n)):(e.tag=0,J&&s&&_c(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ro(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Tw(r),t=et(r,t),i){case 0:e=cu(null,e,r,t,n);break e;case 1:e=jh(null,e,r,t,n);break e;case 11:e=Fh(null,e,r,t,n);break e;case 14:e=Uh(null,e,r,et(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),cu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),jh(t,e,r,i,n);case 3:e:{if(ug(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Dm(t,e),No(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=br(Error(E(423)),e),e=zh(t,e,r,n,i);break e}else if(r!==i){i=br(Error(E(424)),e),e=zh(t,e,r,n,i);break e}else for(We=nn(e.stateNode.containerInfo.firstChild),Be=e,J=!0,nt=null,n=Fm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dr(),r===i){e=Dt(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return Um(e),t===null&&su(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,eu(r,i)?o=null:s!==null&&eu(r,s)&&(e.flags|=32),ag(t,e),ke(t,e,o,n),e.child;case 6:return t===null&&su(e),null;case 13:return cg(t,e,n);case 4:return Tc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Lr(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Fh(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(ko,r._currentValue),r._currentValue=o,s!==null)if(ut(s.value,o)){if(s.children===i.children&&!Le.current){e=Dt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Rt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ou(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ou(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Cr(e,n),i=Ye(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=et(r,e.pendingProps),i=et(r.type,i),Uh(t,e,r,i,n);case 15:return og(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),ro(t,e),e.tag=1,Me(r)?(t=!0,So(e)):t=!1,Cr(e,n),Mm(e,r,i),au(e,r,i,n),du(null,e,r,!0,t,n);case 19:return dg(t,e,n);case 22:return lg(t,e,n)}throw Error(E(156,e.tag))};function Rg(t,e){return Zp(t,e)}function Iw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,n,r){return new Iw(t,e,n,r)}function zc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tw(t){if(typeof t=="function")return zc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sc)return 11;if(t===oc)return 14}return 2}function ln(t,e){var n=t.alternate;return n===null?(n=qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function oo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case sr:return Mn(n.children,i,s,e);case ic:o=8,i|=8;break;case Aa:return t=qe(12,n,e,i|2),t.elementType=Aa,t.lanes=s,t;case Da:return t=qe(13,n,e,i),t.elementType=Da,t.lanes=s,t;case La:return t=qe(19,n,e,i),t.elementType=La,t.lanes=s,t;case bp:return yl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lp:o=10;break e;case Mp:o=9;break e;case sc:o=11;break e;case oc:o=14;break e;case Bt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mn(t,e,n,r){return t=qe(7,t,r,e),t.lanes=n,t}function yl(t,e,n,r){return t=qe(22,t,r,e),t.elementType=bp,t.lanes=n,t.stateNode={isHidden:!1},t}function fa(t,e,n){return t=qe(6,t,null,e),t.lanes=n,t}function pa(t,e,n){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wc(t,e,n,r,i,s,o,l,a){return t=new kw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ic(s),t}function Rw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ng(t){if(!t)return pn;t=t._reactInternals;e:{if(Jn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Me(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Me(n))return Rm(t,n,e)}return e}function Pg(t,e,n,r,i,s,o,l,a){return t=Wc(n,r,!0,t,i,s,o,l,a),t.context=Ng(null),n=t.current,r=Re(),i=on(n),s=Rt(r,i),s.callback=e??null,rn(n,s,i),t.current.lanes=i,hs(t,i,r),be(t,r),t}function wl(t,e,n,r){var i=e.current,s=Re(),o=on(i);return n=Ng(n),e.context===null?e.context=n:e.pendingContext=n,e=Rt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rn(i,e,o),t!==null&&(lt(t,i,o,s),eo(t,i,o)),o}function bo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bc(t,e){Yh(t,e),(t=t.alternate)&&Yh(t,e)}function Nw(){return null}var xg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vc(t){this._internalRoot=t}El.prototype.render=Vc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));wl(t,e,null,null)};El.prototype.unmount=Vc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wn(function(){wl(null,t,null,null)}),e[Ot]=null}};function El(t){this._internalRoot=t}El.prototype.unstable_scheduleHydration=function(t){if(t){var e=om();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ht.length&&e!==0&&e<Ht[n].priority;n++);Ht.splice(n,0,t),n===0&&am(t)}};function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jh(){}function Pw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=bo(o);s.call(u)}}var o=Pg(e,r,t,0,null,!1,!1,"",Jh);return t._reactRootContainer=o,t[Ot]=o.current,Bi(t.nodeType===8?t.parentNode:t),Wn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=bo(a);l.call(u)}}var a=Wc(t,0,!1,null,null,!1,!1,"",Jh);return t._reactRootContainer=a,t[Ot]=a.current,Bi(t.nodeType===8?t.parentNode:t),Wn(function(){wl(e,a,n,r)}),a}function Sl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=bo(o);l.call(a)}}wl(e,o,t,i)}else o=Pw(n,e,t,i,r);return bo(o)}im=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=gi(e.pendingLanes);n!==0&&(uc(e,n|1),be(e,ie()),!(z&6)&&(Fr=ie()+500,yn()))}break;case 13:Wn(function(){var r=At(t,1);if(r!==null){var i=Re();lt(r,t,1,i)}}),Bc(t,1)}};cc=function(t){if(t.tag===13){var e=At(t,134217728);if(e!==null){var n=Re();lt(e,t,134217728,n)}Bc(t,134217728)}};sm=function(t){if(t.tag===13){var e=on(t),n=At(t,e);if(n!==null){var r=Re();lt(n,t,e,r)}Bc(t,e)}};om=function(){return B};lm=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Ha=function(t,e,n){switch(e){case"input":if(Fa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fl(r);if(!i)throw Error(E(90));Up(r),Fa(r,i)}}}break;case"textarea":zp(t,n);break;case"select":e=n.value,e!=null&&vr(t,!!n.multiple,e,!1)}};Kp=Fc;qp=Wn;var xw={usingClientEntryPoint:!1,Events:[ps,ur,fl,$p,Gp,Fc]},ui={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ow={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jp(t),t===null?null:t.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||Nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$s.isDisabled&&$s.supportsFiber)try{ul=$s.inject(Ow),mt=$s}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xw;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hc(e))throw Error(E(200));return Rw(t,e,null,n)};He.createRoot=function(t,e){if(!Hc(t))throw Error(E(299));var n=!1,r="",i=xg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wc(t,1,!1,null,null,n,!1,r,i),t[Ot]=e.current,Bi(t.nodeType===8?t.parentNode:t),new Vc(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Jp(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return Wn(t)};He.hydrate=function(t,e,n){if(!Cl(e))throw Error(E(200));return Sl(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!Hc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=xg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pg(e,null,t,1,n??null,i,!1,s,o),t[Ot]=e.current,Bi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new El(e)};He.render=function(t,e,n){if(!Cl(e))throw Error(E(200));return Sl(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!Cl(t))throw Error(E(40));return t._reactRootContainer?(Wn(function(){Sl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};He.unstable_batchedUpdates=Fc;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Sl(t,e,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function Og(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Og)}catch(t){console.error(t)}}Og(),Pp.exports=He;var Aw=Pp.exports,Xh=Aw;xa.createRoot=Xh.createRoot,xa.hydrateRoot=Xh.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ji.apply(this,arguments)}var Xt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xt||(Xt={}));const Zh="popstate";function Dw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Su("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Fo(i)}return Mw(e,n,null,t)}function oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ag(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Lw(){return Math.random().toString(36).substr(2,8)}function ef(t,e){return{usr:t.state,key:t.key,idx:e}}function Su(t,e,n,r){return n===void 0&&(n=null),Ji({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gr(e):e,{state:n,key:e&&e.key||r||Lw()})}function Fo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Mw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Xt.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(Ji({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=Xt.Pop;let w=d(),p=w==null?null:w-u;u=w,a&&a({action:l,location:v.location,delta:p})}function h(w,p){l=Xt.Push;let f=Su(v.location,w,p);n&&n(f,w),u=d()+1;let m=ef(f,u),y=v.createHref(f);try{o.pushState(m,"",y)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(y)}s&&a&&a({action:l,location:v.location,delta:1})}function g(w,p){l=Xt.Replace;let f=Su(v.location,w,p);n&&n(f,w),u=d();let m=ef(f,u),y=v.createHref(f);o.replaceState(m,"",y),s&&a&&a({action:l,location:v.location,delta:0})}function _(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:Fo(w);return f=f.replace(/ $/,"%20"),oe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(w){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Zh,c),a=w,()=>{i.removeEventListener(Zh,c),a=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let p=_(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(w){return o.go(w)}};return v}var tf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(tf||(tf={}));function bw(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Gr(e):e,i=$c(r.pathname||"/",n);if(i==null)return null;let s=Dg(t);Fw(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let a=Qw(i);o=Gw(s[l],a)}return o}function Dg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(oe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=an([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Dg(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Hw(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Lg(s.path))i(s,o,a)}),e}function Lg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Lg(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function Fw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:$w(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Uw=/^:[\w-]+$/,jw=3,zw=2,Ww=1,Bw=10,Vw=-2,nf=t=>t==="*";function Hw(t,e){let n=t.split("/"),r=n.length;return n.some(nf)&&(r+=Vw),e&&(r+=zw),n.filter(i=>!nf(i)).reduce((i,s)=>i+(Uw.test(s)?jw:s===""?Ww:Bw),r)}function $w(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Gw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Kw({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;s.push({params:r,pathname:an([i,d.pathname]),pathnameBase:Zw(an([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=an([i,d.pathnameBase]))}return s}function Kw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let v=l[c]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=l[c];return g&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function qw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ag(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Qw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ag(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $c(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Yw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gr(t):t;return{pathname:n?n.startsWith("/")?n:Jw(n,e):e,search:eE(r),hash:tE(i)}}function Jw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ma(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mg(t,e){let n=Xw(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gr(t):(i=Ji({},t),oe(!i.pathname||!i.pathname.includes("?"),ma("?","pathname","search",i)),oe(!i.pathname||!i.pathname.includes("#"),ma("#","pathname","hash",i)),oe(!i.search||!i.search.includes("#"),ma("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=Yw(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const an=t=>t.join("/").replace(/\/\/+/g,"/"),Zw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),eE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,tE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function nE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Fg=["post","put","patch","delete"];new Set(Fg);const rE=["get",...Fg];new Set(rE);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xi(){return Xi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xi.apply(this,arguments)}const Gc=I.createContext(null),iE=I.createContext(null),Xn=I.createContext(null),Il=I.createContext(null),Zn=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Ug=I.createContext(null);function sE(t,e){let{relative:n}=e===void 0?{}:e;gs()||oe(!1);let{basename:r,navigator:i}=I.useContext(Xn),{hash:s,pathname:o,search:l}=zg(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:an([r,o])),i.createHref({pathname:a,search:l,hash:s})}function gs(){return I.useContext(Il)!=null}function Tl(){return gs()||oe(!1),I.useContext(Il).location}function jg(t){I.useContext(Xn).static||I.useLayoutEffect(t)}function oE(){let{isDataRoute:t}=I.useContext(Zn);return t?yE():lE()}function lE(){gs()||oe(!1);let t=I.useContext(Gc),{basename:e,future:n,navigator:r}=I.useContext(Xn),{matches:i}=I.useContext(Zn),{pathname:s}=Tl(),o=JSON.stringify(Mg(i,n.v7_relativeSplatPath)),l=I.useRef(!1);return jg(()=>{l.current=!0}),I.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=bg(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:an([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}function zg(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=I.useContext(Xn),{matches:i}=I.useContext(Zn),{pathname:s}=Tl(),o=JSON.stringify(Mg(i,r.v7_relativeSplatPath));return I.useMemo(()=>bg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function aE(t,e){return uE(t,e)}function uE(t,e,n,r){gs()||oe(!1);let{navigator:i}=I.useContext(Xn),{matches:s}=I.useContext(Zn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Tl(),d;if(e){var c;let w=typeof e=="string"?Gr(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||oe(!1),d=w}else d=u;let h=d.pathname||"/",g=h;if(a!=="/"){let w=a.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let _=bw(t,{pathname:g}),v=pE(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:an([a,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:an([a,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&v?I.createElement(Il.Provider,{value:{location:Xi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Xt.Pop}},v):v}function cE(){let t=vE(),e=nE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,null)}const dE=I.createElement(cE,null);class hE extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(Zn.Provider,{value:this.props.routeContext},I.createElement(Ug.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fE(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Gc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Zn.Provider,{value:e},r)}function pE(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));d>=0||oe(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:g}=n,_=c.route.loader&&h[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||_){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let g,_=!1,v=null,w=null;n&&(g=l&&c.route.id?l[c.route.id]:void 0,v=c.route.errorElement||dE,a&&(u<0&&h===0?(wE("route-fallback",!1),_=!0,w=null):u===h&&(_=!0,w=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let m;return g?m=v:_?m=w:c.route.Component?m=I.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,I.createElement(fE,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?I.createElement(hE,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Wg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Wg||{}),Uo=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uo||{});function mE(t){let e=I.useContext(Gc);return e||oe(!1),e}function gE(t){let e=I.useContext(iE);return e||oe(!1),e}function _E(t){let e=I.useContext(Zn);return e||oe(!1),e}function Bg(t){let e=_E(),n=e.matches[e.matches.length-1];return n.route.id||oe(!1),n.route.id}function vE(){var t;let e=I.useContext(Ug),n=gE(Uo.UseRouteError),r=Bg(Uo.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function yE(){let{router:t}=mE(Wg.UseNavigateStable),e=Bg(Uo.UseNavigateStable),n=I.useRef(!1);return jg(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Xi({fromRouteId:e},s)))},[t,e])}const rf={};function wE(t,e,n){!e&&!rf[t]&&(rf[t]=!0)}function Vg(t){oe(!1)}function EE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xt.Pop,navigator:s,static:o=!1,future:l}=t;gs()&&oe(!1);let a=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:a,navigator:s,static:o,future:Xi({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Gr(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:_="default"}=r,v=I.useMemo(()=>{let w=$c(d,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:g,key:_},navigationType:i}},[a,d,c,h,g,_,i]);return v==null?null:I.createElement(Xn.Provider,{value:u},I.createElement(Il.Provider,{children:n,value:v}))}function CE(t){let{children:e,location:n}=t;return aE(Iu(e),n)}new Promise(()=>{});function Iu(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,Iu(r.props.children,s));return}r.type!==Vg&&oe(!1),!r.props.index||!r.props.children||oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Iu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tu(){return Tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tu.apply(this,arguments)}function SE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function IE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function TE(t,e){return t.button===0&&(!e||e==="_self")&&!IE(t)}const kE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],RE="6";try{window.__reactRouterVersion=RE}catch{}const NE="startTransition",sf=Cy[NE];function PE(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=Dw({window:i,v5Compat:!0}));let o=s.current,[l,a]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=I.useCallback(c=>{u&&sf?sf(()=>a(c)):a(c)},[a,u]);return I.useLayoutEffect(()=>o.listen(d),[o,d]),I.createElement(EE,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const xE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hg=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,h=SE(e,kE),{basename:g}=I.useContext(Xn),_,v=!1;if(typeof u=="string"&&OE.test(u)&&(_=u,xE))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),T=$c(y.pathname,g);y.origin===m.origin&&T!=null?u=T+y.search+y.hash:v=!0}catch{}let w=sE(u,{relative:i}),p=AE(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i,unstable_viewTransition:c});function f(m){r&&r(m),m.defaultPrevented||p(m)}return I.createElement("a",Tu({},h,{href:_||w,onClick:v||s?r:f,ref:n,target:a}))});var of;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(of||(of={}));var lf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(lf||(lf={}));function AE(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=oE(),u=Tl(),d=zg(t,{relative:o});return I.useCallback(c=>{if(TE(c,n)){c.preventDefault();let h=r!==void 0?r:Fo(u)===Fo(d);a(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,d,r,i,n,t,s,o,l])}var af={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Kr(e)},Kr=function(t){return new Error("Firebase Database ("+$g.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Kc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new LE;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kg=function(t){const e=Gg(t);return Kc.encodeByteArray(e,!0)},jo=function(t){return Kg(t).replace(/\./g,"")},zo=function(t){try{return Kc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t){return qg(void 0,t)}function qg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bE(n)||(t[n]=qg(t[n],e[n]));return t}function bE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=()=>FE().__FIREBASE_DEFAULTS__,jE=()=>{if(typeof process>"u"||typeof af>"u")return;const t=af.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zo(t[1]);return e&&JSON.parse(e)},qc=()=>{try{return UE()||jE()||zE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qg=t=>{var e,n;return(n=(e=qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WE=t=>{const e=Qg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yg=()=>{var t;return(t=qc())===null||t===void 0?void 0:t.config},Jg=t=>{var e;return(e=qc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jo(JSON.stringify(n)),jo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function VE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HE(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zg(){return $g.NODE_ADMIN===!0}function $E(){try{return typeof indexedDB=="object"}catch{return!1}}function GE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KE,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new wn(i,l,r)}}function qE(t,e){return t.replace(QE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Zi(zo(s[0])||""),n=Zi(zo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},YE=function(t){const e=e_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},JE=function(t){const e=e_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ur(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ku(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Bo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(uf(s)&&uf(o)){if(!Bo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function yi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ZE(t,e){const n=new eC(t,e);return n.subscribe.bind(n)}class eC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ga),i.error===void 0&&(i.error=ga),i.complete===void 0&&(i.complete=ga);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ga(){}function Yc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Rl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sC(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iC(t){return t===Rn?void 0:t}function sC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const lC={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},aC=V.INFO,uC={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},cC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jc{constructor(e){this.name=e,this._logLevel=aC,this._logHandler=cC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const dC=(t,e)=>e.some(n=>t instanceof n);let cf,df;function hC(){return cf||(cf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fC(){return df||(df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t_=new WeakMap,Ru=new WeakMap,n_=new WeakMap,_a=new WeakMap,Xc=new WeakMap;function pC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t_.set(n,t)}).catch(()=>{}),Xc.set(e,t),e}function mC(t){if(Ru.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ru.set(t,e)}let Nu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gC(t){Nu=t(Nu)}function _C(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(va(this),e,...n);return n_.set(r,e.sort?e.sort():[e]),un(r)}:fC().includes(t)?function(...e){return t.apply(va(this),e),un(t_.get(this))}:function(...e){return un(t.apply(va(this),e))}}function vC(t){return typeof t=="function"?_C(t):(t instanceof IDBTransaction&&mC(t),dC(t,hC())?new Proxy(t,Nu):t)}function un(t){if(t instanceof IDBRequest)return pC(t);if(_a.has(t))return _a.get(t);const e=vC(t);return e!==t&&(_a.set(t,e),Xc.set(e,t)),e}const va=t=>Xc.get(t);function yC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=un(o);return r&&o.addEventListener("upgradeneeded",a=>{r(un(o.result),a.oldVersion,a.newVersion,un(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const wC=["get","getKey","getAll","getAllKeys","count"],EC=["put","add","delete","clear"],ya=new Map;function hf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ya.get(e))return ya.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=EC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ya.set(e,s),s}gC(t=>({...t,get:(e,n,r)=>hf(e,n)||t.get(e,n,r),has:(e,n)=>!!hf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pu="@firebase/app",ff="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Jc("@firebase/app"),IC="@firebase/app-compat",TC="@firebase/analytics-compat",kC="@firebase/analytics",RC="@firebase/app-check-compat",NC="@firebase/app-check",PC="@firebase/auth",xC="@firebase/auth-compat",OC="@firebase/database",AC="@firebase/database-compat",DC="@firebase/functions",LC="@firebase/functions-compat",MC="@firebase/installations",bC="@firebase/installations-compat",FC="@firebase/messaging",UC="@firebase/messaging-compat",jC="@firebase/performance",zC="@firebase/performance-compat",WC="@firebase/remote-config",BC="@firebase/remote-config-compat",VC="@firebase/storage",HC="@firebase/storage-compat",$C="@firebase/firestore",GC="@firebase/firestore-compat",KC="firebase",qC="10.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="[DEFAULT]",QC={[Pu]:"fire-core",[IC]:"fire-core-compat",[kC]:"fire-analytics",[TC]:"fire-analytics-compat",[NC]:"fire-app-check",[RC]:"fire-app-check-compat",[PC]:"fire-auth",[xC]:"fire-auth-compat",[OC]:"fire-rtdb",[AC]:"fire-rtdb-compat",[DC]:"fire-fn",[LC]:"fire-fn-compat",[MC]:"fire-iid",[bC]:"fire-iid-compat",[FC]:"fire-fcm",[UC]:"fire-fcm-compat",[jC]:"fire-perf",[zC]:"fire-perf-compat",[WC]:"fire-rc",[BC]:"fire-rc-compat",[VC]:"fire-gcs",[HC]:"fire-gcs-compat",[$C]:"fire-fst",[GC]:"fire-fst-compat","fire-js":"fire-js",[KC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map,YC=new Map,Ou=new Map;function pf(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jr(t){const e=t.name;if(Ou.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Ou.set(e,t);for(const n of Vo.values())pf(n,t);for(const n of YC.values())pf(n,t);return!0}function Zc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new _s("app","Firebase",JC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=qC;function r_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(n||(n=Yg()),!n)throw cn.create("no-options");const s=Vo.get(i);if(s){if(Bo(n,s.options)&&Bo(r,s.config))return s;throw cn.create("duplicate-app",{appName:i})}const o=new oC(i);for(const a of Ou.values())o.addComponent(a);const l=new XC(n,r,o);return Vo.set(i,l),l}function i_(t=xu){const e=Vo.get(t);if(!e&&t===xu&&Yg())return r_();if(!e)throw cn.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let i=(r=QC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}jr(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="firebase-heartbeat-database",eS=1,es="firebase-heartbeat-store";let wa=null;function s_(){return wa||(wa=yC(ZC,eS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(es)}catch(n){console.warn(n)}}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),wa}async function tS(t){try{const n=(await s_()).transaction(es),r=await n.objectStore(es).get(o_(t));return await n.done,r}catch(e){if(e instanceof wn)Vn.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function mf(t,e){try{const r=(await s_()).transaction(es,"readwrite");await r.objectStore(es).put(e,o_(t)),await r.done}catch(n){if(n instanceof wn)Vn.warn(n.message);else{const r=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function o_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=1024,rS=30*24*60*60*1e3;class iS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=rS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gf(),{heartbeatsToSend:r,unsentEntries:i}=sS(this._heartbeatsCache.heartbeats),s=jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function gf(){return new Date().toISOString().substring(0,10)}function sS(t,e=nS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_f(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_f(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $E()?GE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _f(t){return jo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t){jr(new Bn("platform-logger",e=>new CC(e),"PRIVATE")),jr(new Bn("heartbeat",e=>new iS(e),"PRIVATE")),dn(Pu,ff,t),dn(Pu,ff,"esm2017"),dn("fire-js","")}lS("");var vf={};const yf="@firebase/database",wf="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l_="";function aS(t){l_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uS(e)}}catch{}return new cS},An=a_("localStorage"),Au=a_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Jc("@firebase/database"),dS=function(){let t=1;return function(){return t++}}(),u_=function(t){const e=nC(t),n=new XE;n.update(e);const r=n.digest();return Kc.encodeByteArray(r)},vs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=vs.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let bn=null,Ef=!0;const hS=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ir.logLevel=V.VERBOSE,bn=Ir.log.bind(Ir),e&&Au.set("logging_enabled",!0)):typeof t=="function"?bn=t:(bn=null,Au.remove("logging_enabled"))},Se=function(...t){if(Ef===!0&&(Ef=!1,bn===null&&Au.get("logging_enabled")===!0&&hS(!0)),bn){const e=vs.apply(null,t);bn(e)}},ys=function(t){return function(...e){Se(t,...e)}},Du=function(...t){const e="FIREBASE INTERNAL ERROR: "+vs(...t);Ir.error(e)},Lt=function(...t){const e=`FIREBASE FATAL ERROR: ${vs(...t)}`;throw Ir.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+vs(...t);Ir.warn(e)},fS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},c_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zr="[MIN_NAME]",Hn="[MAX_NAME]",Yr=function(t,e){if(t===e)return 0;if(t===zr||e===Hn)return-1;if(e===zr||t===Hn)return 1;{const n=Cf(t),r=Cf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},mS=function(t,e){return t===e?0:t<e?-1:1},ci=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},ed=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=ed(t[e[r]]);return n+="}",n},d_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const h_=function(t){S(!c_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},gS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_S=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const yS=new RegExp("^-?(0*)\\d{1,10}$"),wS=-2147483648,ES=2147483647,Cf=function(t){if(yS.test(t)){const e=Number(t);if(e>=wS&&e<=ES)return e}return null},Jr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},CS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Tr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="5",f_="v",p_="s",m_="r",g_="f",__=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,v_="ls",y_="p",Lu="ac",w_="websocket",E_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=An.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&An.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function TS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function S_(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===w_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===E_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TS(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(){this.counters_={}}incrementCounter(e,n=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ME(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea={},Ca={};function nd(t){const e=t.toString();return Ea[e]||(Ea[e]=new kS),Ea[e]}function RS(t,e){const n=t.toString();return Ca[n]||(Ca[n]=e()),Ca[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Jr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="start",PS="close",xS="pLPCommand",OS="pRTLPCB",I_="id",T_="pw",k_="ser",AS="cb",DS="seg",LS="ts",MS="d",bS="dframe",R_=1870,N_=30,FS=R_-N_,US=25e3,jS=3e4;class gr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ys(e),this.stats_=nd(n),this.urlFn=a=>(this.appCheckToken&&(a[Lu]=this.appCheckToken),S_(n,E_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jS)),pS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sf)this.id=l,this.password=a;else if(o===PS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Sf]="t",r[k_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[AS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[f_]=td,this.transportSessionId&&(r[p_]=this.transportSessionId),this.lastSessionId&&(r[v_]=this.lastSessionId),this.applicationId&&(r[y_]=this.applicationId),this.appCheckToken&&(r[Lu]=this.appCheckToken),typeof location<"u"&&location.hostname&&__.test(location.hostname)&&(r[m_]=g_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gr.forceAllow_=!0}static forceDisallow(){gr.forceDisallow_=!0}static isAvailable(){return gr.forceAllow_?!0:!gr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gS()&&!_S()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Kg(n),i=d_(r,FS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[bS]="t",r[I_]=e,r[T_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dS(),window[xS+this.uniqueCallbackIdentifier]=e,window[OS+this.uniqueCallbackIdentifier]=n,this.myIFrame=rd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[I_]=this.myID,e[T_]=this.myPW,e[k_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+N_+r.length<=R_;){const o=this.pendingSegs.shift();r=r+"&"+DS+i+"="+o.seg+"&"+LS+i+"="+o.ts+"&"+MS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(US)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=16384,WS=45e3;let Ho=null;typeof MozWebSocket<"u"?Ho=MozWebSocket:typeof WebSocket<"u"&&(Ho=WebSocket);class rt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ys(this.connId),this.stats_=nd(n),this.connURL=rt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[f_]=td,typeof location<"u"&&location.hostname&&__.test(location.hostname)&&(o[m_]=g_),n&&(o[p_]=n),r&&(o[v_]=r),i&&(o[Lu]=i),s&&(o[y_]=s),S_(e,w_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,An.set("previous_websocket_failure",!0);try{let r;Zg(),this.mySock=new Ho(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ho!==null&&!rt.forceDisallow_}static previouslyFailed(){return An.isInMemoryStorage||An.get("previous_websocket_failure")===!0}markConnectionHealthy(){An.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Zi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=d_(n,zS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gr,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let r=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rt];else{const i=this.transports_=[];for(const s of ts.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ts.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=6e4,VS=5e3,HS=10*1024,$S=100*1024,Sa="t",If="d",GS="s",Tf="r",KS="e",kf="o",Rf="a",Nf="n",Pf="p",qS="h";class QS{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ys("c:"+this.id+":"),this.transportManager_=new ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$S?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sa in e){const n=e[Sa];n===Rf?this.upgradeIfSecondaryHealthy_():n===Tf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===kf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ci("t",e),r=ci("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ci("t",e),r=ci("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ci(Sa,e);if(If in e){const r=e[If];if(n===qS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Nf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===GS?this.onConnectionShutdown_(r):n===Tf?this.onReset_(r):n===KS?Du("Server Error: "+r):n===kf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Du("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),td!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(An.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends x_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $o}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=32,Of=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new H("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mn(t){return t.pieces_.length-t.pieceNum_}function $(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function O_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function YS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function A_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function D_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Ae(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Ae($(t),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function id(t,e){if(mn(t)!==mn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function it(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(mn(t)>mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class JS{constructor(e,n){this.errorPrefix_=n,this.parts_=A_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Rl(this.parts_[r]);L_(this)}}function XS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Rl(e),L_(t)}function ZS(t){const e=t.parts_.pop();t.byteLength_-=Rl(e),t.parts_.length>0&&(t.byteLength_-=1)}function L_(t){if(t.byteLength_>Of)throw new Error(t.errorPrefix_+"has a key path longer than "+Of+" bytes ("+t.byteLength_+").");if(t.parts_.length>xf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xf+") or object contains a cycle "+Nn(t))}function Nn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends x_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new sd}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=1e3,eI=60*5*1e3,Af=30*1e3,tI=1.3,nI=3e4,rI="server_kill",Df=3;class Nt extends P_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Nt.nextPersistentConnectionId_++,this.log_=ys("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=di,this.maxReconnectDelay_=eI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Zg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$o.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pe(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new kl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Nt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ut(e,"w")){const r=Ur(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||JE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Af)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=YE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Du("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nI&&(this.reconnectDelay_=di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new QS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Fe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(rI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Fe(c),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ku(this.interruptReasons_)&&(this.reconnectDelay_=di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ed(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Df&&(this.reconnectDelay_=Af,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Df&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+l_.replace(/\./g,"-")]=1,Qc()?e["framework.cordova"]=1:Xg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$o.getInstance().currentlyOnline();return ku(this.interruptReasons_)&&e}}Nt.nextPersistentConnectionId_=0;Nt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new b(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new b(zr,e),i=new b(zr,n);return this.compare(r,i)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs;class M_ extends Nl{static get __EMPTY_NODE(){return Gs}static set __EMPTY_NODE(e){Gs=e}compare(e,n){return Yr(e.name,n.name)}isDefinedOn(e){throw Kr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return b.MIN}maxPost(){return new b(Hn,Gs)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,Gs)}toString(){return".key"}}const kr=new M_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??De.EMPTY_NODE,this.right=s??De.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class iI{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ks(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ks(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ks(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new iI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e){return Yr(t.name,e.name)}function od(t,e){return Yr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu;function oI(t){Mu=t}const b_=function(t){return typeof t=="number"?"number:"+h_(t):"string:"+t},F_=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else S(t===Mu||t.isEmpty(),"priority of unexpected type.");S(t===Mu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),F_(this.priorityNode_)}static set __childrenNodeConstructor(e){Lf=e}static get __childrenNodeConstructor(){return Lf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:M(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+b_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=h_(this.value_):e+=this.value_,this.lazyHash_=u_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U_,j_;function lI(t){U_=t}function aI(t){j_=t}class uI extends Nl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Yr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Hn,new de("[PRIORITY-POST]",j_))}makePost(e,n){const r=U_(e);return new b(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const ne=new uI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=Math.log(2);class dI{constructor(e){const n=s=>parseInt(Math.log(s)/cI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Go=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new fe(h,c.node,fe.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new fe(h,c.node,fe.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const w=c-_,p=c;c-=_;const f=i(w+1,p),m=t[w],y=n?n(m):m;g(new fe(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),w=Math.pow(2,a.count-(_+1));v?h(w,fe.BLACK):(h(w,fe.BLACK),h(w,fe.RED))}return d},o=new dI(t.length),l=s(o);return new De(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia;const rr={};class St{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(rr&&ne,"ChildrenNode.ts has not been loaded"),Ia=Ia||new St({".priority":rr},{".priority":ne}),Ia}get(e){const n=Ur(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,n){S(e!==kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(b.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Go(r,e.getCompare()):l=rr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new St(d,u)}addToIndexes(e,n){const r=Wo(this.indexes_,(i,s)=>{const o=Ur(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===rr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(b.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Go(l,o.getCompare())}else return rr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new St(r,this.indexSet_)}removeFromIndexes(e,n){const r=Wo(this.indexes_,i=>{if(i===rr)return i;{const s=n.get(e.name);return s?i.remove(new b(e.name,s)):i}});return new St(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&F_(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return hi||(hi=new A(new De(od),null,St.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hi}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?hi:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new b(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?hi:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{S(M(e)!==".priority"||mn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild($(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ne,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+b_(this.getPriority().val())+":"),this.forEachChild(ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":u_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new b(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new b(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new b(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ws?-1:0}withIndex(e){if(e===kr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===kr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ne),i=n.getIterator(ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===kr?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hI extends A{constructor(){super(new De(od),A.EMPTY_NODE,St.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const ws=new hI;Object.defineProperties(b,{MIN:{value:new b(zr,A.EMPTY_NODE)},MAX:{value:new b(Hn,ws)}});M_.__EMPTY_NODE=A.EMPTY_NODE;de.__childrenNodeConstructor=A;oI(ws);aI(ws);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=!0;function _e(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,_e(e))}if(!(t instanceof Array)&&fI){const n=[];let r=!1;if(Ue(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=_e(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new b(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=Go(n,sI,o=>o.name,od);if(r){const o=Go(n,ne.getCompare());return new A(s,_e(e),new St({".priority":o},{".priority":ne}))}else return new A(s,_e(e),St.Default)}else{let n=A.EMPTY_NODE;return Ue(t,(r,i)=>{if(Ut(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}lI(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI extends Nl{constructor(e){super(),this.indexPath_=e,S(!U(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Yr(e.name,n.name):s}makePost(e,n){const r=_e(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new b(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,ws);return new b(Hn,e)}toString(){return A_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI extends Nl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Yr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,n){const r=_e(e);return new b(n,r)}toString(){return".value"}}const gI=new mI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){return{type:"value",snapshotNode:t}}function Wr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _I(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ns(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Wr(n,r)):o.trackChildChange(rs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(ns(i,s))}),n.isLeafNode()||n.forEachChild(ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(rs(i,s,o))}else r.trackChildChange(Wr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.indexedFilter_=new ld(e.getIndex()),this.index_=e.getIndex(),this.startPost_=is.getStartPost_(e),this.endPost_=is.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new b(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ne,(o,l)=>{s.matches(new b(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new b(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new b(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(rs(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ns(n,c));const v=l.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Wr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ns(u.name,u.node)),s.trackChildChange(Wr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zr}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new ad;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yI(t){return t.loadsAllData()?new ld(t.getIndex()):t.hasLimit()?new vI(t):new is(t)}function Mf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===gI?n="$value":t.index_===kr?n="$key":(S(t.index_ instanceof pI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends P_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ys("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ko.getListenId_(e,r),l={};this.listens_[o]=l;const a=Mf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Ur(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Ko.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Mf(e._queryParams),r=e._path.toString(),i=new kl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Zi(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(){return{value:null,children:new Map}}function W_(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,qo());const i=t.children.get(r);e=$(e),W_(i,e,n)}}function bu(t,e,n){t.value!==null?n(e,t.value):EI(t,(r,i)=>{const s=new H(e.toString()+"/"+r);bu(i,s,n)})}function EI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=10*1e3,SI=30*1e3,II=5*60*1e3;class TI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new CI(e);const r=Ff+(SI-Ff)*Math.random();Pi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ue(e,(i,s)=>{s>0&&Ut(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*II))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function B_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ud(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=st.ACK_USER_WRITE,this.source=B_()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new Qo(W(),n,this.revert)}}else return S(M(this.path)===e,"operationForChild called for unrelated child."),new Qo($(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.source=e,this.path=n,this.type=st.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new ss(this.source,W()):new ss(this.source,$(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=st.OVERWRITE}operationForChild(e){return U(this.path)?new $n(this.source,W(),this.snap.getImmediateChild(e)):new $n(this.source,$(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=st.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new $n(this.source,W(),n.value):new os(this.source,W(),n)}else return S(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new os(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function RI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(_I(o.childName,o.snapshotNode))}),fi(t,i,"child_removed",e,r,n),fi(t,i,"child_added",e,r,n),fi(t,i,"child_moved",s,r,n),fi(t,i,"child_changed",e,r,n),fi(t,i,"value",e,r,n),i}function fi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>PI(t,l,a)),o.forEach(l=>{const a=NI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function NI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function PI(t,e,n){if(e.childName==null||n.childName==null)throw Kr("Should only compare child_ events.");const r=new b(e.childName,e.snapshotNode),i=new b(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e){return{eventCache:t,serverCache:e}}function xi(t,e,n,r){return Pl(new Gn(e,n,r),t.serverCache)}function V_(t,e,n,r){return Pl(t.eventCache,new Gn(e,n,r))}function Fu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Kn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta;const xI=()=>(Ta||(Ta=new De(mS)),Ta);class Q{constructor(e,n=xI()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Ue(e,(r,i)=>{n=n.set(new H(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(U(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue($(e),n);return s!=null?{path:ae(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree($(e)):new Q(null)}}set(e,n){if(U(e))return new Q(n,this.children);{const r=M(e),s=(this.children.get(r)||new Q(null)).set($(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove($(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get($(e)):null}}setTree(e,n){if(U(e))return n;{const r=M(e),s=(this.children.get(r)||new Q(null)).setTree($(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_($(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_($(e),ae(n,i),r):new Q(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new Q(null))}}function Oi(t,e,n){if(U(e))return new at(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ae(i,e);return s=s.updateChild(o,n),new at(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new at(s)}}}function Uf(t,e,n){let r=t;return Ue(n,(i,s)=>{r=Oi(r,ae(e,i),s)}),r}function jf(t,e){if(U(e))return at.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new at(n)}}function Uu(t,e){return er(t,e)!=null}function er(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ae(n.path,e)):null}function zf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(r,i)=>{e.push(new b(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new b(r,i.value))}),e}function hn(t,e){if(U(e))return t;{const n=er(t,e);return n!=null?new at(new Q(n)):new at(t.writeTree_.subtree(e))}}function ju(t){return t.writeTree_.isEmpty()}function Br(t,e){return H_(W(),t.writeTree_,e)}function H_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=H_(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t,e){return q_(e,t)}function OI(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Oi(t.visibleWrites,e,n)),t.lastWriteId=r}function AI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function DI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&LI(l,r.path)?i=!1:it(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return MI(t),!0;if(r.snap)t.visibleWrites=jf(t.visibleWrites,r.path);else{const l=r.children;Ue(l,a=>{t.visibleWrites=jf(t.visibleWrites,ae(r.path,a))})}return!0}else return!1}function LI(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(ae(t.path,n),e))return!0;return!1}function MI(t){t.visibleWrites=$_(t.allWrites,bI,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function bI(t){return t.visible}function $_(t,e,n){let r=at.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)it(n,o)?(l=Ae(n,o),r=Oi(r,l,s.snap)):it(o,n)&&(l=Ae(o,n),r=Oi(r,W(),s.snap.getChild(l)));else if(s.children){if(it(n,o))l=Ae(n,o),r=Uf(r,l,s.children);else if(it(o,n))if(l=Ae(o,n),U(l))r=Uf(r,W(),s.children);else{const a=Ur(s.children,M(l));if(a){const u=a.getChild($(l));r=Oi(r,W(),u)}}}else throw Kr("WriteRecord should have .snap or .children")}}return r}function G_(t,e,n,r,i){if(!r&&!i){const s=er(t.visibleWrites,e);if(s!=null)return s;{const o=hn(t.visibleWrites,e);if(ju(o))return n;if(n==null&&!Uu(o,W()))return null;{const l=n||A.EMPTY_NODE;return Br(o,l)}}}else{const s=hn(t.visibleWrites,e);if(!i&&ju(s))return n;if(!i&&n==null&&!Uu(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(it(u.path,e)||it(e,u.path))},l=$_(t.allWrites,o,e),a=n||A.EMPTY_NODE;return Br(l,a)}}}function FI(t,e,n){let r=A.EMPTY_NODE;const i=er(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=hn(t.visibleWrites,e);return n.forEachChild(ne,(o,l)=>{const a=Br(hn(s,new H(o)),l);r=r.updateImmediateChild(o,a)}),zf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=hn(t.visibleWrites,e);return zf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function UI(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(Uu(t.visibleWrites,s))return null;{const o=hn(t.visibleWrites,s);return ju(o)?i.getChild(n):Br(o,i.getChild(n))}}function jI(t,e,n,r){const i=ae(e,n),s=er(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=hn(t.visibleWrites,i);return Br(o,r.getNode().getImmediateChild(n))}else return null}function zI(t,e){return er(t.visibleWrites,e)}function WI(t,e,n,r,i,s,o){let l;const a=hn(t.visibleWrites,e),u=er(a,W());if(u!=null)l=u;else if(n!=null)l=Br(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function BI(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function Yo(t,e,n,r){return G_(t.writeTree,t.treePath,e,n,r)}function hd(t,e){return FI(t.writeTree,t.treePath,e)}function Wf(t,e,n,r){return UI(t.writeTree,t.treePath,e,n,r)}function Jo(t,e){return zI(t.writeTree,ae(t.treePath,e))}function VI(t,e,n,r,i,s){return WI(t.writeTree,t.treePath,e,n,r,i,s)}function fd(t,e,n){return jI(t.writeTree,t.treePath,e,n)}function K_(t,e){return q_(ae(t.treePath,e),t.writeTree)}function q_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,rs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ns(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Wr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,rs(r,e.snapshotNode,i.oldSnap));else throw Kr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Q_=new $I;class pd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Gn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Kn(this.viewCache_),s=VI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){return{filter:t}}function KI(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qI(t,e,n,r,i){const s=new HI;let o,l;if(n.type===st.OVERWRITE){const u=n;u.source.fromUser?o=zu(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Xo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===st.MERGE){const u=n;u.source.fromUser?o=YI(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Wu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===st.ACK_USER_WRITE){const u=n;u.revert?o=ZI(t,e,u.path,r,i,s):o=JI(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===st.LISTEN_COMPLETE)o=XI(t,e,n.path,r,s);else throw Kr("Unknown operation type: "+n.type);const a=s.getChanges();return QI(e,o,a),{viewCache:o,changes:a}}function QI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Fu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(z_(Fu(e)))}}function Y_(t,e,n,r,i,s){const o=e.eventCache;if(Jo(r,n)!=null)return e;{let l,a;if(U(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Kn(e),d=u instanceof A?u:A.EMPTY_NODE,c=hd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Yo(r,Kn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){S(mn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Wf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=$(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Wf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=fd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return xi(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Xo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=M(n);if(!a.isCompleteForPath(n)&&mn(n)>1)return e;const _=$(n),w=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),w):u=d.updateChild(a.getNode(),g,w,_,Q_,null)}const c=V_(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),h=new pd(i,c,s);return Y_(t,c,n,i,h,l)}function zu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new pd(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=xi(e,u,!0,t.filter.filtersNodes());else{const c=M(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=xi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=$(n),g=l.getNode().getImmediateChild(c);let _;if(U(h))_=r;else{const v=d.getCompleteChild(c);v!=null?O_(h)===".priority"&&v.getChild(D_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=A.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=xi(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Bf(t,e){return t.eventCache.isCompleteForChild(e)}function YI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ae(n,a);Bf(e,M(d))&&(l=zu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ae(n,a);Bf(e,M(d))||(l=zu(t,l,d,u,i,s,o))}),l}function Vf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Wu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=Vf(t,g,h);a=Xo(t,a,new H(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=Vf(t,_,h);a=Xo(t,a,new H(c),v,i,s,o,l)}}),a}function JI(t,e,n,r,i,s,o){if(Jo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Xo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new Q(null);return a.getNode().forEachChild(kr,(d,c)=>{u=u.set(new H(d),c)}),Wu(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((d,c)=>{const h=ae(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Wu(t,e,n,u,i,s,l,o)}}function XI(t,e,n,r,i){const s=e.serverCache,o=V_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return Y_(t,o,n,r,Q_,i)}function ZI(t,e,n,r,i,s){let o;if(Jo(r,n)!=null)return e;{const l=new pd(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Yo(r,Kn(e));else{const c=e.serverCache.getNode();S(c instanceof A,"serverChildren would be complete if leaf node"),d=hd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=M(n);let c=fd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,$(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,A.EMPTY_NODE,$(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yo(r,Kn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Jo(r,W())!=null,xi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ld(r.getIndex()),s=yI(r);this.processor_=GI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new Gn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Gn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Pl(c,d),this.eventGenerator_=new kI(this.query_)}get query(){return this.query_}}function tT(t){return t.viewCache_.serverCache.getNode()}function nT(t,e){const n=Kn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function Hf(t){return t.eventRegistrations_.length===0}function rT(t,e){t.eventRegistrations_.push(e)}function $f(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Gf(t,e,n,r){e.type===st.MERGE&&e.source.queryId!==null&&(S(Kn(t.viewCache_),"We should always have a full cache before handling merges"),S(Fu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=qI(t.processor_,i,e,n,r);return KI(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,J_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function iT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(s,o)=>{r.push(Wr(s,o))}),n.isFullyInitialized()&&r.push(z_(n.getNode())),J_(t,r,n.getNode(),e)}function J_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return RI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;class sT{constructor(){this.views=new Map}}function oT(t){S(!Zo,"__referenceConstructor has already been defined"),Zo=t}function lT(){return S(Zo,"Reference.ts has not been loaded"),Zo}function aT(t){return t.views.size===0}function md(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Gf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Gf(o,e,n,r));return s}}function uT(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Yo(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=hd(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=Pl(new Gn(l,a,!1),new Gn(r,i,!1));return new eT(e,u)}return o}function cT(t,e,n,r,i,s){const o=uT(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rT(o,n),iT(o,n)}function dT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=gn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat($f(u,n,r)),Hf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat($f(a,n,r)),Hf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!gn(t)&&s.push(new(lT())(e._repo,e._path)),{removed:s,events:o}}function X_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rr(t,e){let n=null;for(const r of t.views.values())n=n||nT(r,e);return n}function Z_(t,e){if(e._queryParams.loadsAllData())return xl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ev(t,e){return Z_(t,e)!=null}function gn(t){return xl(t)!=null}function xl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;function hT(t){S(!el,"__referenceConstructor has already been defined"),el=t}function fT(){return S(el,"Reference.ts has not been loaded"),el}let pT=1;class Kf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=BI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tv(t,e,n,r,i){return OI(t.pendingWriteTree_,e,n,r,i),i?Es(t,new $n(B_(),e,n)):[]}function Dn(t,e,n=!1){const r=AI(t.pendingWriteTree_,e);if(DI(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(W(),!0):Ue(r.children,o=>{s=s.set(new H(o),!0)}),Es(t,new Qo(r.path,s,n))}else return[]}function Ol(t,e,n){return Es(t,new $n(ud(),e,n))}function mT(t,e,n){const r=Q.fromObject(n);return Es(t,new os(ud(),e,r))}function gT(t,e){return Es(t,new ss(ud(),e))}function _T(t,e,n){const r=_d(t,n);if(r){const i=vd(r),s=i.path,o=i.queryId,l=Ae(s,e),a=new ss(cd(o),l);return yd(t,s,a)}else return[]}function Bu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||ev(o,e))){const a=dT(o,e,n,r);aT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>gn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=wT(h);for(let _=0;_<g.length;++_){const v=g[_],w=v.query,p=iv(t,v);t.listenProvider_.startListening(Ai(w),tl(t,w),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Ai(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Al(h));t.listenProvider_.stopListening(Ai(h),g)}))}ET(t,u)}return l}function vT(t,e,n,r){const i=_d(t,r);if(i!=null){const s=vd(i),o=s.path,l=s.queryId,a=Ae(o,e),u=new $n(cd(l),a,n);return yd(t,o,u)}else return[]}function yT(t,e,n,r){const i=_d(t,r);if(i){const s=vd(i),o=s.path,l=s.queryId,a=Ae(o,e),u=Q.fromObject(n),d=new os(cd(l),a,u);return yd(t,o,d)}else return[]}function qf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Ae(h,i);s=s||Rr(g,_),o=o||gn(g)});let l=t.syncPointTree_.get(i);l?(o=o||gn(l),s=s||Rr(l,W())):(l=new sT,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=Rr(_,W());v&&(s=s.updateImmediateChild(g,v))}));const u=ev(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Al(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=CT();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=dd(t.pendingWriteTree_,i);let c=cT(l,e,n,d,s,a);if(!u&&!o&&!r){const h=Z_(l,e);c=c.concat(ST(t,e,h))}return c}function gd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ae(o,e),u=Rr(l,a);if(u)return u});return G_(i,e,s,n,!0)}function Es(t,e){return nv(e,t.syncPointTree_,null,dd(t.pendingWriteTree_,W()))}function nv(t,e,n,r){if(U(t.path))return rv(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=Rr(i,W()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=K_(r,o);s=s.concat(nv(l,a,u,d))}return i&&(s=s.concat(md(i,t,r,n))),s}}function rv(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=Rr(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=K_(r,o),d=t.operationForChild(o);d&&(s=s.concat(rv(d,l,a,u)))}),i&&(s=s.concat(md(i,t,r,n))),s}function iv(t,e){const n=e.query,r=tl(t,n);return{hashFn:()=>(tT(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?_T(t,n._path,r):gT(t,n._path);{const s=vS(i,n);return Bu(t,n,null,s)}}}}function tl(t,e){const n=Al(e);return t.queryToTagMap.get(n)}function Al(t){return t._path.toString()+"$"+t._queryIdentifier}function _d(t,e){return t.tagToQueryMap.get(e)}function vd(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function yd(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=dd(t.pendingWriteTree_,e);return md(r,n,i,null)}function wT(t){return t.fold((e,n,r)=>{if(n&&gn(n))return[xl(n)];{let i=[];return n&&(i=X_(n)),Ue(r,(s,o)=>{i=i.concat(o)}),i}})}function Ai(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(fT())(t._repo,t._path):t}function ET(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Al(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function CT(){return pT++}function ST(t,e,n){const r=e._path,i=tl(t,e),s=iv(t,n),o=t.listenProvider_.startListening(Ai(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!gn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!U(u)&&d&&gn(d))return[xl(d).query];{let h=[];return d&&(h=h.concat(X_(d).map(g=>g.query))),Ue(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Ai(d),tl(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wd(n)}node(){return this.node_}}class Ed{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Ed(this.syncTree_,n)}node(){return gd(this.syncTree_,this.path_)}}const IT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qf=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return kT(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},kT=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},RT=function(t,e,n,r){return Cd(e,new Ed(n,t),r)},sv=function(t,e,n){return Cd(t,new wd(e),n)};function Cd(t,e,n){const r=t.getPriority().val(),i=Qf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Qf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(ne,(l,a)=>{const u=Cd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Id(t,e){let n=e instanceof H?e:new H(e),r=t,i=M(n);for(;i!==null;){const s=Ur(r.node.children,i)||{children:{},childCount:0};r=new Sd(i,r,s),n=$(n),i=M(n)}return r}function Xr(t){return t.node.value}function ov(t,e){t.node.value=e,Vu(t)}function lv(t){return t.node.childCount>0}function NT(t){return Xr(t)===void 0&&!lv(t)}function Dl(t,e){Ue(t.node.children,(n,r)=>{e(new Sd(n,t,r))})}function av(t,e,n,r){n&&!r&&e(t),Dl(t,i=>{av(i,e,!0,r)}),n&&r&&e(t)}function PT(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Cs(t){return new H(t.parent===null?t.name:Cs(t.parent)+"/"+t.name)}function Vu(t){t.parent!==null&&xT(t.parent,t.name,t)}function xT(t,e,n){const r=NT(n),i=Ut(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Vu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=/[\[\].#$\/\u0000-\u001F\u007F]/,AT=/[\[\].#$\u0000-\u001F\u007F]/,ka=10*1024*1024,uv=function(t){return typeof t=="string"&&t.length!==0&&!OT.test(t)},cv=function(t){return typeof t=="string"&&t.length!==0&&!AT.test(t)},DT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),cv(t)},LT=function(t,e,n,r){r&&e===void 0||Td(Yc(t,"value"),e,n)},Td=function(t,e,n){const r=n instanceof H?new JS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Nn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Nn(r)+" with contents = "+e.toString());if(c_(e))throw new Error(t+"contains "+e.toString()+" "+Nn(r));if(typeof e=="string"&&e.length>ka/3&&Rl(e)>ka)throw new Error(t+"contains a string greater than "+ka+" utf8 bytes "+Nn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ue(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!uv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Nn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);XS(r,o),Td(t,l,r),ZS(r)}),i&&s)throw new Error(t+' contains ".value" child '+Nn(r)+" in addition to actual children.")}},dv=function(t,e,n,r){if(!(r&&n===void 0)&&!cv(n))throw new Error(Yc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},MT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dv(t,e,n,r)},bT=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},FT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DT(n))throw new Error(Yc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!id(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function hv(t,e,n){kd(t,n),fv(t,r=>id(r,e))}function Mt(t,e,n){kd(t,n),fv(t,r=>it(r,e)||it(e,r))}function fv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(jT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function jT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();bn&&Se("event: "+n.toString()),Jr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="repo_interrupt",WT=25;class BT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qo(),this.transactionQueueTree_=new Sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VT(t,e,n){if(t.stats_=nd(t.repoInfo_),t.forceRestClient_||CS())t.server_=new Ko(t.repoInfo_,(r,i,s,o)=>{Yf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Nt(t.repoInfo_,e,(r,i,s,o)=>{Yf(t,r,i,s,o)},r=>{Jf(t,r)},r=>{$T(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=RS(t.repoInfo_,()=>new TI(t.stats_,t.server_)),t.infoData_=new wI,t.infoSyncTree_=new Kf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ol(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Nd(t,"connected",!1),t.serverSyncTree_=new Kf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Mt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function HT(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Rd(t){return IT({timestamp:HT(t)})}function Yf(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Wo(n,u=>_e(u));o=yT(t.serverSyncTree_,s,a,i)}else{const a=_e(n);o=vT(t.serverSyncTree_,s,a,i)}else if(r){const a=Wo(n,u=>_e(u));o=mT(t.serverSyncTree_,s,a)}else{const a=_e(n);o=Ol(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ll(t,s)),Mt(t.eventQueue_,l,o)}function Jf(t,e){Nd(t,"connected",e),e===!1&&KT(t)}function $T(t,e){Ue(e,(n,r)=>{Nd(t,n,r)})}function Nd(t,e,n){const r=new H("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=Ol(t.infoSyncTree_,r,i);Mt(t.eventQueue_,r,s)}function pv(t){return t.nextWriteId_++}function GT(t,e,n,r,i){Pd(t,"set",{path:e.toString(),value:n,priority:r});const s=Rd(t),o=_e(n,r),l=gd(t.serverSyncTree_,e),a=sv(o,l,s),u=pv(t),d=tv(t.serverSyncTree_,e,a,u,!0);kd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Fe("set at "+e+" failed: "+h);const v=Dn(t.serverSyncTree_,u,!_);Mt(t.eventQueue_,e,v),YT(t,i,h,g)});const c=yv(t,e);Ll(t,c),Mt(t.eventQueue_,c,[])}function KT(t){Pd(t,"onDisconnectEvents");const e=Rd(t),n=qo();bu(t.onDisconnect_,W(),(i,s)=>{const o=RT(i,s,t.serverSyncTree_,e);W_(n,i,o)});let r=[];bu(n,W(),(i,s)=>{r=r.concat(Ol(t.serverSyncTree_,i,s));const o=yv(t,i);Ll(t,o)}),t.onDisconnect_=qo(),Mt(t.eventQueue_,W(),r)}function qT(t,e,n){let r;M(e._path)===".info"?r=qf(t.infoSyncTree_,e,n):r=qf(t.serverSyncTree_,e,n),hv(t.eventQueue_,e._path,r)}function Xf(t,e,n){let r;M(e._path)===".info"?r=Bu(t.infoSyncTree_,e,n):r=Bu(t.serverSyncTree_,e,n),hv(t.eventQueue_,e._path,r)}function QT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zT)}function Pd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function YT(t,e,n,r){e&&Jr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function mv(t,e,n){return gd(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function xd(t,e=t.transactionQueueTree_){if(e||Ml(t,e),Xr(e)){const n=_v(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&JT(t,Cs(e),n)}else lv(e)&&Dl(e,n=>{xd(t,n)})}function JT(t,e,n){const r=n.map(u=>u.currentWriteId),i=mv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];S(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ae(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Pd(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Dn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ml(t,Id(t.transactionQueueTree_,e)),xd(t,t.transactionQueueTree_),Mt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Jr(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Fe("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ll(t,e)}},o)}function Ll(t,e){const n=gv(t,e),r=Cs(n),i=_v(t,n);return XT(t,i,r),r}function XT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ae(n,a.path);let d=!1,c;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=WT)d=!0,c="maxretry",i=i.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=mv(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){Td("transaction failed: Data returned ",g,a.path);let _=_e(g);typeof g=="object"&&g!=null&&Ut(g,".priority")||(_=_.updatePriority(h.getPriority()));const w=a.currentWriteId,p=Rd(t),f=sv(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=pv(t),o.splice(o.indexOf(w),1),i=i.concat(tv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Dn(t.serverSyncTree_,w,!0))}else d=!0,c="nodata",i=i.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0))}Mt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Ml(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Jr(r[l]);xd(t,t.transactionQueueTree_)}function gv(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Xr(r)===void 0;)r=Id(r,n),e=$(e),n=M(e);return r}function _v(t,e){const n=[];return vv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function vv(t,e,n){const r=Xr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Dl(e,i=>{vv(t,i,n)})}function Ml(t,e){const n=Xr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ov(e,n.length>0?n:void 0)}Dl(e,r=>{Ml(t,r)})}function yv(t,e){const n=Cs(gv(t,e)),r=Id(t.transactionQueueTree_,e);return PT(r,i=>{Ra(t,i)}),Ra(t,r),av(r,i=>{Ra(t,i)}),n}function Ra(t,e){const n=Xr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ov(e,void 0):n.length=s+1,Mt(t.eventQueue_,Cs(e),i);for(let o=0;o<r.length;o++)Jr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ek(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zf=function(t,e){const n=tk(t),r=n.namespace;n.domain==="firebase.com"&&Lt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new C_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},tk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=ZT(t.substring(d,c)));const h=ek(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class Ev{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:O_(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=bf(this._queryParams),n=ed(e);return n==="{}"?"default":n}get _queryObject(){return bf(this._queryParams)}isEqual(e){if(e=je(e),!(e instanceof Od))return!1;const n=this._repo===e._repo,r=id(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+YS(this._path)}}class jt extends Od{constructor(e,n){super(e,n,new ad,!1)}get parent(){const e=D_(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ls{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=nl(this.ref,e);return new ls(this._node.getChild(n),r,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ls(i,nl(this.ref,r),ne)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lo(t,e){return t=je(t),t._checkNotDeleted("ref"),e!==void 0?nl(t._root,e):t._root}function nl(t,e){return t=je(t),M(t._path)===null?MT("child","path",e,!1):dv("child","path",e,!1),new jt(t._repo,ae(t._path,e))}function rk(t,e){t=je(t),bT("set",t._path),LT("set",e,t._path,!1);const n=new kl;return GT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Ad{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new wv("value",this,new ls(e.snapshotNode,new jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ev(this,e,n):null}matches(e){return e instanceof Ad?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Dd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ev(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const r=nl(new jt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new wv(e.type,this,new ls(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Dd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Cv(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Xf(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new nk(n,s||void 0),l=e==="value"?new Ad(o):new Dd(e,o);return qT(t._repo,t,l),()=>Xf(t._repo,t,l)}function Hu(t,e,n,r){return Cv(t,"value",e,n,r)}function ik(t,e,n,r){return Cv(t,"child_added",e,n,r)}oT(jt);hT(jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk="FIREBASE_DATABASE_EMULATOR_HOST",$u={};let ok=!1;function lk(t,e,n,r){t.repoInfo_=new C_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function ak(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&vf&&(u=vf[sk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Zf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Tr(Tr.OWNER):new IS(t.name,t.options,e);FT("Invalid Firebase Database URL",o),U(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=ck(l,t,d,new SS(t.name,n));return new dk(c,t)}function uk(t,e){const n=$u[e];(!n||n[t.key]!==t)&&Lt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),QT(t),delete n[t.key]}function ck(t,e,n,r){let i=$u[e.name];i||(i={},$u[e.name]=i);let s=i[t.toURLString()];return s&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new BT(t,ok,n,r),i[t.toURLString()]=s,s}class dk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lt("Cannot call "+e+" on a deleted database.")}}function Gu(t=i_(),e){const n=Zc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=WE("database");r&&hk(n,...r)}return n}function hk(t,e,n,r={}){t=je(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Tr(Tr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:BE(r.mockUserToken,t.app.options.projectId);s=new Tr(o)}lk(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){aS(Qr),jr(new Bn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return ak(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),dn(yf,wf,t),dn(yf,wf,"esm2017")}Nt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fk();var pk="firebase",mk="10.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(pk,mk,"app");function Ld(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Sv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gk=Sv,Iv=new _s("auth","Firebase",Sv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new Jc("@firebase/auth");function _k(t,...e){rl.logLevel<=V.WARN&&rl.warn(`Auth (${Qr}): ${t}`,...e)}function ao(t,...e){rl.logLevel<=V.ERROR&&rl.error(`Auth (${Qr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,...e){throw Md(t,...e)}function _t(t,...e){return Md(t,...e)}function Tv(t,e,n){const r=Object.assign(Object.assign({},gk()),{[e]:n});return new _s("auth","Firebase",r).create(e,{appName:t.name})}function Pt(t){return Tv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Md(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Iv.create(t,...e)}function O(t,e,...n){if(!t)throw Md(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ao(e),new Error(e)}function bt(t,e){t||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vk(){return ep()==="http:"||ep()==="https:"}function ep(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vk()||VE()||"connection"in navigator)?navigator.onLine:!0}function wk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.shortDelay=e,this.longDelay=n,bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Qc()||Xg()}get(){return yk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e){bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=new Ss(3e4,6e4);function En(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cn(t,e,n,r,i={}){return Rv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=qr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),kv.fetch()(Nv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Rv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ek),e);try{const i=new Ik(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw qs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw qs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw qs(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Tv(t,d,u);ct(t,d)}}catch(i){if(i instanceof wn)throw i;ct(t,"network-request-failed",{message:String(i)})}}async function Is(t,e,n,r,i={}){const s=await Cn(t,e,n,r,i);return"mfaPendingCredential"in s&&ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Nv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bd(t.config,i):`${t.config.apiScheme}://${i}`}function Sk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ik{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),Ck.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_t(t,e,r);return i.customData._tokenResponse=n,i}function tp(t){return t!==void 0&&t.enterprise!==void 0}class Tk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Sk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function kk(t,e){return Cn(t,"GET","/v2/recaptchaConfig",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t,e){return Cn(t,"POST","/v1/accounts:delete",e)}async function Pv(t,e){return Cn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nk(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=Fd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Di(Na(i.auth_time)),issuedAtTime:Di(Na(i.iat)),expirationTime:Di(Na(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Na(t){return Number(t)*1e3}function Fd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const i=zo(n);return i?JSON.parse(i):(ao("Failed to decode base64 JWT payload"),null)}catch(i){return ao("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function np(t){const e=Fd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&Pk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Pk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){var e;const n=t.auth,r=await t.getIdToken(),i=await as(t,Pv(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xv(s.providerUserInfo):[],l=Ak(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new qu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function Ok(t){const e=je(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ak(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xv(t){return t.map(e=>{var{providerId:n}=e,r=Ld(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(t,e){const n=await Rv(t,{},async()=>{const r=qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Nv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",kv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Lk(t,e){return Cn(t,"POST","/v2/accounts:revokeToken",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):np(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=np(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Dk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Nr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await as(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Nk(this,e)}reload(){return Ok(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(Pt(this.auth));const e=await this.getIdToken();return await as(this,Rk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:T,providerData:N,stsTokenManager:P}=n;O(m&&P,e,"internal-error");const x=Nr.fromJSON(this.name,P);O(typeof m=="string",e,"internal-error"),Wt(c,e.name),Wt(h,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof T=="boolean",e,"internal-error"),Wt(g,e.name),Wt(_,e.name),Wt(v,e.name),Wt(w,e.name),Wt(p,e.name),Wt(f,e.name);const K=new Tt({uid:m,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:T,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(K.providerData=N.map(F=>Object.assign({},F))),w&&(K._redirectEventId=w),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new Nr;i.updateFromServerResponse(n);const s=new Tt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await il(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?xv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Nr;l.updateFromIdToken(r);const a=new Tt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new qu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=new Map;function kt(t){bt(t instanceof Function,"Expected a class definition");let e=rp.get(t);return e?(bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ov.type="NONE";const ip=Ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t,e,n){return`firebase:${t}:${e}:${n}`}class Pr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=uo(this.userKey,i.apiKey,s),this.fullPersistenceKey=uo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pr(kt(ip),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||kt(ip);const o=uo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Tt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Pr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Pr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Av(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bv(e))return"Blackberry";if(Fv(e))return"Webos";if(Ud(e))return"Safari";if((e.includes("chrome/")||Dv(e))&&!e.includes("edge/"))return"Chrome";if(Mv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Av(t=Te()){return/firefox\//i.test(t)}function Ud(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dv(t=Te()){return/crios\//i.test(t)}function Lv(t=Te()){return/iemobile/i.test(t)}function Mv(t=Te()){return/android/i.test(t)}function bv(t=Te()){return/blackberry/i.test(t)}function Fv(t=Te()){return/webos/i.test(t)}function bl(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Mk(t=Te()){var e;return bl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bk(){return HE()&&document.documentMode===10}function Uv(t=Te()){return bl(t)||Mv(t)||Fv(t)||bv(t)||/windows phone/i.test(t)||Lv(t)}function Fk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t,e=[]){let n;switch(t){case"Browser":n=sp(Te());break;case"Worker":n=`${sp(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e={}){return Cn(t,"GET","/v2/passwordPolicy",En(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=6;class Wk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new op(this),this.idTokenSubscription=new op(this),this.beforeStateQueue=new Uk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Pr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Pv(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(Pt(this));const n=e?je(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(Pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(Pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jk(this),n=new Wk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Lk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_k(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function tr(t){return je(t)}class op{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZE(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vk(t){Fl=t}function zv(t){return Fl.loadJS(t)}function Hk(){return Fl.recaptchaEnterpriseScript}function $k(){return Fl.gapiScript}function Gk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Kk="recaptcha-enterprise",qk="NO_RECAPTCHA";class Qk{constructor(e){this.type=Kk,this.auth=tr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{kk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Tk(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;tp(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(qk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&tp(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Hk();a.length!==0&&(a+=l),zv(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function lp(t,e,n,r=!1){const i=new Qk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await lp(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await lp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t,e){const n=Zc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bo(s,e??{}))return i;ct(i,"already-initialized")}return n.initialize({options:e})}function Jk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xk(t,e,n){const r=tr(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Wv(e),{host:o,port:l}=Zk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||e1()}function Wv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zk(t){const e=Wv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ap(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ap(o)}}}function ap(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function e1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function t1(t,e){return Cn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(t,e){return Is(t,"POST","/v1/accounts:signInWithPassword",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}async function i1(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends jd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new us(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new us(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qu(e,n,"signInWithPassword",n1);case"emailLink":return r1(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qu(e,r,"signUpPassword",t1);case"emailLink":return i1(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(t,e){return Is(t,"POST","/v1/accounts:signInWithIdp",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="http://localhost";class qn extends jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ld(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xr(e,n)}buildRequest(){const e={requestUri:s1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l1(t){const e=vi(yi(t)).link,n=e?vi(yi(e)).deep_link_id:null,r=vi(yi(t)).deep_link_id;return(r?vi(yi(r)).link:null)||r||n||e||t}class zd{constructor(e){var n,r,i,s,o,l;const a=vi(yi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=o1((i=a.mode)!==null&&i!==void 0?i:null);O(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=l1(e);try{return new zd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.providerId=Zr.PROVIDER_ID}static credential(e,n){return us._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zd.parseLink(n);return O(r,"argument-error"),us._fromEmailAndCode(e,r.code,r.tenantId)}}Zr.PROVIDER_ID="password";Zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Bv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Ts{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ts{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Ts{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e){return Is(t,"POST","/v1/accounts:signUp",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tt._fromIdTokenResponse(e,r,i),o=up(r);return new Qn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=up(r);return new Qn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function up(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new sl(e,n,r,i)}}function Vv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sl._fromErrorAndOperation(t,s,e,r):s})}async function u1(t,e,n=!1){const r=await as(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1(t,e,n=!1){const{auth:r}=t;if(pt(r.app))return Promise.reject(Pt(r));const i="reauthenticate";try{const s=await as(t,Vv(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=Fd(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),Qn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(t,e,n=!1){if(pt(t.app))return Promise.reject(Pt(t));const r="signIn",i=await Vv(t,r,e),s=await Qn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function d1(t,e){return Hv(tr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(t){const e=tr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function h1(t,e,n){if(pt(t.app))return Promise.reject(Pt(t));const r=tr(t),o=await Qu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",a1).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&$v(t),a}),l=await Qn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function f1(t,e,n){return pt(t.app)?Promise.reject(Pt(t)):d1(je(t),Zr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$v(t),r})}function p1(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function m1(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function g1(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function _1(t){return je(t).signOut()}const ol="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(){const t=Te();return Ud(t)||bl(t)}const y1=1e3,w1=10;class Kv extends Gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=v1()&&Fk(),this.fallbackToPolling=Uv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,w1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},y1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kv.type="LOCAL";const E1=Kv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv extends Gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qv.type="SESSION";const Qv=qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await C1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Wd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function I1(t){vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function T1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function R1(){return Yv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="firebaseLocalStorageDb",N1=1,ll="firebaseLocalStorage",Xv="fbase_key";class ks{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(t,e){return t.transaction([ll],e?"readwrite":"readonly").objectStore(ll)}function P1(){const t=indexedDB.deleteDatabase(Jv);return new ks(t).toPromise()}function Yu(){const t=indexedDB.open(Jv,N1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ll,{keyPath:Xv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ll)?e(r):(r.close(),await P1(),e(await Yu()))})})}async function cp(t,e,n){const r=jl(t,!0).put({[Xv]:e,value:n});return new ks(r).toPromise()}async function x1(t,e){const n=jl(t,!1).get(e),r=await new ks(n).toPromise();return r===void 0?null:r.value}function dp(t,e){const n=jl(t,!0).delete(e);return new ks(n).toPromise()}const O1=800,A1=3;class Zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>A1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(R1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await T1(),!this.activeServiceWorker)return;this.sender=new S1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||k1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yu();return await cp(e,ol,"1"),await dp(e,ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>x1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jl(i,!1).getAll();return new ks(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),O1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zv.type="LOCAL";const D1=Zv;new Ss(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t,e){return e?kt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd extends jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function M1(t){return Hv(t.auth,new Bd(t),t.bypassAuthState)}function b1(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),c1(n,new Bd(t),t.bypassAuthState)}async function F1(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),u1(n,new Bd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M1;case"linkViaPopup":case"linkViaRedirect":return F1;case"reauthViaPopup":case"reauthViaRedirect":return b1;default:ct(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=new Ss(2e3,1e4);class _r extends ey{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=Wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U1.get())};e()}}_r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="pendingRedirect",co=new Map;class z1 extends ey{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=co.get(this.auth._key());if(!e){try{const r=await W1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}co.set(this.auth._key(),e)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W1(t,e){const n=H1(e),r=V1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function B1(t,e){co.set(t._key(),e)}function V1(t){return kt(t._redirectPersistence)}function H1(t){return uo(j1,t.config.apiKey,t.name)}async function $1(t,e,n=!1){if(pt(t.app))return Promise.reject(Pt(t));const r=tr(t),i=L1(r,e),o=await new z1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=10*60*1e3;class K1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!q1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ty(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G1&&this.cachedEventUids.clear(),this.cachedEventUids.has(hp(e))}saveEventToCache(e){this.cachedEventUids.add(hp(e)),this.lastProcessedEventTime=Date.now()}}function hp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ty({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function q1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ty(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q1(t,e={}){return Cn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,J1=/^https?/;async function X1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Q1(t);for(const n of e)try{if(Z1(n))return}catch{}ct(t,"unauthorized-domain")}function Z1(t){const e=Ku(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!J1.test(n))return!1;if(Y1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=new Ss(3e4,6e4);function fp(){const t=vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tR(t){return new Promise((e,n)=>{var r,i,s;function o(){fp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fp(),n(_t(t,"network-request-failed"))},timeout:eR.get()})}if(!((i=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vt().gapi)===null||s===void 0)&&s.load)o();else{const l=Gk("iframefcb");return vt()[l]=()=>{gapi.load?o():n(_t(t,"network-request-failed"))},zv(`${$k()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw ho=null,e})}let ho=null;function nR(t){return ho=ho||tR(t),ho}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=new Ss(5e3,15e3),iR="__/auth/iframe",sR="emulator/auth/iframe",oR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aR(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bd(e,sR):`https://${t.config.authDomain}/${iR}`,r={apiKey:e.apiKey,appName:t.name,v:Qr},i=lR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qr(r).slice(1)}`}async function uR(t){const e=await nR(t),n=vt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:aR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),l=vt().setTimeout(()=>{s(o)},rR.get());function a(){vt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dR=500,hR=600,fR="_blank",pR="http://localhost";class pp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mR(t,e,n,r=dR,i=hR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},cR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Te().toLowerCase();n&&(l=Dv(u)?fR:n),Av(u)&&(e=e||pR,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(Mk(u)&&l!=="_self")return gR(e||"",l),new pp(null);const c=window.open(e||"",l,d);O(c,t,"popup-blocked");try{c.focus()}catch{}return new pp(c)}function gR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="__/auth/handler",vR="emulator/auth/handler",yR=encodeURIComponent("fac");async function mp(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qr,eventId:i};if(e instanceof Bv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ku(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Ts){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${yR}=${encodeURIComponent(a)}`:"";return`${wR(t)}?${qr(l).slice(1)}${u}`}function wR({config:t}){return t.emulator?bd(t,vR):`https://${t.authDomain}/${_R}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="webStorageSupport";class ER{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qv,this._completeRedirectFn=$1,this._overrideRedirectResult=B1}async _openPopup(e,n,r,i){var s;bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mp(e,n,r,Ku(),i);return mR(e,o,Wd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mp(e,n,r,Ku(),i);return I1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uR(e),r=new K1(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pa,{type:Pa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pa];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=X1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uv()||Ud()||bl()}}const CR=ER;var gp="@firebase/auth",_p="1.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TR(t){jr(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jv(t)},u=new Bk(r,i,s,a);return Jk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new Bn("auth-internal",e=>{const n=tr(e.getProvider("auth").getImmediate());return(r=>new SR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(gp,_p,IR(t)),dn(gp,_p,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=5*60,RR=Jg("authIdTokenMaxAge")||kR;let vp=null;const NR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RR)return;const i=n==null?void 0:n.token;vp!==i&&(vp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cs(t=i_()){const e=Zc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Yk(t,{popupRedirectResolver:CR,persistence:[D1,E1,Qv]}),r=Jg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=NR(s.toString());m1(n,o,()=>o(n.currentUser)),p1(n,l=>o(l))}}const i=Qg("auth");return i&&Xk(n,`http://${i}`),n}function PR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Vk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_t("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",PR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TR("Browser");const xR="https://vecvecv.github.io/reto7/assets/producto-DpeGhgOv.pdf";function OR(){return C.jsx(C.Fragment,{children:C.jsxs("div",{className:"descarga",children:[C.jsx("h1",{className:"titulo2",children:"GRACIAS POR TU COMPRA"}),C.jsxs("p",{className:"parrafo",children:["Descargá ahora tu ejemplar digital, la copia física la estarás recibiendo en 30 días hábiles.",C.jsx("br",{}),"Recibirás las instrucciones en tu casilla de Mail."]}),C.jsx("button",{className:"descargarbtn",children:C.jsx("a",{href:xR,target:"_blank",rel:"noopener noreferrer",download:"producto.pdf",children:"DESCARGAR"})})]})})}function AR(t){const{policia:e,usuario:n}=t,[r,i]=I.useState({});I.useEffect(()=>{if(n){const o=Gu(),l=lo(o,`Usuarios/${n.uid}`);Hu(l,a=>{const u=a.val();i(u)})}},[n]);const s=o=>{const l=cs();_1(l).then(()=>{e(!1)}).catch(a=>{})};return C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"login",children:[C.jsxs("p",{className:"holamail",children:["Holi ",n.email]}),C.jsx("button",{onClick:s,className:"desloguear",children:"Desloguear"})]}),C.jsx("div",{className:"chamuyo",children:C.jsxs("p",{className:"pchamuyo",children:["¡Prepárate para sumergirte en cuatro décadas de pura energía metálica con el legendario Pepe Loco! ",C.jsx("br",{}),"Desde sus humildes comienzos hasta conquistar escenarios globales, esta icónica banda ha forjado un legado imborrable en la historia del metal. ",C.jsx("br",{}),"Ahora, en este disco de grandes éxitos, revive los momentos más intensos, los himnos inolvidables y los riffs que hicieron temblar al mundo.",C.jsx("br",{}),"Incluye ",C.jsx("strong",{children:"PONETE A ESTUDIAR"})," y ",C.jsx("strong",{children:"QUE BELLO REACT, PERO QUE DOLOR (Ballad Version)."}),C.jsx("br",{}),"Es hora de elevar el volumen y rendir homenaje a una trayectoria imparable."]})}),C.jsx("div",{className:"compraya",children:r&&r.libro===!0?C.jsx(OR,{}):C.jsxs(C.Fragment,{children:[C.jsxs("p",{className:"parrafo",children:["No te pierdas esta oportunidad única ",C.jsx("br",{}),"Recibí la Versión Digital AHORA MISMO."]}),C.jsx(Hg,{to:"https://mpago.la/2izqP5k",target:"_blank",children:C.jsx("button",{className:"botoncomprar",children:"COMPRAR AHORA"})})]})})]})}const ny=I.createContext();function DR(t){const{handleLogin:e,crear:n,setCrear:r,usuario:i,setUsuario:s,pass:o,setPass:l}=I.useContext(ny),{policia:a,guardarUsuario:u,cliente:d,setCliente:c}=t,h=()=>{const v=cs();h1(v,i,o).then(w=>{const p=w.user;c({email:p.email,uid:p.uid,libro:!1}),u({email:p.email,uid:p.uid,libro:!1}),a(p)}).catch(w=>{w.code,w.message})},g=()=>{r(!n)},_=v=>{v.target.name=="usuario"?s(v.target.value):l(v.target.value)};return C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"chamuyo",children:C.jsxs("p",{className:"pchamuyo",children:["¡Prepárate para sumergirte en cuatro décadas de pura energía metálica con el legendario Pepe Loco! ",C.jsx("br",{}),"Desde sus humildes comienzos hasta conquistar escenarios globales, esta icónica banda ha forjado un legado imborrable en la historia del metal. ",C.jsx("br",{}),"Ahora, en este disco de grandes éxitos, revive los momentos más intensos, los himnos inolvidables y los riffs que hicieron temblar al mundo.",C.jsx("br",{}),"Incluye ",C.jsx("strong",{children:"PONETE A ESTUDIAR"})," y ",C.jsx("strong",{children:"QUE BELLO REACT, PERO QUE DOLOR (Ballad Version)."}),C.jsx("br",{}),"Es hora de elevar el volumen y rendir homenaje a una trayectoria imparable."]})}),C.jsxs("div",{className:"deslogueado",children:[C.jsxs("h3",{className:"ingresatxt",children:["Ingresá con tu Usuario y Contraseña ",C.jsx("br",{}),"para seguir con tu compra"]}),C.jsx("input",{type:"text",name:"usuario",onChange:_,placeholder:"email",className:"inputs"}),C.jsx("input",{type:"password",name:"password",onChange:_,placeholder:"password",className:"inputs"}),n?C.jsx(C.Fragment,{children:C.jsxs("div",{className:"contenedorCrear",children:[C.jsx("p",{className:"ingresatxt",children:"Ingresá el mail con el que te quieras registrar y elegí tu contraseña"}),C.jsx("button",{onClick:h,className:"boton",children:"Crear Cuenta"})]})}):C.jsxs(C.Fragment,{children:[" ",C.jsx("button",{onClick:e,className:"boton",children:"Login"})," ",C.jsx("p",{onClick:g,className:"notengo",children:"No tengo Cuenta"})]})]})]})}const LR="https://vecvecv.github.io/reto7/assets/cdcompleto-7f35kl3D.png",MR={apiKey:"AIzaSyA44sVY25GbayeQpwSEIBoCbty8ytOW0eA",authDomain:"reto7vec.firebaseapp.com",projectId:"reto7vec",storageBucket:"reto7vec.appspot.com",messagingSenderId:"394824562894",appId:"1:394824562894:web:f14ba72d687d479b6d389f"};r_(MR);function bR(){const[t,e]=I.useState([]),[n,r]=I.useState(!1),[i,s]=I.useState({}),o=Gu(),l=lo(o,"Usuarios/");I.useEffect(()=>{const c=cs().currentUser;if(c){const h=Gu(),g=lo(h,"Usuarios/"+c.uid);Hu(g,_=>{const v=_.val();s(v),console.log("setclientesnuevo ->",v)})}Hu(l,h=>{const g=h.val();e(g)}),ik(l,h=>{const g=h.val();e(g)})},[]);const a=d=>{const c=lo(o,"Usuarios/"+d.uid);rk(c,d),console.log("guardo el usuario",d)},u=cs();return g1(u,d=>{d?(d.uid,r(d)):r(!1)}),C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"banner",children:[C.jsx("div",{className:"imgbanner",children:C.jsx("img",{src:LR,className:"imgcdcomp"})}),C.jsxs("div",{className:"textosbanner",children:[C.jsxs("h1",{className:"titulo",children:["¡Celebra 40 años ",C.jsx("br",{}),"de Metal Salvaje con ",C.jsx("br",{})," ",C.jsx("span",{className:"pepelocotxt",children:"Pepe Loco!"})]}),C.jsx("h3",{className:"subtitulo",children:t==null?void 0:t.titulo})]})]}),n?C.jsx(AR,{policia:r,usuario:n,cliente:i,setCliente:s}):C.jsx(DR,{policia:r,guardarUsuario:a,setCliente:s,cliente:i})]})}function FR(){return C.jsx(C.Fragment,{children:C.jsx("footer",{children:C.jsx("p",{children:"Copyright VECVECVEC 2024"})})})}function UR(){return C.jsx(C.Fragment,{children:C.jsx("header",{children:C.jsx("nav",{children:C.jsx(Hg,{className:"linknav",children:" HOME"})})})})}function jR(t){const{children:e}=t;return C.jsxs(C.Fragment,{children:[C.jsx(UR,{}),e,C.jsx(FR,{})]})}const zR="USUARIO_LOGUEADO";function WR(t,e){const{payload:n,type:r}=e;switch(r){case zR:return{...t,usuarios:n}}}function BR(t){const{children:e}=t,n={email:[""],pass:[""],uid:[""],libro:[!1]};I.useReducer(WR,n);const r=g=>{alert("hola"+g)},[i,s]=I.useState(!1),[o,l]=I.useState(""),[a,u]=I.useState(""),{policia:d,guardarUsuario:c}=t,h=()=>{const g=cs();f1(g,o,a).then(_=>{const v=_.user;d(v)}).catch(_=>{_.code,_.message})};return C.jsx(C.Fragment,{children:C.jsx(ny.Provider,{value:{saludar:r,estadoInicial:n,handleLogin:h,crear:i,setCrear:s,usuario:o,setUsuario:l,pass:a,setPass:u,policia:d},children:e})})}function VR(){return C.jsx(PE,{children:C.jsx(BR,{children:C.jsx(jR,{children:C.jsx(CE,{children:C.jsx(Vg,{path:"/",element:C.jsx(bR,{})})})})})})}xa.createRoot(document.getElementById("root")).render(C.jsx(VR,{}));
