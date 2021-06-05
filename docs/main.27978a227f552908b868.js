!function(){"use strict";var e,n={6890:function(e,n,t){var r=t(7294),c=t(3935);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,c,a=[],i=!0,o=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){o=!0,c=e}finally{try{i||null==t.return||t.return()}finally{if(o)throw c}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var o=(0,r.createContext)({}),l=function(e){var n=e.articles,t=e.children,c=a((0,r.useState)(0),2),i=c[0],l=c[1],u=a((0,r.useState)(0),2),s=u[0],f=u[1];return r.createElement(o.Provider,{value:{articles:n,articleIndex:i,sectionIndex:s,setArticleIndex:l,setSectionIndex:f}},t)},u=function(e){var n=e.index,t=e.section,c=(0,r.useContext)(o).setSectionIndex;return r.createElement("div",{className:"SectionItem",onClick:function(){c(n)}},t.title)},s=function(e){var n=e.article,t=e.isSelected,c=e.onClick;return r.createElement("div",{className:"ArticleItem"},r.createElement("div",{className:"Button ".concat(t?"selected":""),onClick:c},n.title),t&&r.createElement("div",{className:"Dropdown"},n.sections.map((function(e,n){return null!==e.title&&r.createElement(u,{index:n,section:e})}))))},f=function(){var e=(0,r.useContext)(o),n=e.articles,t=e.articleIndex,c=e.setArticleIndex;return r.createElement("div",{className:"Explorer"},n.map((function(e,n){return r.createElement(s,{article:e,isSelected:n===t,onClick:function(){c(n)}})})))},m=t(8456),p=t.n(m),v=function(e){var n=e.content;return r.createElement(p(),null,n)},d=function(e){var n=e.index,t=e.section,c=(0,r.useContext)(o).sectionIndex,a=(0,r.useRef)(null);return(0,r.useEffect)((function(){n===c&&a.current.scrollIntoView()}),[c]),r.createElement("div",{ref:a},null!==t.title&&r.createElement("h1",null,t.title),r.createElement(v,{content:t.content}))},y=function(){var e=(0,r.useContext)(o),n=e.articles[e.articleIndex];return r.createElement("div",{className:"Viewer"},r.createElement("div",{className:"ArticleTitle"},n.title),n.sections.map((function(e,n){return r.createElement(d,{index:n,section:e})})))},x=function(){return r.createElement("div",{className:"Header"},"Let's react")},E=function(){return r.createElement("div",{className:"Content"},r.createElement(f,null),r.createElement(y,null))},h=function(){return r.createElement("div",{className:"App"},r.createElement(x,null),r.createElement(E,null))},S=t(6171),b=t(2650);function g(e){var n=e.split(/\r?\n/),t=[{title:null,content:""}];return n.forEach((function(e){var n=function(e){var n=e.match(/^\s*#[^#]/);if(null===n)return null;var t=n[0];return e.slice(t.length)}(e);null!==n?t.push({title:n,content:""}):t[t.length-1].content+=e+"\n"})),t}var C=[{title:"Node",sections:g(S)},{title:"TypeScript",sections:g(b)}];(0,c.render)(r.createElement(l,{articles:C},r.createElement(h,null)),document.getElementsByClassName("Root")[0])},6171:function(e){e.exports="# About\r\n- JavaScript로 서버 등 어플리케이션을 만들기 위해 사용하는 JavaScript 런타임입니다.\r\n- Python, JDK와 비슷하게 생각하면 됩니다.\r\n\r\n# npm\r\n- Node.js는 [npm](https://www.npmjs.com/)이라는 패키지 관리자를 제공합니다. Python의 pip, Java의 maven과 비슷하게 생각하면 됩니다.\r\n- `package.json` 파일을 이용하여 프로젝트의 정보 및 사용할 라이브러리들을 지정해줄 수가 있습니다.\r\n- `npm install`을 실행하면 `package.json`을 읽어서 라이브러리들을 `node_modules` 아래에 설치해줍니다.\r\n    - `package-lock.json`이라는 파일이 자동 생성되며, 이는 사용자가 수정할 필요가 없습니다.\r\n    - `node_modules`의 크기는 일반적으로 **매우** 크기 때문에 git 저장소에 올리지 않는 것을 권장합니다.\r\n- `npm run ABC`를 실행하면 `package.json`의 `scripts`에서 `ABC`에 해당하는 스크립트를 실행해줍니다. 빌드 스크립트를 만들 때 유용하게 사용할 수 있습니다.\r\n"},2650:function(e){e.exports='# About\r\n- JavaScript 기반의 언어로, JavaScript의 문법을 확장하여 C++, Java처럼 자료형(type)을 명시하고 체크하여 견고한 프로그래밍이 가능하도록 한 언어입니다.\r\n    ```TypeScript\r\n    // JavaScript\r\n    function addInts(x, y) {\r\n        return x + y;\r\n    }\r\n\r\n    // TypeScript\r\n    function addInts(x: number, y: number): number {\r\n        return x + y;\r\n    }\r\n    ```\r\n- 웹 브라우저는 일반적으로 JavaScript만을 지원하기 때문에, TypeScript 컴파일러(tsc)를 이용하여 JavaScript로 변환하여 사용합니다.\r\n- `tsconfig.json` 파일을 이용하여 컴파일러에 여러 옵션(ex. 어떤 버전의 JavaScript로 변환할 것인지)을 줄 수가 있습니다.\r\n    ```jsonc\r\n    {\r\n        "compilerOptions": {\r\n            "target": "es3", // Target JavaScript version.\r\n            ...\r\n        },\r\n        ...\r\n    }\r\n    ```\r\n'}},t={};function r(e){var c=t[e];if(void 0!==c)return c.exports;var a=t[e]={exports:{}};return n[e](a,a.exports,r),a.exports}r.m=n,e=[],r.O=function(n,t,c,a){if(!t){var i=1/0;for(u=0;u<e.length;u++){t=e[u][0],c=e[u][1],a=e[u][2];for(var o=!0,l=0;l<t.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(o=!1,a<i&&(i=a));o&&(e.splice(u--,1),n=c())}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,c,a]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={179:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var c,a,i=t[0],o=t[1],l=t[2],u=0;for(c in o)r.o(o,c)&&(r.m[c]=o[c]);if(l)var s=l(r);for(n&&n(t);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0;return r.O(s)},t=self.webpackChunklets_react=self.webpackChunklets_react||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var c=r.O(void 0,[298],(function(){return r(6890)}));c=r.O(c)}();