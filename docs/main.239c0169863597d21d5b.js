!function(){"use strict";var n,e={9320:function(n,e,t){var r=t(7294),o=t(3935);function a(n){var e=n.split(/\r?\n/),t=[{title:null,content:""}];return e.forEach((function(n){var e=function(n){var e=n.match(/^#[^#]/);if(null===e)return null;var t=e[0];return n.slice(t.length)}(n);null!==e?t.push({title:e,content:""}):t[t.length-1].content+=n+"\n"})),t}function c(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=t){var r,o,a=[],c=!0,i=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);c=!0);}catch(n){i=!0,o=n}finally{try{c||null==t.return||t.return()}finally{if(i)throw o}}return a}}(n,e)||function(n,e){if(n){if("string"==typeof n)return i(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var l=(0,r.createContext)({}),s=function(n){var e=n.articles,t=n.children,o=c((0,r.useState)(0),2),a=o[0],i=o[1],s=c((0,r.useState)(null),2),u=s[0],p=s[1];return r.createElement(l.Provider,{value:{articles:e,articleIndex:a,sectionIndex:u,setArticleIndex:i,setSectionIndex:p}},t)};function u(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var p=(0,r.createContext)({}),m=function(n){var e,t,o=n.children,a=(e=(0,r.useState)(!1),t=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var t=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=t){var r,o,a=[],c=!0,i=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);c=!0);}catch(n){i=!0,o=n}finally{try{c||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,t)||function(n,e){if(n){if("string"==typeof n)return u(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],i=a[1];return r.createElement(p.Provider,{value:{isMenuOpen:c,openMenu:i}},o)},f=function(n){var e=n.index,t=n.section,o=(0,r.useContext)(l).setSectionIndex;return r.createElement("div",{className:"SectionItem",onClick:function(){o(e)}},t.title)},d=function(n){var e=n.article,t=n.isSelected,o=n.onClick;return r.createElement("div",{className:"ArticleItem"},r.createElement("div",{className:"Button ".concat(t?"selected":""),onClick:o},e.title),t&&r.createElement("div",{className:"Dropdown"},e.sections.map((function(n,e){return null!==n.title&&r.createElement(f,{index:e,section:n})}))))},v=function(){var n=(0,r.useContext)(l),e=n.articles,t=n.articleIndex,o=n.setArticleIndex,a=(0,r.useContext)(p).isMenuOpen;return r.createElement("div",{className:"Menu ".concat(a?"open":"")},e.map((function(n,e){return r.createElement(d,{article:n,isSelected:e===t,onClick:function(){o(e)}})})))},y=t(8456),b=t.n(y),h=t(9657),g=t(5376),x=t(5046),S=t(7852),E=t(6993),j=t(2422),C=t(8272);h.Z.registerLanguage("jsx",g.Z),h.Z.registerLanguage("tsx",x.Z),h.Z.registerLanguage("json",S.Z),h.Z.registerLanguage("html",E.Z),h.Z.registerLanguage("css",j.Z);var A={code:function(n){var e=n.inline,t=n.className,o=n.children,a=void 0!==t&&t.startsWith("language-");if(!e&&a){var c=function(n){var e=n.toLowerCase();switch(e){case"javascript":return"jsx";case"typescript":return"tsx";case"jsonc":return"json";default:return e}}(t.substring(9));return r.createElement(h.Z,{language:c,style:C.Z},String(o).trimRight())}return r.createElement("code",{className:t},o)},a:function(n){var e=n.href,t=n.children;return r.createElement("a",{target:"_blank",rel:"noopenner noreferrer",href:e},t)}},w=function(n){var e=n.content;return r.createElement(b(),{components:A},e)},k=function(n){var e=n.index,t=n.section,o=(0,r.useContext)(l),a=o.sectionIndex,c=o.setSectionIndex,i=(0,r.useRef)(null);return(0,r.useEffect)((function(){e===a&&(i.current.scrollIntoView({behavior:"smooth"}),c(null))}),[a]),r.createElement("div",{ref:i},null!==t.title&&r.createElement("h1",null,t.title),r.createElement(w,{content:t.content}))},I=function(){var n=(0,r.useContext)(l),e=n.articles,t=n.articleIndex,o=(0,r.useContext)(p).openMenu,a=e[t];return r.createElement("div",{className:"Viewer",onClick:function(){o(!1)}},r.createElement("div",{className:"ArticleTitle"},a.title),r.createElement("div",{className:"ArticleSections",key:a.title},a.sections.map((function(n,e){return r.createElement(k,{index:e,section:n})}))))},O=function(){var n=(0,r.useContext)(p),e=n.isMenuOpen,t=n.openMenu;return r.createElement("button",{className:"Button",onClick:function(){t(!e)}},"Menu")},N=function(){return r.createElement("a",{className:"Button",href:"https://github.com/Avantgarde95/lets-react",target:"_blank",rel:"noopenner noreferrer"},"Code")},M=function(){return r.createElement("div",{className:"Header"},r.createElement(O,null),r.createElement("span",{className:"Title"},"Let's react"),r.createElement(N,null))},T=function(){return r.createElement("div",{className:"Content"},r.createElement(v,null),r.createElement(I,null))},J=function(){return r.createElement("div",{className:"App"},r.createElement(M,null),r.createElement(T,null))},L=t(2372),Z=t(6778),R=t(6171),H=t(2650),B=t(6004),_=t(549),W=t(7133),P=[{title:"Introduction",sections:a(L)},{title:"Web",sections:a(Z)},{title:"Node.js",sections:a(R)},{title:"TypeScript",sections:a(H)},{title:"Webpack",sections:a(_)},{title:"React",sections:a(W)},{title:"SASS",sections:a(B)}],D=function(){return r.createElement(s,{articles:P},r.createElement(m,null,r.createElement(J,null)))},U=document.getElementsByClassName("Root")[0];(0,o.render)(r.createElement(D,null),U)},2372:function(n){n.exports='[React](https://reactjs.org/)로 작성한 React 입문서입니다.\r\n\r\n- 각 프로그램 및 라이브러리의 역할이 무엇인지, 그리고 용어들이 무슨 의미인지 담았습니다.\r\n- 각 프로그램 및 라이브러리의 자세한 사용법은 담지 않았습니다. 설치, 세팅, 사용하는 방법은 공식 홈페이지, 인터넷 상의 자료들을 참고하세요.\r\n- 이 웹사이트도 여기서 소개한 도구들(TypeScript, Webpack, React, SASS)로 제작하였습니다.\r\n- 지식의 한계로 내용적으로 아직 부족한 부분들이 많아, 추가할 내용이 있다면 제안해주시면 매우 감사하겠습니다.\r\n\r\n상단의 "Menu" 버튼을 눌러 메뉴를 열 수 있습니다.\r\n'},6171:function(n){n.exports="# About\r\n- [Homepage](https://nodejs.org/)\r\n- JavaScript를 사용하여 서버 등 다양한 어플리케이션을 제작할 수 있게 해주는 프로그램입니다.\r\n- Python, JDK와 비슷하게 생각하면 됩니다.\r\n\r\n# Example\r\n- 컴퓨터에 Node.js를 설치하고 터미널을 열어 `node`를 실행해보세요.\r\n    ```JavaScript\r\n    Welcome to Node.js v14.16.0.\r\n    Type \".help\" for more information.\r\n    > 3 + 4\r\n    7\r\n    > 'abc' + 'def'\r\n    'abcdef'\r\n    >\r\n    ```\r\n\r\n# npm\r\n- Node.js는 [npm](https://www.npmjs.com/)이라는 패키지 관리자를 제공합니다. 웹사이트 제작에도 서버 제작에도 모두 사용할 수 있습니다.\r\n  - Python의 pip, Java의 maven과 비슷하게 생각하면 됩니다.\r\n- `package.json` 파일을 이용하여 프로젝트의 정보 및 사용할 라이브러리들을 지정해줄 수가 있습니다.\r\n  - 참고 사이트: [package.json 알아보기](https://velog.io/@skyepodium/package.json)\r\n- `npm install`을 실행하면 `package.json`을 읽어서 라이브러리들을 `node_modules` 아래에 설치해줍니다.\r\n    - `package-lock.json`이라는 파일이 자동 생성되며, 이는 사용자가 수정할 필요가 없습니다.\r\n    - `node_modules`의 크기는 일반적으로 **매우** 크기 때문에 git 저장소에 올리지 않는 것을 권장합니다.\r\n- `npm run ABC`를 실행하면 `package.json`의 `scripts`에서 `ABC`에 해당하는 문자열을 실행해줍니다. 빌드 스크립트를 만들 때 유용하게 사용할 수 있습니다.\r\n"},7133:function(n){n.exports="# About\r\n\r\n# Component\r\n\r\n# JSX\r\n"},6004:function(n){n.exports="# About\r\n"},2650:function(n){n.exports='# About\r\n- [Homepage](https://www.typescriptlang.org/)\r\n- JavaScript 기반의 언어로, JavaScript의 문법을 확장하여 C++, Java처럼 **자료형(type)을 명시하고** 체크하여 견고한 프로그래밍이 가능하도록 한 언어입니다.\r\n    ```typescript\r\n    // JavaScript\r\n    function addInts(x, y) {\r\n        return x + y;\r\n    }\r\n\r\n    // TypeScript\r\n    function addInts(x: number, y: number): number {\r\n        return x + y;\r\n    }\r\n    ```\r\n- 웹 브라우저는 일반적으로 JavaScript만을 지원합니다. 따라서 TypeScript 컴파일러(tsc)를 이용하여 JavaScript로 변환하여 사용해야 합니다.\r\n  `tsconfig.json` 파일을 이용하여 컴파일러에 여러 옵션(ex. 어떤 버전의 JavaScript로 변환할 것인지)을 줄 수가 있습니다.\r\n    ```jsonc\r\n    {\r\n        "compilerOptions": {\r\n            "target": "es3", // Target JavaScript version.\r\n            ...\r\n        },\r\n        ...\r\n    }\r\n    ```\r\n\r\n# Example\r\n`npm install -g typescript`를 사용하여 TypeScript 컴파일러를 설치하고, 아래 코드를 "Example.ts" 파일로 저장하고 터미널에서 `tsc Example.ts`를 실행해보세요.\r\n\r\n```typescript\r\nfunction addInts(x: number, y: number): number {\r\n    return x + y;\r\n}\r\n```\r\n\r\n`Example.js`가 생성됩니다.\r\n\r\n```javascript\r\nfunction addInts(x, y) {\r\n    return x + y;\r\n}\r\n```\r\n\r\n만약 아래와 같이 잘못된 자료형의 코드를 넣는다면 컴파일 에러가 납니다.\r\n\r\n```typescript\r\nfunction addInts(x: number, y: number): number {\r\n    return x + y;\r\n}\r\n\r\naddInts(3, \'abc\'); // Wrong code!\r\n```\r\n'},6778:function(n){n.exports='# About\r\n\r\n웹사이트를 구성하는 기본적인 요소들에 대하여 담았습니다.\r\n\r\n- [W3Schools](https://www.w3schools.com/): 많은 예시 코드들이 있으며 그것들을 직접 실행해 볼 수 있어 유용합니다.\r\n\r\n# HTML / CSS / JS\r\n\r\n웹사이트는 일반적으로 아래의 세 가지 언어로 구성됩니다.\r\n\r\n- HTML: 웹사이트의 구조(layout)를 표현합니다.\r\n    ```html\r\n    <div class="App">\r\n        <span class="About">Hello!</span>\r\n        <button class="Run">Click</button>\r\n    </div>\r\n    ```\r\n- CSS: 웹사이트의 스타일(ex. 색깔, 크기)을 결정합니다.\r\n    ```css\r\n    .About {\r\n        color: #0000ff;\r\n    }\r\n    ```\r\n- JavaScript: 웹사이트의 동작(ex. 상호작용, DOM 변경)을 표현합니다.\r\n    ```javascript\r\n    const button = document.getElementsByClassName(\'Run\')[0];\r\n\r\n    button.addEventListener(\'click\', () => {\r\n        alert(\'Yeah!\');\r\n    });\r\n    ```\r\n\r\n# How website works\r\n\r\n- 사용자(클라이언트)가 서버에 웹사이트를 요청하면, 서버는 HTML, JS, CSS 파일들을 보내 줍니다.\r\n- 웹 브라우저는 HTML, CSS로부터 각각 DOM(Document Object Model) tree 및 CSSOM(CSS Object Model)을 생성합니다.\r\n- 웹 브라우저는 이들로부터 render tree를 만들어 화면에 웹사이트를 그립니다.\r\n\r\n# Example\r\n\r\n아래는 간단한 웹사이트입니다. .html 파일로 저장한다음 실행하면 텍스트와 버튼이 있는 간단한 웹사이트가 나타납니다.\r\n\r\n```html\r\n<html>\r\n<head>\r\n    <title>제목</title>\r\n\r\n    <style type="text/css">\r\n        .App {\r\n            width: 100px;\r\n            border: 1px solid #000000;\r\n        }\r\n\r\n        .About {\r\n            color: #0000ff;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n    <div class="App">\r\n        <span class="About">Hello!</span>\r\n        <button class="Run">Click</button>\r\n    </div>\r\n\r\n    <script type="text/javascript">\r\n        const button = document.getElementsByClassName(\'Run\')[0];\r\n\r\n        button.addEventListener(\'click\', () => {\r\n            alert(\'Yeah!\');\r\n        });\r\n    <\/script>\r\n</body>\r\n</html>\r\n```\r\n\r\n이 때 `<script>...<\/script>`는 `<head>...</head>`에 넣는 경우도 있고, 위의 예시처럼 `<body>...</body>`의 **끝에** 넣는 경우도 있습니다.\r\n어떤 차이가 있을까요??\r\n'},549:function(n){n.exports="# About\r\n"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,n=[],r.O=function(e,t,o,a){if(!t){var c=1/0;for(s=0;s<n.length;s++){t=n[s][0],o=n[s][1],a=n[s][2];for(var i=!0,l=0;l<t.length;l++)(!1&a||c>=a)&&Object.keys(r.O).every((function(n){return r.O[n](t[l])}))?t.splice(l--,1):(i=!1,a<c&&(c=a));i&&(n.splice(s--,1),e=o())}return e}a=a||0;for(var s=n.length;s>0&&n[s-1][2]>a;s--)n[s]=n[s-1];n[s]=[t,o,a]},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,{a:e}),e},r.d=function(n,e){for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={179:0};r.O.j=function(e){return 0===n[e]};var e=function(e,t){var o,a,c=t[0],i=t[1],l=t[2],s=0;for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var u=l(r);for(e&&e(t);s<c.length;s++)a=c[s],r.o(n,a)&&n[a]&&n[a][0](),n[c[s]]=0;return r.O(u)},t=self.webpackChunklets_react=self.webpackChunklets_react||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var o=r.O(void 0,[148],(function(){return r(9320)}));o=r.O(o)}();