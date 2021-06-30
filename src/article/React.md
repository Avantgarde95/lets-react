# About
- [Homepage](https://reactjs.org/)
- 복잡한 웹사이트를 쉽게 만들 수 있도록 해주는 **웹 프레임워크**입니다.
- [AngularJS](https://angularjs.org/), [Vue.js](https://v3.vuejs.org/)와 같이 현재 가장 많이 쓰이는 웹 프레임워크 중 하나입니다.

# Virtual DOM
- 기존의 웹사이트 개발은 HTML로 DOM을 선언한 다음 JavaScript로 DOM을 직접 수정하는 방식으로 이루어집니다.
예를 들어, 버튼을 클릭하면 화면의 텍스트를 변경하는 웹사이트를 만들어봅시다.
    ```html
    <div id="App">
        <button id="Button">Run</button>
        <div id="Results">
            <div id="Text1">Hello</div>
            <div id="Text2">World</div>
        </div>
    </div>
    ```
    ```javascript
    const button = document.getElementById('Button');

    // 버튼을 클릭하면...
    button.addEventListener('click', () => {
        // Text1의 끝에 !를 붙인다.
        const text1 = document.getElementById('Text1');
        text1.innerHTML += '!';

        // Text2의 끝에 !를 붙인다.
        const text2 = document.getElementById('Text2');
        text2.innerHTML += '!';
    });
    ```
    <https://codesandbox.io/embed/lets-react-simple-dom-example-nyf3w?codemirror=1?module=/App.js>
    ![DirectDOMUpdate](https://drive.google.com/uc?export=view&id=1Ymh5fekB7WfPzZ-ofVpfCvdsOLbV0GlE)
- 사용자가 DOM을 수정할때마다 웹 브라우저는 웹사이트를 다시 렌더링합니다. 즉 DOM의 수정은 비싼 작업이며, 만약 DOM의 수정이 잦다면 **성능 저하**를 일으킬 수 있습니다.
- React는 DOM을 직접 수정하는 기존의 방식 대신, ['가상' DOM(Virtual DOM)](https://ryublock.tistory.com/41)이라는 개념을 도입하여 이 문제를 해결합니다.
    - Virtual DOM은 실제 DOM과 유사한 tree 형태를 가지고 있습니다.
    - 사용자가 데이터를 변경하면 virtual DOM이 업데이트됩니다.
    - React는 virtual DOM의 현재 버전과 이전 버전을 비교하여 달라진 부분들을 찾아서 실제 DOM을 알아서 효율적으로 업데이트 해줍니다.
- 아래는 위의 예시를 React로 재작성한 코드입니다. 사용자가 버튼을 클릭하여 데이터들을 변경하면, React는 virtual DOM을 비교하여 `Text1`과 `Text2`가 변경되었다는 것을 알아내어 실제 DOM에 반영합니다.
    ```jsx
    // App이라는 component를 선언
    class App extends React.Component {
        constructor(props) {
            super(props);

            // App의 상태(state)를 정의
            this.state = {
                text1: 'Hello',
                text2: 'World'
            };
        }

        render() {
            return (
                <div>
                    <button
                        onClick={() => {
                            this.setState({
                                text1: this.state.text1 + '!',
                                text2: this.state.text2 + '!'
                            });
                        }}
                    >
                        Run
                    </button>
                    <div>
                        <div>{this.state.text1}</div>
                        <div>{this.state.text2}</div>
                    </div>
                </div>
            );
        }
    }
    ```
    <https://codesandbox.io/embed/lets-react-simple-react-example-7814u?codemirror=1?module=/src/App.jsx>
    ![VirtualDOMAbout](https://drive.google.com/uc?export=view&id=12PayH2iFwhQpYbyTxond1Znj1bXUnWR9)

# Component
- React에서 우리가 그릴 요소(**element**)를 만들어주는 틀을 [컴포넌트(**component**)](https://sambalim.tistory.com/117)라고 합니다. Component는 속성(**props**)을 입력으로 받아 element를 반환해주며, 내부에 상태(**state**)를 가질 수 있습니다.
    ![Component](https://drive.google.com/uc?export=view&id=1Mer3HX64_lI_WIFNiH-Zlq8_OiS-zVIY)
- 만약 특정 component의 **state가 변경**되면 React는 [해당 component를 다시 그립니다(렌더링합니다)](https://felixgerschau.com/react-rerender-components/#when-does-react-re-render).
  - 이 때 state 객체를 직접 변경하면 안 되고, React에서 제공하는 기능(클래스 형태인 경우 `setState()`를 사용, 함수 형태인 경우 `useState()`가 만들어주는 함수를 사용)을 사용하여 state를 변경해야 합니다.
- Component를 클래스 형태로 선언할 수도 있으며, 함수 형태로 선언할 수도 있습니다.
  예컨대 위의 예시를 함수 형태로 작성하면 아래와 같습니다.
    ```jsx
    // (1) function 키워드를 사용하는 방법
    function App(props) {
        // App의 상태(state)를 정의
        const [text1, setText1] = useState('Hello');
        const [text2, setText2] = useState('World');

        return (
            <div>
                <button
                    onClick={() => {
                        setText1(text1 + '!');
                        setText2(text2 + '!');
                    }}
                >
                    Run
                </button>
                <div>
                    <div>{text1}</div>
                    <div>{text2}</div>
                </div>
            </div>
        );
    }
    ```
    ```jsx
    // (2) Arrow function 문법을 사용하는 방법 ((1)과 의미는 동일)
    const App = () => {
        // App의 상태(state)를 정의
        const [text1, setText1] = useState('Hello');
        const [text2, setText2] = useState('World');

        return (
            <div>
                <button
                    onClick={() => {
                        setText1(text1 + '!');
                        setText2(text2 + '!');
                    }}
                >
                    Run
                </button>
                <div>
                    <div>{text1}</div>
                    <div>{text2}</div>
                </div>
            </div>
        );
    };
    ```
    <https://codesandbox.io/embed/lets-react-simple-react-functional-example-06xj0?codemirror=1?module=/src/App2.jsx>

# JSX
- 위의 예시들을 보면 일반적인 JavaScript 코드랑 다르게 코드에 JavaScript와 HTML이 섞여있는 모양새를 하고 있습니다.
    ```jsx
    const x = <div className="Title">Hello!</div>;
    ```
  이는 [**JSX**](https://reactjs.org/docs/introducing-jsx.html)라는 JavaScript의 확장 문법으로, React 등의 라이브러리들을 편리하게 사용할 수 있도록 해줍니다.
  Babel (JavaScript 컴파일러) 등의 도구들은 JSX 코드를 아래와 같이 JavaScript 코드로 변환해줍니다.
    ```javascript
    const x = React.createElement('div', {className: 'Title'}, 'Hello!');
    ```
- HTML 중간에 다시 JavaScript 코드를 넣으려면 중괄호를 사용해주면 됩니다. 중괄호 안에 다시 HTML을 사용하는 것도 가능합니다.
    ```jsx
    const x = <div className={'Ti' + 'tle'}>{5 - 3}</div>;
    ```
- HTML 중간에 JavaScript 코드를 넣을 수 있는 것을 이용하여 component를 동적으로 생성하거나 조건에 따라 다른 component를 렌더링하는 등의 응용이 가능합니다.
    ```jsx
    // 조건에 따라 다른 component 렌더링
    const App = props => (
        <div>
            {props.isRed ? <button>Go!</button> : <div>Wrong!</div>}
        </div>
    );

    // Component를 동적으로 생성
    const students = ['Cindy', 'John', 'Paul'];

    const App = props => (
        <div>
            {students.map(name => <div>{name}</div>)}
        </div>
    );
    ```
- TypeScript도 JSX와 유사한 **TSX**라는 확장 문법이 존재합니다. 사용 방법은 JSX와 동일합니다.

# Composition
- React에서는 [합성(**Composition**)](https://blog.sonim1.com/186)을 이용하여 component 코드를 재사용하고 작은 component들을 조합하여 복잡한 component들을 만들 수 있습니다.
- 위의 예제에서 텍스트를 표시하는 부분들을 `Text`라는 별도의 component로 분리해 봅시다.
    ```jsx
    const Result = props => (
        <div>
            <div>{props.text1}</div>
            <div>{props.text2}</div>
        </div>
    );

    const App = () => {
        const [text1, setText1] = useState('Hello');
        const [text2, setText2] = useState('World');

        return (
            <div>
                <button
                    onClick={() => {
                        setText1(text1 + '!');
                        setText2(text2 + '!');
                    }}
                >
                    Run
                </button>
                <Result text1={text1} text2={text2}/>
            </div>
        );
    };
    ```
- JavaScript의 `.map()`을 이용하여 text의 개수에 따라 `<div/>`를 만들도록 할 수도 있습니다.
    ```jsx
    const Result = props => (
        <div>
            {props.texts.map(text => (
                <div>{text}</div>
            ))}
        </div>
    );

    const App = () => {
        const [texts, setTexts] = useState(['Hello', 'World', 'Bye', 'Wow']);

        return (
            <div>
                <button
                    onClick={() => {
                        setTexts(texts.map(text => text + '!'));
                    }}
                >
                    Run
                </button>
                <Result texts={texts} />
            </div>
        );
    };
    ```
- 여기서 기존의 `Result` component를 활용하여 텍스트를 대문자 또는 소문자로 바꾸는 component를 만든다고 합시다.
  우리에게 익숙한 객체지향 프로그래밍에서는 `Result`라는 클래스를 **상속**받는 방식을 택할 것입니다.
  하지만 React에서는 **합성**을 이용하여 상속을 굳이 사용하지 않고도 component를 확장할 수 있습니다.
    ```jsx
    const Result = props => (
        <div>
            {props.texts.map(text => (
                <div>{text}</div>
            ))}
        </div>
    );

    // 위쪽에 제목 표시.
    const PrettyResult = props => (
        <div>
            {'[' + props.name + ']'}
            <Result texts={props.texts} />
        </div>
    );

    // 대문자 버전.
    const UpperResult = props => (
        <PrettyResult
            name={'대문자'}
            texts={props.texts.map(text => text.toUpperCase())}
        />
    );

    // 소문자 버전.
    const LowerResult = props => (
        <PrettyResult
            name={'소문자'}
            texts={props.texts.map(text => text.toLowerCase())}
        />
    );

    const App = () => {
        const [texts, setTexts] = useState(['Hello', 'World', 'Bye', 'Wow']);

        return (
            <div>
                <button
                    onClick={() => {
                        setTexts(texts.map(text => text + '!'));
                    }}
                >
                    Run
                </button>
                <PrettyResult name={'기본'} texts={texts} />
                <UpperResult texts={texts} />
                <LowerResult texts={texts} />
            </div>
        );
    };
    ```
    ![Composition](https://drive.google.com/uc?export=view&id=1_tDCCKObMY-z10tQsh24Bh8g10W4Z_tD)
    <https://codesandbox.io/embed/lets-react-simple-react-composition-example-dqsvc?codemirror=1?module=/src/App.tsx>

# Useful links
[React 공식 문서](https://reactjs.org/docs/getting-started.html)에서 자주 읽어보게 되는 부분들을 몇 개 뽑았습니다.
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Context](https://reactjs.org/docs/context.html)
  - 어떤 데이터를 여러 단계 밑에 있는 자식 component로 전달하고 싶을 때 유용합니다.
  - 최상위 component에 state를 달고 context를 이용하여 state와 각 state의 setter 함수들을 자식들에게 뿌리는 식으로 데이터(상태) 관리 시스템을 쉽게 구현할 수 있습니다.
- [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
  - Component의 리스트를 생성할 때 만약 component 여러 개가 동시에 바뀐다거나 의도한 것과 다른 component가 바뀐다거나 하는 버그들이 발생할 경우, **key**를 사용해보세요.
- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
  - 가끔씩 DOM에 직접 접근해야 할 경우가 있습니다. (ex. `<canvas/>`를 사용할 때, 외부 라이브러리를 사용할 때) 이 때 **ref**를 사용하여 Component가 가리키는 DOM에 접근할 수 있습니다.
- [Fragments](https://reactjs.org/docs/fragments.html)
  - Component 여러 개를 하나로 묶되 DOM 생성은 하고 싶지 않을 때 유용합니다.
- [Error boundaries](https://reactjs.org/docs/error-boundaries.html)
  - 에러 발생 시 종종 렌더링이 실패하여 페이지가 아예 그려지지 않는 경우가 있습니다. React의 `componentDidCatch()`를 이용하여 에러를 catch하여 처리할 수 있습니다.
