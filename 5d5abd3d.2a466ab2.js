/*! For license information please see 5d5abd3d.2a466ab2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var l=2;l<o;l++)u[l]=n[l];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},108:function(e,t,n){"use strict";e.exports=n(109)},109:function(e,t,n){"use strict";var r=n(110),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,u=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,b=a?Symbol.for("react.suspense_list"):60120,m=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder"),a&&Symbol.for("react.scope");var g="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=e.message,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return e.message="Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}function S(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw h(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=v.prototype;var E=w.prototype=new S;E.constructor=w,r(E,v.prototype),E.isPureReactComponent=!0;var x={current:null},k={suspense:null},C={current:null},_=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function U(e,t,n){var r,a={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)_.call(t,r)&&!N.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:u,ref:i,props:a,_owner:C.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g,P=[];function D(e,t,n,r){if(P.length){var a=P.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function M(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case u:i=!0}}if(i)return n(r,e,""===t?"."+A(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=t+A(a=e[c],c);i+=M(a,l,n,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=g&&e[g]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)i+=M(a=a.value,l=t+A(a,c++),n,r);else if("object"===a)throw n=""+e,h(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return i}function I(e,t,n){return null==e?0:M(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function H(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(T,"$&/")+"/"),I(e,H,t=D(t,o,r,a)),$(t)}function G(){var e=x.current;if(null===e)throw h(Error(321));return e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,F,t=D(null,null,t,n)),$(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw h(Error(143));return e}},createRef:function(){return{current:null}},Component:v,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return G().useCallback(e,t)},useContext:function(e,t){return G().useContext(e,t)},useEffect:function(e,t){return G().useEffect(e,t)},useImperativeHandle:function(e,t,n){return G().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return G().useLayoutEffect(e,t)},useMemo:function(e,t){return G().useMemo(e,t)},useReducer:function(e,t,n){return G().useReducer(e,t,n)},useRef:function(e){return G().useRef(e)},useState:function(e){return G().useState(e)},Fragment:i,Profiler:l,StrictMode:c,Suspense:d,unstable_SuspenseList:b,createElement:U,cloneElement:function(e,t,n){if(null==e)throw h(Error(267),e);var a=r({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=C.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)_.call(t,s)&&!N.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:o,type:e.type,key:u,ref:i,props:a,_owner:c}},createFactory:function(e){var t=U.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.10.2",unstable_withSuspenseConfig:function(e,t){var n=k.suspense;k.suspense=void 0===t?null:t;try{e()}finally{k.suspense=n}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentBatchConfig:k,ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r}},B={default:q},Q=B&&q||B;e.exports=Q.default||Q},110:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,c=u(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))a.call(n,s)&&(c[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)o.call(n,i[p])&&(c[i[p]]=n[i[p]])}}return c}},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(108),n(107)),u={title:"Getting Started",hide_title:!0},i={unversionedId:"introduction/GettingStarted",id:"introduction/GettingStarted",isDocsHomePage:!1,title:"Getting Started",description:"Getting started",source:"@site/../docs/introduction/GettingStarted.md",slug:"/introduction/GettingStarted",permalink:"/docs/introduction/GettingStarted",editUrl:"https://github.com/redux-saga/redux-saga/edit/master/docs/../docs/introduction/GettingStarted.md",version:"current",sidebar:"docs",previous:{title:"About",permalink:"/docs/About"},next:{title:"Beginner Tutorial",permalink:"/docs/introduction/BeginnerTutorial"}},c=[{value:"Install",id:"install",children:[]},{value:"Usage Example",id:"usage-example",children:[]},{value:"Using UMD build in the browser",id:"using-umd-build-in-the-browser",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"getting-started"},"Getting started"),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ npm install redux-saga\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"$ yarn add redux-saga\n")),Object(o.b)("p",null,"Alternatively, you may use the provided UMD builds directly in the ",Object(o.b)("inlineCode",{parentName:"p"},"<script>")," tag of an HTML page. See ",Object(o.b)("a",{parentName:"p",href:"#using-umd-build-in-the-browser"},"this section"),"."),Object(o.b)("h2",{id:"usage-example"},"Usage Example"),Object(o.b)("p",null,"Suppose we have a UI to fetch some user data from a remote server when a button is clicked. (For brevity, we'll just show the action triggering code.)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"class UserComponent extends React.Component {\n  ...\n  onSomeButtonClicked() {\n    const { userId, dispatch } = this.props\n    dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})\n  }\n  ...\n}\n")),Object(o.b)("p",null,"The Component dispatches a plain Object action to the Store. We'll create a Saga that watches for all ",Object(o.b)("inlineCode",{parentName:"p"},"USER_FETCH_REQUESTED")," actions and triggers an API call to fetch the user data."),Object(o.b)("h4",{id:"sagasjs"},Object(o.b)("inlineCode",{parentName:"h4"},"sagas.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import { call, put, takeEvery, takeLatest } from \'redux-saga/effects\'\nimport Api from \'...\'\n\n// worker Saga: will be fired on USER_FETCH_REQUESTED actions\nfunction* fetchUser(action) {\n   try {\n      const user = yield call(Api.fetchUser, action.payload.userId);\n      yield put({type: "USER_FETCH_SUCCEEDED", user: user});\n   } catch (e) {\n      yield put({type: "USER_FETCH_FAILED", message: e.message});\n   }\n}\n\n/*\n  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.\n  Allows concurrent fetches of user.\n*/\nfunction* mySaga() {\n  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);\n}\n\n/*\n  Alternatively you may use takeLatest.\n\n  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets\n  dispatched while a fetch is already pending, that pending fetch is cancelled\n  and only the latest one will be run.\n*/\nfunction* mySaga() {\n  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);\n}\n\nexport default mySaga;\n')),Object(o.b)("p",null,"To run our Saga, we'll have to connect it to the Redux Store using the ",Object(o.b)("inlineCode",{parentName:"p"},"redux-saga")," middleware."),Object(o.b)("h4",{id:"mainjs"},Object(o.b)("inlineCode",{parentName:"h4"},"main.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import { createStore, applyMiddleware } from 'redux'\nimport createSagaMiddleware from 'redux-saga'\n\nimport reducer from './reducers'\nimport mySaga from './sagas'\n\n// create the saga middleware\nconst sagaMiddleware = createSagaMiddleware()\n// mount it on the Store\nconst store = createStore(\n  reducer,\n  applyMiddleware(sagaMiddleware)\n)\n\n// then run the saga\nsagaMiddleware.run(mySaga)\n\n// render the application\n")),Object(o.b)("h2",{id:"using-umd-build-in-the-browser"},"Using UMD build in the browser"),Object(o.b)("p",null,"There is also a ",Object(o.b)("strong",{parentName:"p"},"UMD")," build of ",Object(o.b)("inlineCode",{parentName:"p"},"redux-saga")," available in the ",Object(o.b)("inlineCode",{parentName:"p"},"dist/")," folder. When using the umd build ",Object(o.b)("inlineCode",{parentName:"p"},"redux-saga")," is available as ",Object(o.b)("inlineCode",{parentName:"p"},"ReduxSaga")," in the window object. This enables you to create Saga middleware without using ES6 ",Object(o.b)("inlineCode",{parentName:"p"},"import")," syntax like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"var sagaMiddleware = ReduxSaga.default()\n")),Object(o.b)("p",null,"The UMD version is useful if you don't use Webpack or Browserify. You can access it directly from ",Object(o.b)("a",{parentName:"p",href:"https://unpkg.com/"},"unpkg"),"."),Object(o.b)("p",null,"The following builds are available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://unpkg.com/redux-saga/dist/redux-saga.umd.js"},"https://unpkg.com/redux-saga/dist/redux-saga.umd.js")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://unpkg.com/redux-saga/dist/redux-saga.umd.min.js"},"https://unpkg.com/redux-saga/dist/redux-saga.umd.min.js"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Important!"),Object(o.b)("br",{parentName:"p"}),"\n","If the browser you are targeting doesn't support ",Object(o.b)("em",{parentName:"p"},"ES2015 generators"),", you must transpile them (i.e., with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/regenerator/tree/master/packages/regenerator-transform"},"babel plugin"),") and provide a valid runtime, such as ",Object(o.b)("a",{parentName:"p",href:"https://unpkg.com/regenerator-runtime/runtime.js"},"the one here"),". The runtime must be imported before ",Object(o.b)("strong",{parentName:"p"},"redux-saga"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import 'regenerator-runtime/runtime'\n// then\nimport sagaMiddleware from 'redux-saga'\n")))}s.isMDXComponent=!0}}]);