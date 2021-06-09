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
    ([여기서](https://codesandbox.io/s/lets-react-simple-dom-example-nyf3w) 이 코드를 실행해볼 수 있습니다.)
    ![DirectDOMUpdate](http://drive.google.com/uc?export=view&id=1Ymh5fekB7WfPzZ-ofVpfCvdsOLbV0GlE)
- 사용자가 DOM을 수정할때마다 웹 브라우저는 웹사이트를 다시 렌더링합니다. 즉 DOM의 수정은 비싼 작업이며, 만약 DOM의 수정이 잦다면 **성능 저하**를 일으킬 수 있습니다.
- React는 DOM을 직접 수정하는 기존의 방식 대신, ['가상' DOM(Virtual DOM)](https://ryublock.tistory.com/41)이라는 개념을 도입하여 이 문제를 해결합니다.
    - Virtual DOM은 실제 DOM과 유사한 tree 형태를 가지고 있습니다.
    - 사용자가 데이터를 변경하면 virtual DOM이 업데이트됩니다.
    - React는 virtual DOM의 현재 버전과 이전 버전을 비교하여 달라진 부분들을 찾아서 실제 DOM을 알아서 효율적으로 업데이트 해줍니다.
- 아래는 위의 예시를 React로 재작성한 코드입니다. 사용자가 버튼을 클릭하여 데이터들을 변경하면, React는 virtual DOM을 비교하여 Text1과 Text2가 변경되었다는 것을 알아내어 실제 DOM에 반영합니다.
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
    ([여기서](https://codesandbox.io/s/lets-react-simple-react-example-7814u) 이 코드를 실행해볼 수 있습니다.)
    ![VirtualDOMAbout](http://drive.google.com/uc?export=view&id=12PayH2iFwhQpYbyTxond1Znj1bXUnWR9)

# Component
- React에서 우리가 그릴 요소(**element**)를 만들어주는 틀을 [컴포넌트(**component**)](https://sambalim.tistory.com/117)라고 합니다. Component는 속성(**props**)을 입력으로 받아 element를 반환해주며, 내부에 상태(**state**)를 가질 수 있습니다.
    ![Component](http://drive.google.com/uc?export=view&id=1Mer3HX64_lI_WIFNiH-Zlq8_OiS-zVIY)
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
    ([여기서](https://codesandbox.io/s/lets-react-simple-react-functional-example-06xj0) 이 코드를 실행해볼 수 있습니다.)

# Composition
Under construction...
- Composition example

# Lifecycle
Under construction...

# Context
Under construction...
- Context
- Provider

# JSX
Under construction...
- `React.createElement`
- JSX, TSX 문법

# Useful links
Under construction...
