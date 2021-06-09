# About

웹사이트를 구성하는 기본적인 요소들에 대하여 담았습니다.

# HTML / CSS / JS

웹사이트는 일반적으로 아래의 세 가지 언어로 구성됩니다.

- HTML: 웹사이트의 구조(layout)를 표현합니다.
    ```html
    <div class="App">
        <span class="About">Hello!</span>
        <button class="Run">Click</button>
    </div>
    ```
- CSS: 웹사이트의 스타일(ex. 색깔, 크기)을 결정합니다.
    ```css
    .About {
        color: #0000ff;
    }
    ```
- JavaScript: 웹사이트의 동작(ex. 상호작용, DOM 변경)을 표현합니다.
    ```javascript
    const button = document.getElementsByClassName('Run')[0];

    button.addEventListener('click', () => {
        alert('Yeah!');
    });
    ```

# How website works

- 사용자(클라이언트)가 서버에 웹사이트를 요청하면, 서버는 웹사이트의 HTML 파일을 보내 줍니다.
- 웹 브라우저는 HTML을 읽어 DOM(Document Object Model) tree를 생성합니다.
  - 중간에 이미지, JS, CSS 등 파일들의 링크를 만나면 해당 파일들을 다운로드 / 실행합니다.
- 웹 브라우저는 이들로부터 render tree를 만들어 화면에 웹사이트를 그립니다.

# Example

아래는 간단한 웹사이트입니다. .html 파일로 저장한다음 실행하면 텍스트와 버튼이 있는 간단한 웹사이트가 나타납니다.

```html
<html>
<head>
    <title>제목</title>

    <style type="text/css">
        .App {
            width: 100px;
            border: 1px solid #000000;
        }

        .About {
            color: #0000ff;
        }
    </style>
</head>
<body>
    <div class="App">
        <span class="About">Hello!</span>
        <button class="Run">Click</button>
    </div>

    <script type="text/javascript">
        const button = document.getElementsByClassName('Run')[0];

        button.addEventListener('click', () => {
            alert('Yeah!');
        });
    </script>
</body>
</html>
```

CSS와 JS 코드를 별도의 파일에 저장하고 싶은 경우, 아래와 같이 하면 됩니다.

```html
<html>
<head>
    <title>제목</title>
    <link rel="stylesheet" type="text/css" href="MyCSSCode1.css">
    <link rel="stylesheet" type="text/css" href="MyCSSCode2.css">
</head>
<body>
    <div class="App">
        <span class="About">Hello!</span>
        <button class="Run">Click</button>
    </div>

    <script type="text/javascript" src="MyJSCode1.js"></script>
    <script type="text/javascript" src="MyJSCode2.js"></script>
</body>
</html>
```

이 때 `<script>...</script>`는 `<head>...</head>`에 넣는 경우도 있고, 위의 예시처럼 `<body>...</body>`의 **끝에** 넣는 경우도 있습니다. [어떤 차이](https://webdir.tistory.com/514)가 있을까요??

# Keywords
많이 등장하는 키워드들입니다.

- HTML: DOM, head, body, alt, [event 작동 방식](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/), ...
- CSS: Margin, padding, border, outline, box model, flexbox, grid, media query, keyframes, transition, ...
- JavaScript: 호이스팅(hoisting), **[var vs const vs let](https://medium.com/@yeon22/javascript-var-let-const의-차이점-9fab5c264c9c)**, **[this](https://nykim.work/71)**, [prototype-based OOP](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), [function vs 화살표 함수](https://velog.io/@modolee/javascript-function-vs-arrow-function), closure, module, window 객체, document 객체, ...
- Website: 웹 접근성(Web accessibility), **반응형 웹(responsive web)**, AJAX, ...

# Useful links
- [W3Schools](https://www.w3schools.com/): 많은 예시 코드들이 있으며 그것들을 직접 실행해 볼 수 있어 유용합니다.
- [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide): Mozilla에서 제작한 웹 관련 가이드로 웹의 각 기능에 대해 다양하게 설명하여 유용합니다.
- [Can I use](https://caniuse.com/): 웹 브라우저의 종류 및 버전마다 지원하는 기능들이 서로 다릅니다. 내가 사용하고자 하는 HTML, CSS, JS의 기능이 특정 웹 브라우저에서 지원되는지 이 사이트에서 확인할 수 있습니다.
