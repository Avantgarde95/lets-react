!function(){"use strict";var e,n={9320:function(e,n,t){var r=t(7294),o=t(3935);function a(e){var n=e.split(/\r?\n/),t=[{title:null,content:""}];return n.forEach((function(e){var n=function(e){var n=e.match(/^#[^#]/);if(null===n)return null;var t=n[0];return e.slice(t.length)}(e);null!==n?t.push({title:n,content:""}):t[t.length-1].content+=e+"\n"})),t}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,a=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var l=(0,r.createContext)({}),u=function(e){var n=e.articles,t=e.children,o=c((0,r.useState)(0),2),a=o[0],i=o[1],u=c((0,r.useState)(null),2),s=u[0],f=u[1];return r.createElement(l.Provider,{value:{articles:n,articleIndex:a,sectionIndex:s,setArticleIndex:i,setSectionIndex:f}},t)};function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var f=(0,r.createContext)({}),p=function(e){var n,t,o=e.children,a=(n=(0,r.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,a=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw o}}return a}}(n,t)||function(e,n){if(e){if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],i=a[1];return r.createElement(f.Provider,{value:{isMenuOpen:c,openMenu:i}},o)},m=function(e){var n=e.index,t=e.section,o=(0,r.useContext)(l).setSectionIndex;return r.createElement("div",{className:"SectionItem",onClick:function(){o(n)}},t.title)},d=function(e){var n=e.article,t=e.isSelected,o=e.onClick;return r.createElement("div",{className:"ArticleItem"},r.createElement("div",{className:"Button ".concat(t?"selected":""),onClick:o},n.title),t&&r.createElement("div",{className:"Dropdown"},n.sections.map((function(e,n){return null!==e.title&&r.createElement(m,{index:n,section:e})}))))},v=function(){var e=(0,r.useContext)(l),n=e.articles,t=e.articleIndex,o=e.setArticleIndex,a=(0,r.useContext)(f).isMenuOpen;return r.createElement("div",{className:"Menu ".concat(a?"open":"")},n.map((function(e,n){return r.createElement(d,{article:e,isSelected:n===t,onClick:function(){o(n)}})})))},h=t(8456),b=t.n(h),y=t(9657),g=t(5376),S=t(5046),x=t(7852),E=t(6993),C=t(2422),A=t(8272);y.Z.registerLanguage("jsx",g.Z),y.Z.registerLanguage("tsx",S.Z),y.Z.registerLanguage("json",x.Z),y.Z.registerLanguage("html",E.Z),y.Z.registerLanguage("css",C.Z);var w={code:function(e){var n=e.inline,t=e.className,o=e.children,a=void 0!==t&&t.startsWith("language-");if(!n&&a){var c=function(e){var n=e.toLowerCase();switch(n){case"javascript":return"jsx";case"typescript":return"tsx";case"jsonc":return"json";default:return n}}(t.substring(9));return r.createElement(y.Z,{language:c,style:A.Z},String(o).trimRight())}return r.createElement("code",{className:t},o)},a:function(e){var n=e.href,t=e.children;return r.createElement("a",{target:"_blank",rel:"noopenner noreferrer",href:n},t)}},j=function(e){var n=e.content;return r.createElement(b(),{components:w},n)},k=function(e){var n=e.index,t=e.section,o=(0,r.useContext)(l),a=o.sectionIndex,c=o.setSectionIndex,i=(0,r.useRef)(null);return(0,r.useEffect)((function(){n===a&&(i.current.scrollIntoView({behavior:"smooth"}),c(null))}),[a]),r.createElement("div",{ref:i},null!==t.title&&r.createElement("h1",null,t.title),r.createElement(j,{content:t.content}))},O=function(){var e=(0,r.useContext)(l),n=e.articles,t=e.articleIndex,o=(0,r.useContext)(f).openMenu,a=n[t];return r.createElement("div",{className:"Viewer",onClick:function(){o(!1)}},r.createElement("div",{className:"ArticleTitle"},a.title),r.createElement("div",{className:"ArticleSections",key:a.title},a.sections.map((function(e,n){return r.createElement(k,{index:n,section:e})}))))},I=function(){var e=(0,r.useContext)(f),n=e.isMenuOpen,t=e.openMenu;return r.createElement("button",{className:"Button",onClick:function(){t(!n)}},"Menu")},M=function(){return r.createElement("a",{className:"Button",href:"https://github.com/Avantgarde95/lets-react",target:"_blank",rel:"noopenner noreferrer"},"Code")},N=function(){return r.createElement("div",{className:"Header"},r.createElement(I,null),r.createElement("span",{className:"Title"},"Let's react"),r.createElement(M,null))},J=function(){return r.createElement("div",{className:"Content"},r.createElement(v,null),r.createElement(O,null))},T=function(){return r.createElement("div",{className:"App"},r.createElement(N,null),r.createElement(J,null))},L=t(2372),Z=t(6778),R=t(6171),B=t(2650),H=t(6004),_=t(549),P=t(7133),D=[{title:"Introduction",sections:a(L)},{title:"Web",sections:a(Z)},{title:"Node",sections:a(R)},{title:"TypeScript",sections:a(B)},{title:"Webpack",sections:a(_)},{title:"React",sections:a(P)},{title:"SASS",sections:a(H)}],W=function(){return r.createElement(u,{articles:D},r.createElement(p,null,r.createElement(T,null)))},U=document.getElementsByClassName("Root")[0];(0,o.render)(r.createElement(W,null),U)},2372:function(e){e.exports='[React](https://reactjs.org/)로 작성한 React 입문서입니다.\r\n\r\n- 각 프로그램 및 라이브러리의 역할이 무엇인지, 그리고 용어들이 무슨 의미인지 담았습니다.\r\n- 각 프로그램 및 라이브러리의 자세한 사용법은 담지 않았습니다. 설치, 세팅, 사용하는 방법은 공식 홈페이지, 인터넷 상의 자료들을 참고하세요.\r\n- 이 웹사이트도 여기서 소개한 도구들(TypeScript, Webpack, React, SASS)로 제작하였습니다.\r\n- 지식의 한계로 내용적으로 아직 부족한 부분들이 많아, 추가할 내용이 있다면 제안해주시면 매우 감사하겠습니다.\r\n\r\n상단의 "Menu" 버튼을 눌러 메뉴를 열 수 있습니다.\r\n'},6171:function(e){e.exports="# About\r\n- JavaScript로 서버 등 어플리케이션을 만들기 위해 사용하는 JavaScript 런타임입니다.\r\n- Python, JDK와 비슷하게 생각하면 됩니다.\r\n\r\n# npm\r\n- Node.js는 [npm](https://www.npmjs.com/)이라는 패키지 관리자를 제공합니다. Python의 pip, Java의 maven과 비슷하게 생각하면 됩니다.\r\n- `package.json` 파일을 이용하여 프로젝트의 정보 및 사용할 라이브러리들을 지정해줄 수가 있습니다.\r\n- `npm install`을 실행하면 `package.json`을 읽어서 라이브러리들을 `node_modules` 아래에 설치해줍니다.\r\n    - `package-lock.json`이라는 파일이 자동 생성되며, 이는 사용자가 수정할 필요가 없습니다.\r\n    - `node_modules`의 크기는 일반적으로 **매우** 크기 때문에 git 저장소에 올리지 않는 것을 권장합니다.\r\n- `npm run ABC`를 실행하면 `package.json`의 `scripts`에서 `ABC`에 해당하는 스크립트를 실행해줍니다. 빌드 스크립트를 만들 때 유용하게 사용할 수 있습니다.\r\n"},7133:function(e){e.exports="# About\r\n\r\n# Component\r\n\r\n# JSX\r\n"},6004:function(e){e.exports="# About\r\n"},2650:function(e){e.exports='# About\r\n- JavaScript 기반의 언어로, JavaScript의 문법을 확장하여 C++, Java처럼 자료형(type)을 명시하고 체크하여 견고한 프로그래밍이 가능하도록 한 언어입니다.\r\n    ```tsx\r\n    // JavaScript\r\n    function addInts(x, y) {\r\n        return x + y;\r\n    }\r\n\r\n    // TypeScript\r\n    function addInts(x: number, y: number): number {\r\n        return x + y;\r\n    }\r\n    ```\r\n- 웹 브라우저는 일반적으로 JavaScript만을 지원하기 때문에, TypeScript 컴파일러(tsc)를 이용하여 JavaScript로 변환하여 사용합니다.\r\n- `tsconfig.json` 파일을 이용하여 컴파일러에 여러 옵션(ex. 어떤 버전의 JavaScript로 변환할 것인지)을 줄 수가 있습니다.\r\n    ```jsonc\r\n    {\r\n        "compilerOptions": {\r\n            "target": "es3", // Target JavaScript version.\r\n            ...\r\n        },\r\n        ...\r\n    }\r\n    ```\r\n'},6778:function(e){e.exports='# About\r\n\r\n웹사이트를 구성하는 기본적인 요소들에 대하여 담았습니다.\r\n\r\n- [W3Schools](https://www.w3schools.com/): 많은 예시 코드들이 있으며 그것들을 직접 실행해 볼 수 있어 유용합니다.\r\n\r\n# HTML / CSS / JS\r\n\r\n웹사이트는 일반적으로 아래의 세 가지 언어로 구성됩니다.\r\n\r\n- HTML: 웹사이트의 구조(layout)를 표현합니다.\r\n    ```html\r\n    <div class="App">\r\n        <span class="About">Hello!</span>\r\n        <button class="Run">Click</button>\r\n    </div>\r\n    ```\r\n- CSS: 웹사이트의 스타일(ex. 색깔, 크기)을 결정합니다.\r\n    ```css\r\n    .About {\r\n        color: #0000ff;\r\n    }\r\n    ```\r\n- JavaScript: 웹사이트의 동작(ex. 상호작용, DOM 변경)을 표현합니다.\r\n    ```javascript\r\n    const button = document.getElementsByClassName(\'Run\')[0];\r\n\r\n    button.addEventListener(\'click\', () => {\r\n        alert(\'Yeah!\');\r\n    });\r\n    ```\r\n\r\n# How website works\r\n\r\n- 사용자(클라이언트)가 서버에 웹사이트를 요청하면, 서버는 HTML, JS, CSS 파일들을 보내 줍니다.\r\n- 웹 브라우저는 HTML, CSS로부터 각각 DOM(Document Object Model) tree 및 CSSOM(CSS Object Model)을 생성합니다.\r\n- 웹 브라우저는 이들로부터 render tree를 만들어 화면에 웹사이트를 그립니다.\r\n\r\n# Example\r\n\r\n아래는 간단한 웹사이트입니다. .html 파일로 저장한다음 실행하면 텍스트와 버튼이 있는 간단한 웹사이트가 나타납니다.\r\n\r\n```html\r\n<html>\r\n<head>\r\n    <title>제목</title>\r\n\r\n    <style type="text/css">\r\n        .App {\r\n            width: 100px;\r\n            border: 1px solid #000000;\r\n        }\r\n\r\n        .About {\r\n            color: #0000ff;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n    <div class="App">\r\n        <span class="About">Hello!</span>\r\n        <button class="Run">Click</button>\r\n    </div>\r\n\r\n    <script type="text/javascript">\r\n        const button = document.getElementsByClassName(\'Run\')[0];\r\n\r\n        button.addEventListener(\'click\', () => {\r\n            alert(\'Yeah!\');\r\n        });\r\n    <\/script>\r\n</body>\r\n</html>\r\n```\r\n\r\n이 때 `<script>...<\/script>`는 `<head>...</head>`에 넣는 경우도 있고, 위의 예시처럼 `<body>...</body>`의 **끝에** 넣는 경우도 있습니다.\r\n어떤 차이가 있을까요??\r\n'},549:function(e){e.exports="# About\r\n"}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return n[e](a,a.exports,r),a.exports}r.m=n,e=[],r.O=function(n,t,o,a){if(!t){var c=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],a=e[u][2];for(var i=!0,l=0;l<t.length;l++)(!1&a||c>=a)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(i=!1,a<c&&(c=a));i&&(e.splice(u--,1),n=o())}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,o,a]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={179:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,a,c=t[0],i=t[1],l=t[2],u=0;for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var s=l(r);for(n&&n(t);u<c.length;u++)a=c[u],r.o(e,a)&&e[a]&&e[a][0](),e[c[u]]=0;return r.O(s)},t=self.webpackChunklets_react=self.webpackChunklets_react||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[148],(function(){return r(9320)}));o=r.O(o)}();