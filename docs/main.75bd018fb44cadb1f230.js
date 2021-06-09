!function(){"use strict";var n,t={2185:function(n,t,r){var e=r(7294),s=r(3935);function o(n){var t=n.split(/\r?\n/),r=[{title:null,content:""}];return t.forEach((function(n){var t=function(n){var t=n.match(/^#[^#]/);if(null===t)return null;var r=t[0];return n.slice(r.length)}(n);null!==t?r.push({title:t,content:""}):r[r.length-1].content+=n+"\n"})),r}var c=(0,e.createContext)({}),a=function(n){var t=n.articles,r=n.children,s=(0,e.useState)(0),o=s[0],a=s[1],i=(0,e.useState)(null),l=i[0],p=i[1];return e.createElement(c.Provider,{value:{articles:t,articleIndex:o,sectionIndex:l,setArticleIndex:a,setSectionIndex:p}},r)},i=(0,e.createContext)({}),l=function(n){var t=n.children,r=(0,e.useState)(!1),s=r[0],o=r[1];return e.createElement(i.Provider,{value:{isMenuOpen:s,openMenu:o}},t)},p=function(n){var t=n.index,r=n.section,s=(0,e.useContext)(c).setSectionIndex;return e.createElement("div",{className:"SectionItem",onClick:function(){s(t)}},r.title)},u=function(n){var t=n.article,r=n.isSelected,s=n.onClick;return e.createElement("div",{className:"ArticleItem"},e.createElement("div",{className:"Button "+(r?"selected":""),onClick:s},t.title),r&&e.createElement("div",{className:"Dropdown"},t.sections.map((function(n,t){return null!==n.title&&e.createElement(p,{key:t,index:t,section:n})}))))},d=function(){var n=(0,e.useContext)(c),t=n.articles,r=n.articleIndex,s=n.setArticleIndex,o=(0,e.useContext)(i).isMenuOpen;return e.createElement("div",{className:"Menu "+(o?"open":"")},t.map((function(n,t){return e.createElement(u,{key:t,article:n,isSelected:t===r,onClick:function(){s(t)}})})))},m=r(8456),v=r.n(m),x=r(9657),h=r(5376),g=r(5046),b=r(7852),f=r(6993),y=r(2422),S=r(8272);x.Z.registerLanguage("jsx",h.Z),x.Z.registerLanguage("tsx",g.Z),x.Z.registerLanguage("json",b.Z),x.Z.registerLanguage("html",f.Z),x.Z.registerLanguage("css",y.Z);var j=function(n){var t=n.src,r=n.alt,s=n.children,o=(0,e.useState)(!1),c=o[0],a=o[1];return e.createElement("div",{className:"Image"},!c&&"Loading...",e.createElement("img",{src:t,alt:r,onLoad:function(){a(!0)}},s))},C={code:function(n){var t=n.inline,r=n.className,s=n.children,o=void 0!==r&&r.startsWith("language-");if(t)return e.createElement("code",{className:r},s);if(o){var c=function(n){var t=n.toLowerCase();switch(t){case"javascript":return"jsx";case"typescript":return"tsx";case"jsonc":return"json";default:return t}}(r.substring(9));return e.createElement(x.Z,{language:c,style:S.Z},String(s).trimRight())}return e.createElement(x.Z,{style:S.Z},String(s).trimRight())},a:function(n){var t=n.href,r=n.children;return e.createElement("a",{target:"_blank",rel:"noopenner noreferrer",href:t},r)},img:function(n){var t=n.src,r=n.alt,s=n.children;return e.createElement(j,{src:t,alt:r},s)}},k=function(n){var t=n.content;return e.createElement(v(),{components:C},t)},w=function(n){var t=n.index,r=n.section,s=(0,e.useContext)(c),o=s.sectionIndex,a=s.setSectionIndex,i=(0,e.useRef)(null);return(0,e.useEffect)((function(){t===o&&(i.current.scrollIntoView({behavior:"smooth"}),a(null))}),[o]),e.createElement("div",{ref:i},null!==r.title&&e.createElement("h1",null,r.title),e.createElement(k,{content:r.content}))},E=function(){var n=(0,e.useContext)(c),t=n.articles,r=n.articleIndex,s=(0,e.useContext)(i).openMenu,o=t[r];return e.createElement("div",{className:"Viewer",onClick:function(){s(!1)}},e.createElement("div",{className:"ArticleTitle"},o.title),e.createElement("div",{className:"ArticleSections",key:o.title},o.sections.map((function(n,t){return e.createElement(w,{key:t,index:t,section:n})}))))},M=function(){var n=(0,e.useContext)(i),t=n.isMenuOpen,r=n.openMenu;return e.createElement("button",{className:"Button",onClick:function(){r(!t)}},"Menu")},R=function(){return e.createElement("a",{className:"Button",href:"https://github.com/Avantgarde95/lets-react",target:"_blank",rel:"noopenner noreferrer"},"Code")},T=function(){return e.createElement("div",{className:"Header"},e.createElement(M,null),e.createElement("span",{className:"Title"},"Let's react"),e.createElement(R,null))},A=function(){return e.createElement("div",{className:"Main"},e.createElement(d,null),e.createElement(E,null))},O=function(){return e.createElement("div",{className:"App"},e.createElement(T,null),e.createElement(A,null))},J=r(2372),H=r(6778),L=r(6171),D=r(2650),I=r(6004),N=r(549),W=r(7133),P=r(1250),B=r(150),Z=[{title:"Introduction",sections:o(J)},{title:"Web",sections:o(H)},{title:"Node.js",sections:o(L)},{title:"TypeScript",sections:o(D)},{title:"Webpack",sections:o(N)},{title:"React",sections:o(W)},{title:"SASS",sections:o(I)},{title:"MobX",sections:o(P)},{title:"React Router",sections:o(B)}],_=document.getElementsByClassName("Root")[0];(0,s.render)(e.createElement((function(){return e.createElement(a,{articles:Z},e.createElement(l,null,e.createElement(O,null)))}),null),_)},2372:function(n){n.exports='[React](https://reactjs.org/)로 작성한 React 입문서입니다.\r\n\r\n- 각 프로그램 및 라이브러리의 역할이 무엇인지, 그리고 용어들이 무슨 의미인지 담았습니다.\r\n- 각 프로그램 및 라이브러리의 자세한 사용법은 담지 않았습니다. 설치, 세팅, 사용하는 방법은 공식 홈페이지, 인터넷 상의 자료들을 참고하세요.\r\n- 이 웹사이트도 여기서 소개한 도구들(TypeScript, Webpack, React, SASS)로 제작하였습니다.\r\n- 지식의 한계로 내용적으로 아직 부족한 부분들이 많아, 추가할 내용이 있다면 제안해주시면 매우 감사하겠습니다.\r\n\r\n상단의 "Menu" 버튼을 눌러 메뉴를 열 수 있습니다.\r\n'},1250:function(n){n.exports="# About\r\nUnder construction...\r\n"},6171:function(n){n.exports="# About\r\n- [Homepage](https://nodejs.org/)\r\n- JavaScript를 사용하여 서버 등 다양한 어플리케이션을 제작할 수 있게 해주는 프로그램입니다.\r\n- Python, JDK와 비슷하게 생각하면 됩니다.\r\n\r\n# Example\r\n- 컴퓨터에 Node.js를 설치하고 터미널을 열어 `node`를 실행해보세요.\r\n    ```JavaScript\r\n    Welcome to Node.js v14.16.0.\r\n    Type \".help\" for more information.\r\n    > 3 + 4\r\n    7\r\n    > 'abc' + 'def'\r\n    'abcdef'\r\n    >\r\n    ```\r\n\r\n# npm\r\n- Node.js는 [npm](https://www.npmjs.com/)이라는 패키지 관리자를 제공합니다. 웹사이트 제작에도 서버 제작에도 모두 사용할 수 있습니다.\r\n  - Python의 pip, Java의 maven과 비슷하게 생각하면 됩니다.\r\n- `package.json` 파일을 이용하여 프로젝트의 정보 및 사용할 라이브러리들을 지정해줄 수가 있습니다.\r\n- `npm install`을 실행하면 `package.json`을 읽어서 라이브러리들을 `node_modules` 아래에 설치해줍니다.\r\n    - `package-lock.json`이라는 파일이 자동 생성되며, 이는 사용자가 수정할 필요가 없습니다.\r\n    - `node_modules`의 크기는 일반적으로 **매우** 크기 때문에 git 저장소에 올리지 않는 것을 권장합니다.\r\n- `npm run ABC`를 실행하면 `package.json`의 `scripts`에서 `ABC`에 해당하는 문자열을 실행해줍니다. 빌드 스크립트를 만들 때 유용하게 사용할 수 있습니다.\r\n\r\n# Useful links\r\n- [package.json 알아보기](https://velog.io/@skyepodium/package.json)\r\n"},7133:function(n){n.exports="# About\r\n- [Homepage](https://reactjs.org/)\r\n- 복잡한 웹사이트를 쉽게 만들 수 있도록 해주는 **웹 프레임워크**입니다.\r\n- [AngularJS](https://angularjs.org/), [Vue.js](https://v3.vuejs.org/)와 같이 현재 가장 많이 쓰이는 웹 프레임워크 중 하나입니다.\r\n\r\n# Virtual DOM\r\n- 기존의 웹사이트 개발은 HTML로 DOM을 선언한 다음 JavaScript로 DOM을 직접 수정하는 방식으로 이루어집니다.\r\n예를 들어, 버튼을 클릭하면 화면의 텍스트를 변경하는 웹사이트를 만들어봅시다.\r\n    ```html\r\n    <div id=\"App\">\r\n        <button id=\"Button\">Run</button>\r\n        <div id=\"Results\">\r\n            <div id=\"Text1\">Hello</div>\r\n            <div id=\"Text2\">World</div>\r\n        </div>\r\n    </div>\r\n    ```\r\n    ```javascript\r\n    const button = document.getElementById('Button');\r\n\r\n    // 버튼을 클릭하면...\r\n    button.addEventListener('click', () => {\r\n        // Text1의 끝에 !를 붙인다.\r\n        const text1 = document.getElementById('Text1');\r\n        text1.innerHTML += '!';\r\n\r\n        // Text2의 끝에 !를 붙인다.\r\n        const text2 = document.getElementById('Text2');\r\n        text2.innerHTML += '!';\r\n    });\r\n    ```\r\n    ([여기서](https://codesandbox.io/s/lets-react-simple-dom-example-nyf3w) 이 코드를 실행해볼 수 있습니다.)\r\n    ![DirectDOMUpdate](http://drive.google.com/uc?export=view&id=1Ymh5fekB7WfPzZ-ofVpfCvdsOLbV0GlE)\r\n- 사용자가 DOM을 수정할때마다 웹 브라우저는 웹사이트를 다시 렌더링합니다. 즉 DOM의 수정은 비싼 작업이며, 만약 DOM의 수정이 잦다면 **성능 저하**를 일으킬 수 있습니다.\r\n- React는 DOM을 직접 수정하는 기존의 방식 대신, ['가상' DOM(Virtual DOM)](https://ryublock.tistory.com/41)이라는 개념을 도입하여 이 문제를 해결합니다.\r\n    - Virtual DOM은 실제 DOM과 유사한 tree 형태를 가지고 있습니다.\r\n    - 사용자가 데이터를 변경하면 virtual DOM이 업데이트됩니다.\r\n    - React는 virtual DOM의 현재 버전과 이전 버전을 비교하여 달라진 부분들을 찾아서 실제 DOM을 알아서 효율적으로 업데이트 해줍니다.\r\n- 아래는 위의 예시를 React로 재작성한 코드입니다. 사용자가 버튼을 클릭하여 데이터들을 변경하면, React는 virtual DOM을 비교하여 `Text1`과 `Text2`가 변경되었다는 것을 알아내어 실제 DOM에 반영합니다.\r\n    ```jsx\r\n    // App이라는 component를 선언\r\n    class App extends React.Component {\r\n        constructor(props) {\r\n            super(props);\r\n\r\n            // App의 상태(state)를 정의\r\n            this.state = {\r\n                text1: 'Hello',\r\n                text2: 'World'\r\n            };\r\n        }\r\n\r\n        render() {\r\n            return (\r\n                <div>\r\n                    <button\r\n                        onClick={() => {\r\n                            this.setState({\r\n                                text1: this.state.text1 + '!',\r\n                                text2: this.state.text2 + '!'\r\n                            });\r\n                        }}\r\n                    >\r\n                        Run\r\n                    </button>\r\n                    <div>\r\n                        <div>{this.state.text1}</div>\r\n                        <div>{this.state.text2}</div>\r\n                    </div>\r\n                </div>\r\n            );\r\n        }\r\n    }\r\n    ```\r\n    ([여기서](https://codesandbox.io/s/lets-react-simple-react-example-7814u) 이 코드를 실행해볼 수 있습니다.)\r\n    ![VirtualDOMAbout](http://drive.google.com/uc?export=view&id=12PayH2iFwhQpYbyTxond1Znj1bXUnWR9)\r\n\r\n# Component\r\n- React에서 우리가 그릴 요소(**element**)를 만들어주는 틀을 [컴포넌트(**component**)](https://sambalim.tistory.com/117)라고 합니다. Component는 속성(**props**)을 입력으로 받아 element를 반환해주며, 내부에 상태(**state**)를 가질 수 있습니다.\r\n    ![Component](http://drive.google.com/uc?export=view&id=1Mer3HX64_lI_WIFNiH-Zlq8_OiS-zVIY)\r\n- 만약 특정 component의 **state가 변경**되면 React는 [해당 component를 다시 그립니다(렌더링합니다)](https://felixgerschau.com/react-rerender-components/#when-does-react-re-render).\r\n  - 이 때 state 객체를 직접 변경하면 안 되고, React에서 제공하는 기능(클래스 형태인 경우 `setState()`를 사용, 함수 형태인 경우 `useState()`가 만들어주는 함수를 사용)을 사용하여 state를 변경해야 합니다.\r\n- Component를 클래스 형태로 선언할 수도 있으며, 함수 형태로 선언할 수도 있습니다.\r\n  예컨대 위의 예시를 함수 형태로 작성하면 아래와 같습니다.\r\n    ```jsx\r\n    // (1) function 키워드를 사용하는 방법\r\n    function App(props) {\r\n        // App의 상태(state)를 정의\r\n        const [text1, setText1] = useState('Hello');\r\n        const [text2, setText2] = useState('World');\r\n\r\n        return (\r\n            <div>\r\n                <button\r\n                    onClick={() => {\r\n                        setText1(text1 + '!');\r\n                        setText2(text2 + '!');\r\n                    }}\r\n                >\r\n                    Run\r\n                </button>\r\n                <div>\r\n                    <div>{text1}</div>\r\n                    <div>{text2}</div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n    ```\r\n    ```jsx\r\n    // (2) Arrow function 문법을 사용하는 방법 ((1)과 의미는 동일)\r\n    const App = () => {\r\n        // App의 상태(state)를 정의\r\n        const [text1, setText1] = useState('Hello');\r\n        const [text2, setText2] = useState('World');\r\n\r\n        return (\r\n            <div>\r\n                <button\r\n                    onClick={() => {\r\n                        setText1(text1 + '!');\r\n                        setText2(text2 + '!');\r\n                    }}\r\n                >\r\n                    Run\r\n                </button>\r\n                <div>\r\n                    <div>{text1}</div>\r\n                    <div>{text2}</div>\r\n                </div>\r\n            </div>\r\n        );\r\n    };\r\n    ```\r\n    ([여기서](https://codesandbox.io/s/lets-react-simple-react-functional-example-06xj0) 이 코드를 실행해볼 수 있습니다.)\r\n\r\n# JSX\r\n- 위의 예시들을 보면 일반적인 JavaScript 코드랑 다르게 코드에 JavaScript와 HTML이 섞여있는 모양새를 하고 있습니다.\r\n    ```jsx\r\n    const x = <div className=\"Title\">Hello!</div>;\r\n    ```\r\n  이는 [**JSX**](https://reactjs.org/docs/introducing-jsx.html)라는 JavaScript의 확장 문법으로, React 등의 라이브러리들을 편리하게 사용할 수 있도록 해줍니다.\r\n  Babel (JavaScript 컴파일러) 등의 도구들은 JSX 코드를 아래와 같이 JavaScript 코드로 변환해줍니다.\r\n    ```javascript\r\n    const x = React.createElement('div', {className: 'Title'}, 'Hello!');\r\n    ```\r\n- HTML 중간에 다시 JavaScript 코드를 넣으려면 중괄호를 사용해주면 됩니다. 중괄호 안에 다시 HTML을 사용하는 것도 가능합니다.\r\n    ```jsx\r\n    const x = <div className={'Ti' + 'tle'}>{5 - 3}</div>;\r\n    ```\r\n- HTML 중간에 JavaScript 코드를 넣을 수 있는 것을 이용하여 component를 동적으로 생성하거나 조건에 따라 다른 component를 렌더링하는 등의 응용이 가능합니다.\r\n    ```jsx\r\n    // 조건에 따라 다른 component 렌더링\r\n    const App = props => (\r\n        <div>\r\n            {props.isRed ? <button>Go!</button> : <div>Wrong!</div>}\r\n        </div>\r\n    );\r\n\r\n    // Component를 동적으로 생성\r\n    const students = ['Cindy', 'John', 'Paul'];\r\n\r\n    const App = props => (\r\n        <div>\r\n            {students.map(name => <div>{name}</div>)}\r\n        </div>\r\n    );\r\n    ```\r\n- TypeScript도 JSX와 유사한 **TSX**라는 확장 문법이 존재합니다. 사용 방법은 JSX와 동일합니다.\r\n\r\n# Composition\r\n- React에서는 [합성(**Composition**)](https://blog.sonim1.com/186)을 이용하여 component 코드를 재사용하고 작은 component들을 조합하여 복잡한 component들을 만들 수 있습니다.\r\n- 위의 예제에서 텍스트를 표시하는 부분들을 `Text`라는 별도의 component로 분리해 봅시다.\r\n    ```jsx\r\n    const Result = props => (\r\n        <div>\r\n            <div>{props.text1}</div>\r\n            <div>{props.text2}</div>\r\n        </div>\r\n    );\r\n\r\n    const App = () => {\r\n        const [text1, setText1] = useState('Hello');\r\n        const [text2, setText2] = useState('World');\r\n\r\n        return (\r\n            <div>\r\n                <button\r\n                    onClick={() => {\r\n                        setText1(text1 + '!');\r\n                        setText2(text2 + '!');\r\n                    }}\r\n                >\r\n                    Run\r\n                </button>\r\n                <Result text1={text1} text2={text2}/>\r\n            </div>\r\n        );\r\n    };\r\n    ```\r\n- JavaScript의 `.map()`을 이용하여 text의 개수에 따라 `<div/>`를 만들도록 할 수도 있습니다.\r\n    ```jsx\r\n    const Result = props => (\r\n        <div>\r\n            {props.texts.map(text => (\r\n                <div>{text}</div>\r\n            ))}\r\n        </div>\r\n    );\r\n\r\n    const App = () => {\r\n        const [texts, setTexts] = useState(['Hello', 'World', 'Bye', 'Wow']);\r\n\r\n        return (\r\n            <div>\r\n                <button\r\n                    onClick={() => {\r\n                        setTexts(texts.map(text => text + '!'));\r\n                    }}\r\n                >\r\n                    Run\r\n                </button>\r\n                <Result texts={texts} />\r\n            </div>\r\n        );\r\n    };\r\n    ```\r\n- 여기서 기존의 `Result` component를 활용하여 텍스트를 대문자 또는 소문자로 바꾸는 component를 만든다고 합시다.\r\n  우리에게 익숙한 객체지향 프로그래밍에서는 `Result`라는 클래스를 **상속**받는 방식을 택할 것입니다.\r\n  하지만 React에서는 **합성**을 이용하여 상속을 굳이 사용하지 않고도 component를 확장할 수 있습니다.\r\n    ```jsx\r\n    const Result = props => (\r\n        <div>\r\n            {props.texts.map(text => (\r\n                <div>{text}</div>\r\n            ))}\r\n        </div>\r\n    );\r\n\r\n    // 위쪽에 제목 표시.\r\n    const PrettyResult = props => (\r\n        <div>\r\n            {'[' + props.name + ']'}\r\n            <Result texts={props.texts} />\r\n        </div>\r\n    );\r\n\r\n    // 대문자 버전.\r\n    const UpperResult = props => (\r\n        <PrettyResult\r\n            name={'대문자'}\r\n            texts={props.texts.map(text => text.toUpperCase())}\r\n        />\r\n    );\r\n\r\n    // 소문자 버전.\r\n    const LowerResult = props => (\r\n        <PrettyResult\r\n            name={'소문자'}\r\n            texts={props.texts.map(text => text.toLowerCase())}\r\n        />\r\n    );\r\n\r\n    const App = () => {\r\n        const [texts, setTexts] = useState(['Hello', 'World', 'Bye', 'Wow']);\r\n\r\n        return (\r\n            <div>\r\n                <button\r\n                    onClick={() => {\r\n                        setTexts(texts.map(text => text + '!'));\r\n                    }}\r\n                >\r\n                    Run\r\n                </button>\r\n                <PrettyResult name={'기본'} texts={texts} />\r\n                <UpperResult texts={texts} />\r\n                <LowerResult texts={texts} />\r\n            </div>\r\n        );\r\n    };\r\n    ```\r\n    ![Composition](http://drive.google.com/uc?export=view&id=1_tDCCKObMY-z10tQsh24Bh8g10W4Z_tD)\r\n    ([여기서](https://codesandbox.io/s/lets-react-simple-react-composition-example-dqsvc) 이 코드를 실행해볼 수 있습니다.)\r\n\r\n# Lifecycle\r\nUnder construction...\r\n\r\n# Context\r\nUnder construction...\r\n- Context\r\n- Provider\r\n\r\n# Useful links\r\n[React 공식 문서](https://reactjs.org/docs/getting-started.html)에서 자주 읽어보게 되는 부분들을 몇 개 뽑았습니다.\r\n- [Components and Props](https://reactjs.org/docs/components-and-props.html)\r\n- [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)\r\n  - Component의 리스트를 생성할 때 만약 component 여러 개가 동시에 바뀐다거나 의도한 것과 다른 component가 바뀐다거나 하는 버그들이 발생할 경우, **key**를 사용해보세요.\r\n- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)\r\n- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)\r\n- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)\r\n  - 가끔씩 DOM에 직접 접근해야 할 경우가 있습니다. (ex. `<canvas/>`를 사용할 때, 외부 라이브러리를 사용할 때) 이 때 **ref**를 사용하여 Component가 가리키는 DOM에 접근할 수 있습니다.\r\n- [Fragments](https://reactjs.org/docs/fragments.html)\r\n  - Component 여러 개를 하나로 묶되 DOM 생성은 하고 싶지 않을 때 유용합니다.\r\n- [Error boundaries](https://reactjs.org/docs/error-boundaries.html)\r\n  - 에러 발생 시 종종 렌더링이 실패하여 페이지가 아예 그려지지 않는 경우가 있습니다. React의 `componentDidCatch()`를 이용하여 에러를 catch하여 처리할 수 있습니다.\r\n"},150:function(n){n.exports="# About\r\nUnder construction...\r\n"},6004:function(n){n.exports="# About\r\nUnder construction...\r\n"},2650:function(n){n.exports="# About\r\n- [Homepage](https://www.typescriptlang.org/)\r\n- JavaScript 기반의 언어로, JavaScript의 문법을 확장하여 C++, Java처럼 **자료형(type)을 명시하고** 체크하여 견고한 프로그래밍이 가능하도록 한 언어입니다.\r\n    ```typescript\r\n    // JavaScript\r\n    function addInts(x, y) {\r\n        return x + y;\r\n    }\r\n\r\n    // TypeScript\r\n    function addInts(x: number, y: number): number {\r\n        return x + y;\r\n    }\r\n    ```\r\n- JavaScript의 기본 자료형뿐만 아니라, 자료형의 조합을 통한 복잡한 자료형 생성도 지원합니다.\r\n    ```typescript\r\n    // number이거나 string\r\n    const x: number | string = 3;\r\n\r\n    // 'A', 'B', or 'C' ('D'를 넣으면 에러)\r\n    const y: 'A' | 'B' | 'C' = 'A';\r\n\r\n    // 키는 number, 값은 boolean인 map 형태의 객체\r\n    const z: {[key: number]: boolean} = {3: true, 4: false};\r\n    ```\r\n- 웹 브라우저는 일반적으로 JavaScript만을 지원합니다. 따라서 TypeScript 컴파일러(tsc)를 이용하여 JavaScript로 변환하여 사용해야 합니다.\r\n  `tsconfig.json` 파일을 이용하여 컴파일러에 여러 옵션(ex. 어떤 버전의 JavaScript로 변환할 것인지)을 줄 수가 있습니다.\r\n    ```jsonc\r\n    {\r\n        \"compilerOptions\": {\r\n            \"target\": \"es3\", // Target JavaScript version.\r\n            ...\r\n        },\r\n        ...\r\n    }\r\n    ```\r\n\r\n# Example\r\n`npm install -g typescript`를 사용하여 TypeScript 컴파일러를 설치하고, 아래 코드를 \"Example.ts\" 파일로 저장하고 터미널에서 `tsc Example.ts`를 실행해보세요.\r\n\r\n```typescript\r\nfunction addInts(x: number, y: number): number {\r\n    return x + y;\r\n}\r\n```\r\n\r\n`Example.js`가 생성됩니다.\r\n\r\n```javascript\r\nfunction addInts(x, y) {\r\n    return x + y;\r\n}\r\n```\r\n\r\n만약 아래와 같이 함수에 잘못된 자료형의 값을 대입한다면 컴파일 에러가 납니다.\r\n\r\n```typescript\r\nfunction addInts(x: number, y: number): number {\r\n    return x + y;\r\n}\r\n\r\naddInts(3, 'abc'); // Wrong code!\r\n```\r\n\r\n# Useful links\r\n- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)\r\n"},6778:function(n){n.exports='# About\r\n\r\n웹사이트를 구성하는 기본적인 요소들에 대하여 담았습니다.\r\n\r\n# HTML / CSS / JS\r\n\r\n웹사이트는 일반적으로 아래의 세 가지 언어로 구성됩니다.\r\n\r\n- HTML: 웹사이트의 구조(layout)를 표현합니다.\r\n    ```html\r\n    <div class="App">\r\n        <span class="About">Hello!</span>\r\n        <button class="Run">Click</button>\r\n    </div>\r\n    ```\r\n- CSS: 웹사이트의 스타일(ex. 색깔, 크기)을 결정합니다.\r\n    ```css\r\n    .About {\r\n        color: #0000ff;\r\n    }\r\n    ```\r\n- JavaScript: 웹사이트의 동작(ex. 상호작용, DOM 변경)을 표현합니다.\r\n    ```javascript\r\n    const button = document.getElementsByClassName(\'Run\')[0];\r\n\r\n    button.addEventListener(\'click\', () => {\r\n        alert(\'Yeah!\');\r\n    });\r\n    ```\r\n\r\n# How website works\r\n\r\n- 사용자(클라이언트)가 서버에 웹사이트를 요청하면, 서버는 웹사이트의 HTML 파일을 보내 줍니다.\r\n- 웹 브라우저는 HTML을 읽어 DOM(Document Object Model) tree를 생성합니다.\r\n  - 중간에 이미지, JS, CSS 등 파일들의 링크를 만나면 해당 파일들을 다운로드 / 실행합니다.\r\n- 웹 브라우저는 이들로부터 render tree를 만들어 화면에 웹사이트를 그립니다.\r\n\r\n# Example\r\n\r\n아래는 간단한 웹사이트입니다. .html 파일로 저장한다음 실행하면 텍스트와 버튼이 있는 간단한 웹사이트가 나타납니다.\r\n\r\n```html\r\n<html>\r\n<head>\r\n    <title>제목</title>\r\n\r\n    <style type="text/css">\r\n        .App {\r\n            width: 100px;\r\n            border: 1px solid #000000;\r\n        }\r\n\r\n        .About {\r\n            color: #0000ff;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n    <div class="App">\r\n        <span class="About">Hello!</span>\r\n        <button class="Run">Click</button>\r\n    </div>\r\n\r\n    <script type="text/javascript">\r\n        const button = document.getElementsByClassName(\'Run\')[0];\r\n\r\n        button.addEventListener(\'click\', () => {\r\n            alert(\'Yeah!\');\r\n        });\r\n    <\/script>\r\n</body>\r\n</html>\r\n```\r\n\r\nCSS와 JS 코드를 별도의 파일에 저장하고 싶은 경우, 아래와 같이 하면 됩니다.\r\n\r\n```html\r\n<html>\r\n<head>\r\n    <title>제목</title>\r\n    <link rel="stylesheet" type="text/css" href="MyCSSCode1.css">\r\n    <link rel="stylesheet" type="text/css" href="MyCSSCode2.css">\r\n</head>\r\n<body>\r\n    <div class="App">\r\n        <span class="About">Hello!</span>\r\n        <button class="Run">Click</button>\r\n    </div>\r\n\r\n    <script type="text/javascript" src="MyJSCode1.js"><\/script>\r\n    <script type="text/javascript" src="MyJSCode2.js"><\/script>\r\n</body>\r\n</html>\r\n```\r\n\r\n이 때 `<script>...<\/script>`는 `<head>...</head>`에 넣는 경우도 있고, 위의 예시처럼 `<body>...</body>`의 **끝에** 넣는 경우도 있습니다. [어떤 차이](https://webdir.tistory.com/514)가 있을까요??\r\n\r\n# Keywords\r\n많이 등장하는 키워드들입니다.\r\n\r\n- HTML: DOM, head, body, alt, [event 작동 방식](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/), ...\r\n- CSS: Margin, padding, border, outline, box model, flexbox, grid, media query, keyframes, transition, ...\r\n- JavaScript: 호이스팅(hoisting), **[var vs const vs let](https://medium.com/@yeon22/javascript-var-let-const의-차이점-9fab5c264c9c)**, **[this](https://nykim.work/71)**, [prototype-based OOP](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), [function vs 화살표 함수](https://velog.io/@modolee/javascript-function-vs-arrow-function), closure, module, window 객체, document 객체, ...\r\n- Website: 웹 접근성(Web accessibility), **반응형 웹(responsive web)**, AJAX, ...\r\n\r\n# Useful links\r\n- [W3Schools](https://www.w3schools.com/): 많은 예시 코드들이 있으며 그것들을 직접 실행해 볼 수 있어 유용합니다.\r\n- [Can I use](https://caniuse.com/): 웹 브라우저의 종류 및 버전마다 지원하는 기능들이 서로 다릅니다. 내가 사용하고자 하는 HTML, CSS, JS의 기능이 특정 웹 브라우저에서 지원되는지 이 사이트에서 확인할 수 있습니다.\r\n'},549:function(n){n.exports="# About\r\n- [Homepage](https://webpack.js.org/)\r\n- 웹사이트가 많은 코드와 리소스 파일들로 이루어져 있다고 합시다. 이들의 의존성을 분석하여 웹 브라우저 등에서 사용할 수 있도록 '한 세트'로 묶어주는 (i.e '번들링', '패키징') 라이브러리입니다.\r\n  ```\r\n  A.js ----+\r\n  B.js     |\r\n  C.ts     |\r\n           |\r\n  M.css    +-------\x3e bundle.js, bundle.css, resources\r\n  N.css    |\r\n           |\r\n  X.png    |\r\n  Y.jpg ---+\r\n  ```\r\n- \"webpack.config.js\"를 사용하여 다양한 설정들을 할 수 있습니다.\r\n  - Paths\r\n  - [Loader](https://joshua1988.github.io/webpack-guide/concepts/loader.html)\r\n  - [Plugin](https://joshua1988.github.io/webpack-guide/concepts/plugin.html)\r\n  - [Source map](https://joshua1988.github.io/webpack-guide/devtools/source-map.html)\r\n  - ...\r\n- [gulp](https://gulpjs.com/), [rollup](https://rollupjs.org/guide/en/) 등의 대체제들도 존재합니다.\r\n\r\n# Loader\r\n- 각 파일들을 읽고 처리해주는 역할을 합니다.\r\n  예컨대 TypeScript 파일들을 [ts-loader](https://www.npmjs.com/package/ts-loader)를 사용하여 처리하고자 한다면 아래와 같이 설정하면 됩니다.\r\n    ```javascript\r\n    module.exports = (env, argv) => {\r\n        return {\r\n            ...,\r\n            module: {\r\n                rules: [\r\n                    // .ts 또는 .tsx로 끝나는 파일들은 ts-loader를 사용.\r\n                    // (JavaScript 정규 표현식 참고)\r\n                    { test: /\\.tsx?$/, use: 'ts-loader' }\r\n                ]\r\n            }\r\n        };\r\n    }\r\n    ```\r\n\r\n# Plugin\r\n- Plugin을 사용하여 추가적인 동작들을 수행할 수 있습니다.\r\n  예컨대 [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)을 사용하여 빌드 전에 이전 결과물들을 지우도록 할 수 있습니다.\r\n    ```javascript\r\n    const { CleanWebpackPlugin } = require('clean-webpack-plugin');\r\n\r\n    module.exports = (env, argv) => {\r\n        return {\r\n            ...,\r\n            plugins: [\r\n                new CleanWebpackPlugin()\r\n            ]\r\n        };\r\n    }\r\n    ```\r\n\r\n# Source map\r\n- Webpack으로 코드를 빌드하고 나면 코드가 하나로 합쳐지고 설정에 따라 [난독화, 압축화](https://12bme.tistory.com/357)가 됩니다.\r\n  만약 웹사이트에서 에러가 발생했을 때, 웹 브라우저가 원본 코드가 아닌 결과 코드의 줄을 알려주므로 디버깅이 힘들어집니다.\r\n- Source map은 원본 코드와 결과 코드를 연결하여 디버깅 작업을 쉽게 해줍니다.\r\n  Chrome 등의 웹 브라우저들은 source map을 인식하여, 만약 에러가 발생하면 원본 코드의 해당하는 줄을 자동으로 찾아줍니다.\r\n- 별도의 파일(.map)로 생성할 수도 있으며, 결과 코드 내에 삽입할 수도 (inline) 있습니다.\r\n\r\n# Caching\r\n- 웹 브라우저는 웹 사이트를 빠르게 로딩하고 트래픽을 줄이기 위하여 파일들을 **캐싱**합니다.\r\n- 웹 사이트를 수정하여 파일의 내용이 바뀌었어도, 파일의 이름이 이전과 동일하면 웹 브라우저는 때때로 서버에서 새 파일을 다운받지 않고 캐싱해둔 파일을 그대로 사용합니다.\r\n- Webpack에는 결과 파일의 이름에 해시(hash)값을 삽입하여 웹 브라우저가 새로운 파일을 사용하도록 강제하는 [유용한 기능](https://webpack.js.org/guides/caching/)이 존재합니다.\r\n    ```javascript\r\n    module.exports = (env, argv) => {\r\n        return {\r\n            output: {\r\n                filename: '[name].[contenthash].js'\r\n            }\r\n        };\r\n    }\r\n    ```\r\n  예를 들어 \"main.js\" 대신 \"main.c5ff92a7652991cb5717.js\"와 같이 파일이 생성됩니다.\r\n\r\n# Example\r\n\r\n이 웹사이트도 Webpack을 이용하여 제작하였습니다.\r\n웹사이트 코드를 다운받고 `npm install`로 라이브러리들을 설치한 후 `npm run debug` 또는 `npm run build`를 실행하면 \"docs\" 폴더에 결과 파일들이 생성됩니다.\r\n"}},r={};function e(n){var s=r[n];if(void 0!==s)return s.exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}e.m=t,n=[],e.O=function(t,r,s,o){if(!r){var c=1/0;for(l=0;l<n.length;l++){r=n[l][0],s=n[l][1],o=n[l][2];for(var a=!0,i=0;i<r.length;i++)(!1&o||c>=o)&&Object.keys(e.O).every((function(n){return e.O[n](r[i])}))?r.splice(i--,1):(a=!1,o<c&&(c=o));a&&(n.splice(l--,1),t=s())}return t}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[r,s,o]},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},function(){var n={179:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var s,o,c=r[0],a=r[1],i=r[2],l=0;for(s in a)e.o(a,s)&&(e.m[s]=a[s]);if(i)var p=i(e);for(t&&t(r);l<c.length;l++)o=c[l],e.o(n,o)&&n[o]&&n[o][0](),n[c[l]]=0;return e.O(p)},r=self.webpackChunklets_react=self.webpackChunklets_react||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var s=e.O(void 0,[148],(function(){return e(2185)}));s=e.O(s)}();