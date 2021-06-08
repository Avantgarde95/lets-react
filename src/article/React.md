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
- 예를 들어, 위의 예시에서 사용자가 버튼을 클릭하여 데이터들을 변경하면, React는 virtual DOM을 비교하여 Text1과 Text2가 변경되었다는 것을 알아내어 실제 DOM에 반영합니다.
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
- State
- Props
- Lifecycle

# Context
- Context
- Provider

# JSX
- `React.createElement`
- JSX, TSX 문법

# Useful links
- abc
