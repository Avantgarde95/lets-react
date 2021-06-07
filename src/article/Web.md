# About

웹사이트를 구성하는 기본적인 요소들에 대하여 담았습니다.

- [W3Schools](https://www.w3schools.com/): 많은 예시 코드들이 있으며 그것들을 직접 실행해 볼 수 있어 유용합니다.

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

- 사용자(클라이언트)가 서버에 웹사이트를 요청하면, 서버는 HTML, JS, CSS 파일들을 보내 줍니다.
- 웹 브라우저는 HTML, CSS로부터 각각 DOM(Document Object Model) tree 및 CSSOM(CSS Object Model)을 생성합니다.
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

이 때 `<script>...</script>`는 `<head>...</head>`에 넣는 경우도 있고, 위의 예시처럼 `<body>...</body>`의 **끝에** 넣는 경우도 있습니다.
어떤 차이가 있을까요??
