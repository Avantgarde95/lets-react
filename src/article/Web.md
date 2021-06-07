# HTML / CSS / JS

웹사이트는 일반적으로 아래의 세 가지 언어로 구성됩니다.

- HTML: 웹사이트의 구조(layout)를 표현합니다.
    ```html
    <div>
        <span class="MyTitle">Test</span>
        <button class="MyButton">Nice button</button>
    </div>
    ```
- CSS: 웹사이트의 스타일(ex. 색깔, 크기)을 결정합니다.
    ```css
    .MyButton {
        font-size: 15px;
        color: blue;
    }
    ```
- JavaScript: 웹사이트의 동작(ex. 상호작용, DOM 변경)을 표현합니다.
    ```javascript
    function onClickButton() {
        ...
    }

    // HTML에서 button을 가져온다.
    const button = document.getElementsByClassName('MyButton')[0];

    // Button 클릭 시 onClickButton 실행
    button.addEventListener('click', onClickButton);
    ```

# How website works

- 사용자(클라이언트)가 서버에 웹사이트를 요청하면, 서버는 HTML, JS, CSS 파일들을 보내 줍니다.
- 웹 브라우저는 HTML, CSS로부터 각각 DOM(Document Object Model) tree 및 CSSOM(CSS Object Model)을 생성합니다.
- 웹 브라우저는 이들로부터 render tree를 만들어 화면에 웹사이트를 그립니다.
