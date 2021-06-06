!function(){"use strict";var e,t={8790:function(e,t,n){var r=n(7294),a=n(3935);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,c=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=(0,r.createContext)({}),l=function(e){var t=e.articles,n=e.children,a=c((0,r.useState)(0),2),o=a[0],l=a[1],u=c((0,r.useState)(0),2),s=u[0],f=u[1];return r.createElement(i.Provider,{value:{articles:t,articleIndex:o,sectionIndex:s,setArticleIndex:l,setSectionIndex:f}},n)};function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=(0,r.createContext)({}),f=function(e){var t,n,a=e.children,c=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,c=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=c[0],i=c[1];return r.createElement(s.Provider,{value:{isMenuOpen:o,openMenu:i}},a)},m=function(e){var t=e.index,n=e.section,a=(0,r.useContext)(i).setSectionIndex;return r.createElement("div",{className:"SectionItem",onClick:function(){a(t)}},n.title)},p=function(e){var t=e.article,n=e.isSelected,a=e.onClick;return r.createElement("div",{className:"ArticleItem"},r.createElement("div",{className:"Button ".concat(n?"selected":""),onClick:a},t.title),n&&r.createElement("div",{className:"Dropdown"},t.sections.map((function(e,t){return null!==e.title&&r.createElement(m,{index:t,section:e})}))))},v=function(){var e=(0,r.useContext)(i),t=e.articles,n=e.articleIndex,a=e.setArticleIndex,c=(0,r.useContext)(s).isMenuOpen;return r.createElement("div",{className:"Menu ".concat(c?"open":"")},t.map((function(e,t){return r.createElement(p,{article:e,isSelected:t===n,onClick:function(){a(t)}})})))},d=n(8456),y=n.n(d),h=n(9657),g=n(5376),b=n(5046),x=n(7852),E=n(8272);h.Z.registerLanguage("jsx",g.Z),h.Z.registerLanguage("tsx",b.Z),h.Z.registerLanguage("json",x.Z);var S={code:function(e){var t=e.inline,n=e.className,a=e.children,c=void 0!==n&&n.startsWith("language-");if(!t&&c){var o=function(e){var t=e.toLowerCase();switch(t){case"javascript":return"jsx";case"typescript":return"tsx";case"jsonc":return"json";default:return t}}(n.substring(9));return r.createElement(h.Z,{language:o,style:E.Z},a)}return r.createElement("code",{className:n},a)}},j=function(e){var t=e.content;return r.createElement(y(),{components:S},t)},C=function(e){var t=e.index,n=e.section,a=(0,r.useContext)(i).sectionIndex,c=(0,r.useRef)(null);return(0,r.useEffect)((function(){t===a&&c.current.scrollIntoView()}),[a]),r.createElement("div",{ref:c},null!==n.title&&r.createElement("h1",null,n.title),r.createElement(j,{content:n.content}))},w=function(){var e=(0,r.useContext)(i),t=e.articles,n=e.articleIndex,a=(0,r.useContext)(s).openMenu,c=t[n];return r.createElement("div",{className:"Viewer"},r.createElement("div",{className:"Area",key:c.title,onClick:function(){a(!1)}},r.createElement("div",{className:"ArticleTitle"},c.title),c.sections.map((function(e,t){return r.createElement(C,{index:t,section:e})}))))},A=function(){var e=(0,r.useContext)(s),t=e.isMenuOpen,n=e.openMenu;return r.createElement("button",{className:"Button",onClick:function(){n(!t)}},"Menu")},I=function(){return r.createElement("a",{className:"Button",href:"https://github.com/Avantgarde95/lets-react",target:"_blank",rel:"noopenner noreferrer"},"Code")},N=function(){return r.createElement("div",{className:"Header"},r.createElement(A,null),r.createElement("span",{className:"Title"},"Let's react"),r.createElement(I,null))},O=function(){return r.createElement("div",{className:"Content"},r.createElement(v,null),r.createElement(w,null))},k=function(){return r.createElement("div",{className:"App"},r.createElement(N,null),r.createElement(O,null))},J=n(6171),M=n(2650);function T(e){var t=e.split(/\r?\n/),n=[{title:null,content:""}];return t.forEach((function(e){var t=function(e){var t=e.match(/^\s*#[^#]/);if(null===t)return null;var n=t[0];return e.slice(n.length)}(e);null!==t?n.push({title:t,content:""}):n[n.length-1].content+=e+"\n"})),n}var Z=[{title:"Node",sections:T(J)},{title:"TypeScript",sections:T(M)}];(0,a.render)(r.createElement(l,{articles:Z},r.createElement(f,null,r.createElement(k,null))),document.getElementsByClassName("Root")[0])},6171:function(e){e.exports="# About\r\n- JavaScript로 서버 등 어플리케이션을 만들기 위해 사용하는 JavaScript 런타임입니다.\r\n- Python, JDK와 비슷하게 생각하면 됩니다.\r\n\r\n# npm\r\n- Node.js는 [npm](https://www.npmjs.com/)이라는 패키지 관리자를 제공합니다. Python의 pip, Java의 maven과 비슷하게 생각하면 됩니다.\r\n- `package.json` 파일을 이용하여 프로젝트의 정보 및 사용할 라이브러리들을 지정해줄 수가 있습니다.\r\n- `npm install`을 실행하면 `package.json`을 읽어서 라이브러리들을 `node_modules` 아래에 설치해줍니다.\r\n    - `package-lock.json`이라는 파일이 자동 생성되며, 이는 사용자가 수정할 필요가 없습니다.\r\n    - `node_modules`의 크기는 일반적으로 **매우** 크기 때문에 git 저장소에 올리지 않는 것을 권장합니다.\r\n- `npm run ABC`를 실행하면 `package.json`의 `scripts`에서 `ABC`에 해당하는 스크립트를 실행해줍니다. 빌드 스크립트를 만들 때 유용하게 사용할 수 있습니다.\r\n"},2650:function(e){e.exports='# About\r\n- JavaScript 기반의 언어로, JavaScript의 문법을 확장하여 C++, Java처럼 자료형(type)을 명시하고 체크하여 견고한 프로그래밍이 가능하도록 한 언어입니다.\r\n    ```tsx\r\n    // JavaScript\r\n    function addInts(x, y) {\r\n        return x + y;\r\n    }\r\n\r\n    // TypeScript\r\n    function addInts(x: number, y: number): number {\r\n        return x + y;\r\n    }\r\n    ```\r\n- 웹 브라우저는 일반적으로 JavaScript만을 지원하기 때문에, TypeScript 컴파일러(tsc)를 이용하여 JavaScript로 변환하여 사용합니다.\r\n- `tsconfig.json` 파일을 이용하여 컴파일러에 여러 옵션(ex. 어떤 버전의 JavaScript로 변환할 것인지)을 줄 수가 있습니다.\r\n    ```jsonc\r\n    {\r\n        "compilerOptions": {\r\n            "target": "es3", // Target JavaScript version.\r\n            ...\r\n        },\r\n        ...\r\n    }\r\n    ```\r\n'}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=function(t,n,a,c){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],c=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&c||o>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(i=!1,c<o&&(o=c));i&&(e.splice(u--,1),t=a())}return t}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[n,a,c]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,c,o=n[0],i=n[1],l=n[2],u=0;for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var s=l(r);for(t&&t(n);u<o.length;u++)c=o[u],r.o(e,c)&&e[c]&&e[c][0](),e[o[u]]=0;return r.O(s)},n=self.webpackChunklets_react=self.webpackChunklets_react||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[620],(function(){return r(8790)}));a=r.O(a)}();