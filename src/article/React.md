# About
- [Homepage](https://reactjs.org/)
- 복잡한 웹사이트를 쉽게 만들 수 있도록 해주는 **웹 프레임워크**입니다.
- [AngularJS](https://angularjs.org/), [Vue.js](https://vuejs.org/v2/guide/index.html)와 같이 현재 가장 많이 쓰이는 웹 프레임워크 중 하나입니다.

# Virtual DOM
- 기존의 웹사이트 개발은 HTML로 DOM을 선언한 다음 JavaScript로 DOM을 직접 수정하는 방식으로 이루어집니다.
    ```jsx
    // HTML
    <div class="App">
        <button class="Button1">Hello</button>
        <div class="Below">
            <button class="Button2">World</button>
            <button class="Button3">Bye</button>
        </div>
    </div>

    // JavaScript
    const button1 = document.getElementsByClassName('Button1')[0];
    button1.innerHTML = 'Yeah';

    const button3 = document.getElementsByClassName('Button3')[0];
    button3.innerHTML = 'Yeah';
    ```
    ![RealDOM](https://i.imgur.com/CLXJi1w.png)
- 하지만 JavaScript로 DOM을 그때그때 수정하는 방식은 웹사이트가 복잡해지면 **성능 하락**을 가져올 수 있으며 **상태 관리**를 어렵게 만듭니다.
- React는 DOM을 직접 수정하는 기존의 방식 대신, **[Virtual DOM](https://ryublock.tistory.com/41)**('가상의' DOM)이라는 개념을 도입하여 이 문제를 해결합니다.
  - 사용자는 실제 DOM을 **직접 조작하지 않습니다**.
  - 사용자가 virtual DOM을 업데이트하면, React가 virtual DOM에서 바뀐 부분들을 찾아서 실제 DOM에 알아서 반영해줍니다.
    ![VirtualDOMAbout](https://i.imgur.com/1EmaTDH.png)
- 사용자는 JavaScript를 이용하여 **component**들을 정의하고 component의 tree를 만들어서 React에게 넘겨줍니다. 각각의 component들은 **속성**(props)과 **상태**(state)를 가지고 있어, 만약 어떤 component의 속성이나 상태가 변경되면 React가 해당 component를 자동으로 다시 그려줍니다.
    ```jsx
    // Declare a component
    const App = props => {
        const text1 = props.wow ? 'Hello' : 'Yeah';
        const text3 = props.wow ? 'Bye' : 'Yeah';

        return (
            <div>
                <button>{text1}</button>
                <div>
                    <button>World</button>
                    <button>{text3}</button>
                </div>
            </div>
        );
    };

    // Version 1
    <App wow={true}/>

    // Version 2
    <App wow={false}>
    ```
    ![VirtualDOMCompare](https://i.imgur.com/7yXRuHm.png)

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
