!function(){"use strict";var n,e={9320:function(n,e,r){var t=r(7294),o=r(3935);function a(n){var e=n.split(/\r?\n/),r=[{title:null,content:""}];return e.forEach((function(n){var e=function(n){var e=n.match(/^#[^#]/);if(null===e)return null;var r=e[0];return n.slice(r.length)}(n);null!==e?r.push({title:e,content:""}):r[r.length-1].content+=n+"\n"})),r}function c(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=r){var t,o,a=[],c=!0,i=!1;try{for(r=r.call(n);!(c=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);c=!0);}catch(n){i=!0,o=n}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(n,e)||function(n,e){if(n){if("string"==typeof n)return i(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}var s=(0,t.createContext)({}),l=function(n){var e=n.articles,r=n.children,o=c((0,t.useState)(0),2),a=o[0],i=o[1],l=c((0,t.useState)(null),2),u=l[0],p=l[1];return t.createElement(s.Provider,{value:{articles:e,articleIndex:a,sectionIndex:u,setArticleIndex:i,setSectionIndex:p}},r)};function u(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}var p=(0,t.createContext)({}),m=function(n){var e,r,o=n.children,a=(e=(0,t.useState)(!1),r=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var r=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=r){var t,o,a=[],c=!0,i=!1;try{for(r=r.call(n);!(c=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);c=!0);}catch(n){i=!0,o=n}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,r)||function(n,e){if(n){if("string"==typeof n)return u(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(n,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],i=a[1];return t.createElement(p.Provider,{value:{isMenuOpen:c,openMenu:i}},o)},d=function(n){var e=n.index,r=n.section,o=(0,t.useContext)(s).setSectionIndex;return t.createElement("div",{className:"SectionItem",onClick:function(){o(e)}},r.title)},f=function(n){var e=n.article,r=n.isSelected,o=n.onClick;return t.createElement("div",{className:"ArticleItem"},t.createElement("div",{className:"Button ".concat(r?"selected":""),onClick:o},e.title),r&&t.createElement("div",{className:"Dropdown"},e.sections.map((function(n,e){return null!==n.title&&t.createElement(d,{key:e,index:e,section:n})}))))},v=function(){var n=(0,t.useContext)(s),e=n.articles,r=n.articleIndex,o=n.setArticleIndex,a=(0,t.useContext)(p).isMenuOpen;return t.createElement("div",{className:"Menu ".concat(a?"open":"")},e.map((function(n,e){return t.createElement(f,{key:e,article:n,isSelected:e===r,onClick:function(){o(e)}})})))},g=r(8456),b=r.n(g),h=r(9657),y=r(5376),x=r(5046),S=r(7852),E=r(6993),j=r(2422),w=r(8272);h.Z.registerLanguage("jsx",y.Z),h.Z.registerLanguage("tsx",x.Z),h.Z.registerLanguage("json",S.Z),h.Z.registerLanguage("html",E.Z),h.Z.registerLanguage("css",j.Z);var k={code:function(n){var e=n.inline,r=n.className,o=n.children,a=void 0!==r&&r.startsWith("language-");if(e)return t.createElement("code",{className:r},o);if(a){var c=function(n){var e=n.toLowerCase();switch(e){case"javascript":return"jsx";case"typescript":return"tsx";case"jsonc":return"json";default:return e}}(r.substring(9));return t.createElement(h.Z,{language:c,style:w.Z},String(o).trimRight())}return t.createElement(h.Z,{style:w.Z},String(o).trimRight())},a:function(n){var e=n.href,r=n.children;return t.createElement("a",{target:"_blank",rel:"noopenner noreferrer",href:e},r)}},C=function(n){var e=n.content;return t.createElement(b(),{components:k},e)},A=function(n){var e=n.index,r=n.section,o=(0,t.useContext)(s),a=o.sectionIndex,c=o.setSectionIndex,i=(0,t.useRef)(null);return(0,t.useEffect)((function(){e===a&&(i.current.scrollIntoView({behavior:"smooth"}),c(null))}),[a]),t.createElement("div",{ref:i},null!==r.title&&t.createElement("h1",null,r.title),t.createElement(C,{content:r.content}))},I=function(){var n=(0,t.useContext)(s),e=n.articles,r=n.articleIndex,o=(0,t.useContext)(p).openMenu,a=e[r];return t.createElement("div",{className:"Viewer",onClick:function(){o(!1)}},t.createElement("div",{className:"ArticleTitle"},a.title),t.createElement("div",{className:"ArticleSections",key:a.title},a.sections.map((function(n,e){return t.createElement(A,{key:e,index:e,section:n})}))))},N=function(){var n=(0,t.useContext)(p),e=n.isMenuOpen,r=n.openMenu;return t.createElement("button",{className:"Button",onClick:function(){r(!e)}},"Menu")},O=function(){return t.createElement("a",{className:"Button",href:"https://github.com/Avantgarde95/lets-react",target:"_blank",rel:"noopenner noreferrer"},"Code")},M=function(){return t.createElement("div",{className:"Header"},t.createElement(N,null),t.createElement("span",{className:"Title"},"Let's react"),t.createElement(O,null))},J=function(){return t.createElement("div",{className:"Content"},t.createElement(v,null),t.createElement(I,null))},T=function(){return t.createElement("div",{className:"App"},t.createElement(M,null),t.createElement(J,null))},L=r(2372),P=r(6778),Z=r(6171),R=r(2650),B=r(6004),H=r(549),W=r(7133),_=[{title:"Introduction",sections:a(L)},{title:"Web",sections:a(P)},{title:"Node.js",sections:a(Z)},{title:"TypeScript",sections:a(R)},{title:"Webpack",sections:a(H)},{title:"React",sections:a(W)},{title:"SASS",sections:a(B)}],D=function(){return t.createElement(l,{articles:_},t.createElement(m,null,t.createElement(T,null)))},U=document.getElementsByClassName("Root")[0];(0,o.render)(t.createElement(D,null),U)},2372:function(n){n.exports='[React](https://reactjs.org/)로 작성한 React 입문서입니다.\r\n\r\n- 각 프로그램 및 라이브러리의 역할이 무엇인지, 그리고 용어들이 무슨 의미인지 담았습니다.\r\n- 각 프로그램 및 라이브러리의 자세한 사용법은 담지 않았습니다. 설치, 세팅, 사용하는 방법은 공식 홈페이지, 인터넷 상의 자료들을 참고하세요.\r\n- 이 웹사이트도 여기서 소개한 도구들(TypeScript, Webpack, React, SASS)로 제작하였습니다.\r\n- 지식의 한계로 내용적으로 아직 부족한 부분들이 많아, 추가할 내용이 있다면 제안해주시면 매우 감사하겠습니다.\r\n\r\n상단의 "Menu" 버튼을 눌러 메뉴를 열 수 있습니다.\r\n'},6171:function(n){n.exports="# About\r\n- [Homepage](https://nodejs.org/)\r\n- JavaScript를 사용하여 서버 등 다양한 어플리케이션을 제작할 수 있게 해주는 프로그램입니다.\r\n- Python, JDK와 비슷하게 생각하면 됩니다.\r\n\r\n# Example\r\n- 컴퓨터에 Node.js를 설치하고 터미널을 열어 `node`를 실행해보세요.\r\n    ```JavaScript\r\n    Welcome to Node.js v14.16.0.\r\n    Type \".help\" for more information.\r\n    > 3 + 4\r\n    7\r\n    > 'abc' + 'def'\r\n    'abcdef'\r\n    >\r\n    ```\r\n\r\n# npm\r\n- Node.js는 [npm](https://www.npmjs.com/)이라는 패키지 관리자를 제공합니다. 웹사이트 제작에도 서버 제작에도 모두 사용할 수 있습니다.\r\n  - Python의 pip, Java의 maven과 비슷하게 생각하면 됩니다.\r\n- `package.json` 파일을 이용하여 프로젝트의 정보 및 사용할 라이브러리들을 지정해줄 수가 있습니다.\r\n  - 참고 사이트: [package.json 알아보기](https://velog.io/@skyepodium/package.json)\r\n- `npm install`을 실행하면 `package.json`을 읽어서 라이브러리들을 `node_modules` 아래에 설치해줍니다.\r\n    - `package-lock.json`이라는 파일이 자동 생성되며, 이는 사용자가 수정할 필요가 없습니다.\r\n    - `node_modules`의 크기는 일반적으로 **매우** 크기 때문에 git 저장소에 올리지 않는 것을 권장합니다.\r\n- `npm run ABC`를 실행하면 `package.json`의 `scripts`에서 `ABC`에 해당하는 문자열을 실행해줍니다. 빌드 스크립트를 만들 때 유용하게 사용할 수 있습니다.\r\n"},7133:function(n){n.exports="# About\r\nUnder construction\r\n\r\n# Component\r\n- State\r\n- Props\r\n- Lifecycle\r\n\r\n# Context\r\n- Context\r\n- Provider\r\n\r\n# JSX\r\n- `React.createElement`\r\n- JSX, TSX 문법\r\n"},6004:function(n){n.exports="# About\r\nUnder construction\r\n"},2650:function(n){n.exports="# About\r\n- [Homepage](https://www.typescriptlang.org/)\r\n- JavaScript 기반의 언어로, JavaScript의 문법을 확장하여 C++, Java처럼 **자료형(type)을 명시하고** 체크하여 견고한 프로그래밍이 가능하도록 한 언어입니다.\r\n    ```typescript\r\n    // JavaScript\r\n    function addInts(x, y) {\r\n        return x + y;\r\n    }\r\n\r\n    // TypeScript\r\n    function addInts(x: number, y: number): number {\r\n        return x + y;\r\n    }\r\n    ```\r\n- JavaScript의 기본 자료형뿐만 아니라, 자료형의 조합을 통한 복잡한 자료형 생성도 지원합니다.\r\n    ```typescript\r\n    // number이거나 string\r\n    const x: number | string = 3;\r\n\r\n    // 'A', 'B', or 'C' ('D'를 넣으면 에러)\r\n    const y: 'A' | 'B' | 'C' = 'A';\r\n\r\n    // 키는 number, 값은 boolean인 map 형태의 객체\r\n    const z: {[key: number]: boolean} = {3: true, 4: false};\r\n    ```\r\n- 웹 브라우저는 일반적으로 JavaScript만을 지원합니다. 따라서 TypeScript 컴파일러(tsc)를 이용하여 JavaScript로 변환하여 사용해야 합니다.\r\n  `tsconfig.json` 파일을 이용하여 컴파일러에 여러 옵션(ex. 어떤 버전의 JavaScript로 변환할 것인지)을 줄 수가 있습니다.\r\n    ```jsonc\r\n    {\r\n        \"compilerOptions\": {\r\n            \"target\": \"es3\", // Target JavaScript version.\r\n            ...\r\n        },\r\n        ...\r\n    }\r\n    ```\r\n\r\n# Example\r\n`npm install -g typescript`를 사용하여 TypeScript 컴파일러를 설치하고, 아래 코드를 \"Example.ts\" 파일로 저장하고 터미널에서 `tsc Example.ts`를 실행해보세요.\r\n\r\n```typescript\r\nfunction addInts(x: number, y: number): number {\r\n    return x + y;\r\n}\r\n```\r\n\r\n`Example.js`가 생성됩니다.\r\n\r\n```javascript\r\nfunction addInts(x, y) {\r\n    return x + y;\r\n}\r\n```\r\n\r\n만약 아래와 같이 잘못된 자료형의 코드를 넣는다면 컴파일 에러가 납니다.\r\n\r\n```typescript\r\nfunction addInts(x: number, y: number): number {\r\n    return x + y;\r\n}\r\n\r\naddInts(3, 'abc'); // Wrong code!\r\n```\r\n"},6778:function(n){n.exports='# About\r\n\r\n웹사이트를 구성하는 기본적인 요소들에 대하여 담았습니다.\r\n\r\n- [W3Schools](https://www.w3schools.com/): 많은 예시 코드들이 있으며 그것들을 직접 실행해 볼 수 있어 유용합니다.\r\n\r\n# HTML / CSS / JS\r\n\r\n웹사이트는 일반적으로 아래의 세 가지 언어로 구성됩니다.\r\n\r\n- HTML: 웹사이트의 구조(layout)를 표현합니다.\r\n    ```html\r\n    <div class="App">\r\n        <span class="About">Hello!</span>\r\n        <button class="Run">Click</button>\r\n    </div>\r\n    ```\r\n- CSS: 웹사이트의 스타일(ex. 색깔, 크기)을 결정합니다.\r\n    ```css\r\n    .About {\r\n        color: #0000ff;\r\n    }\r\n    ```\r\n- JavaScript: 웹사이트의 동작(ex. 상호작용, DOM 변경)을 표현합니다.\r\n    ```javascript\r\n    const button = document.getElementsByClassName(\'Run\')[0];\r\n\r\n    button.addEventListener(\'click\', () => {\r\n        alert(\'Yeah!\');\r\n    });\r\n    ```\r\n\r\n# How website works\r\n\r\n- 사용자(클라이언트)가 서버에 웹사이트를 요청하면, 서버는 HTML, JS, CSS 파일들을 보내 줍니다.\r\n- 웹 브라우저는 HTML, CSS로부터 각각 DOM(Document Object Model) tree 및 CSSOM(CSS Object Model)을 생성합니다.\r\n- 웹 브라우저는 이들로부터 render tree를 만들어 화면에 웹사이트를 그립니다.\r\n\r\n# Example\r\n\r\n아래는 간단한 웹사이트입니다. .html 파일로 저장한다음 실행하면 텍스트와 버튼이 있는 간단한 웹사이트가 나타납니다.\r\n\r\n```html\r\n<html>\r\n<head>\r\n    <title>제목</title>\r\n\r\n    <style type="text/css">\r\n        .App {\r\n            width: 100px;\r\n            border: 1px solid #000000;\r\n        }\r\n\r\n        .About {\r\n            color: #0000ff;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n    <div class="App">\r\n        <span class="About">Hello!</span>\r\n        <button class="Run">Click</button>\r\n    </div>\r\n\r\n    <script type="text/javascript">\r\n        const button = document.getElementsByClassName(\'Run\')[0];\r\n\r\n        button.addEventListener(\'click\', () => {\r\n            alert(\'Yeah!\');\r\n        });\r\n    <\/script>\r\n</body>\r\n</html>\r\n```\r\n\r\n이 때 `<script>...<\/script>`는 `<head>...</head>`에 넣는 경우도 있고, 위의 예시처럼 `<body>...</body>`의 **끝에** 넣는 경우도 있습니다.\r\n어떤 차이가 있을까요??\r\n'},549:function(n){n.exports="# About\r\n- [Homepage](https://webpack.js.org/)\r\n- 웹사이트가 많은 코드와 리소스 파일들로 이루어져 있다고 합시다. 이들의 의존성을 분석하여 웹 브라우저 등에서 사용할 수 있도록 '한 세트'로 묶어주는 (i.e '번들링', '패키징') 라이브러리입니다.\r\n  ```\r\n  A.js ----+\r\n  B.js     |\r\n  C.ts     |\r\n           |\r\n  M.css    +-------\x3e bundle.js, bundle.css, resources\r\n  N.css    |\r\n           |\r\n  X.png    |\r\n  Y.jpg ---+\r\n  ```\r\n- \"webpack.config.js\"를 사용하여 다양한 설정들을 할 수 있습니다.\r\n  - Paths\r\n  - [Loader](https://joshua1988.github.io/webpack-guide/concepts/loader.html)\r\n  - [Plugin](https://joshua1988.github.io/webpack-guide/concepts/plugin.html)\r\n  - [Source map](https://joshua1988.github.io/webpack-guide/devtools/source-map.html)\r\n  - ...\r\n- [gulp](https://gulpjs.com/), [rollup](https://rollupjs.org/guide/en/) 등의 대체제들도 존재합니다.\r\n\r\n# Loader\r\n- 각 파일들을 읽고 처리해주는 역할을 합니다.\r\n  예컨대 TypeScript 파일들을 [ts-loader](https://www.npmjs.com/package/ts-loader)를 사용하여 처리하고자 한다면 아래와 같이 설정하면 됩니다.\r\n    ```javascript\r\n    module.exports = (env, argv) => {\r\n        ...,\r\n        module: {\r\n            rules: {\r\n                test: /\\.tsx?$/, // .ts 또는 .tsx로 끝나는 파일 (JavaScript 정규 표현식 참고)\r\n                use: 'ts-loader' // ts-loader 사용\r\n            }\r\n        }\r\n    }\r\n    ```\r\n\r\n# Plugin\r\n- Plugin을 사용하여 추가적인 동작들을 수행할 수 있습니다.\r\n  예컨대 [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)을 사용하여 빌드 전에 이전 결과물들을 지우도록 할 수 있습니다.\r\n    ```javascript\r\n    const { CleanWebpackPlugin } = require('clean-webpack-plugin');\r\n\r\n    module.exports = (env, argv) => {\r\n        ...,\r\n        plugins: [\r\n            new CleanWebpackPlugin()\r\n        ]\r\n    }\r\n    ```\r\n\r\n# Source map\r\n- Webpack으로 코드를 빌드하고 나면 코드가 하나로 합쳐지고 설정에 따라 [난독화, 압축화](https://12bme.tistory.com/357)가 됩니다.\r\n  만약 웹사이트에서 에러가 발생했을 때, 웹 브라우저가 원본 코드가 아닌 결과 코드의 줄을 알려주므로 디버깅이 힘들어집니다.\r\n- Source map은 원본 코드와 결과 코드를 연결하여 디버깅 작업을 쉽게 해줍니다.\r\n  Chrome 등의 웹 브라우저들은 source map을 인식하여, 만약 에러가 발생하면 원본 코드의 해당하는 줄을 자동으로 찾아줍니다.\r\n- 별도의 파일(.map)로 생성할 수도 있으며, 결과 코드 내에 삽입할 수도 (inline) 있습니다.\r\n\r\n# Example\r\n\r\n이 웹사이트도 Webpack을 이용하여 제작하였습니다.\r\n"}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.m=e,n=[],t.O=function(e,r,o,a){if(!r){var c=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],a=n[l][2];for(var i=!0,s=0;s<r.length;s++)(!1&a||c>=a)&&Object.keys(t.O).every((function(n){return t.O[n](r[s])}))?r.splice(s--,1):(i=!1,a<c&&(c=a));i&&(n.splice(l--,1),e=o())}return e}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[r,o,a]},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={179:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,a,c=r[0],i=r[1],s=r[2],l=0;for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(s)var u=s(t);for(e&&e(r);l<c.length;l++)a=c[l],t.o(n,a)&&n[a]&&n[a][0](),n[c[l]]=0;return t.O(u)},r=self.webpackChunklets_react=self.webpackChunklets_react||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var o=t.O(void 0,[148],(function(){return t(9320)}));o=t.O(o)}();