# About

웹사이트를 구성하는 기본적인 요소들에 대하여 담았습니다.

# HTML / CSS / JS

웹사이트는 일반적으로 아래의 세 가지 언어로 구성됩니다.

## HTML
웹사이트의 구조(layout)를 표현합니다.

```html
<div class="App">
    <span class="About">Hello!</span>
    <button class="Run">Click</button>
</div>
```

## CSS
웹사이트의 스타일(ex. 색깔, 크기)을 결정합니다.

```css
.About {
    color: #0000ff;
}
```

## JavaScript
웹사이트의 동작(ex. 상호작용, DOM 변경)을 표현합니다.

```javascript
const button = document.getElementsByClassName('Run')[0];

button.addEventListener('click', () => {
    alert('Yeah!');
});
```

웹페이지는 하나의 HTML 파일로 표현이 됩니다.
`<style>`, `<script>` 태그를 사용하여 그 안에 CSS, JavaScript 코드를 삽입할 수 있습니다.
아래는 간단한 웹페이지의 예시입니다. 코드를 복사하여 html 파일로 저장하고 웹 브라우저로 실행하거나, 코드 아래의 "데모 열기"를 눌러 웹페이지를 실행해볼 수 있습니다.

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

<https://codesandbox.io/embed/lets-react-simple-html-example-zme61?codemirror=1?module=/index.html>

CSS와 JS 코드를 별도의 파일에 저장하고 싶은 경우, `<link>`, `<script>` 태그를 이용하여 해당 파일들의 경로 또는 링크를 적어주면 됩니다.

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

# How website works

- 사용자(클라이언트)가 서버에 웹사이트를 요청하면, 서버는 웹사이트의 HTML 파일을 보내 줍니다.
- 웹 브라우저는 HTML을 읽어 DOM(Document Object Model) tree를 생성합니다.
- 중간에 이미지, JS, CSS와 같은 리소스들의 링크 / 코드를 만나면 해당 파일들을 다운로드 / 실행합니다.
- 웹 브라우저는 이들로부터 render tree를 만들어 화면에 웹사이트를 그립니다.

# Keywords
자주 등장하는 키워드들을 정리했습니다.

## HTML
- DOM
- [event 작동 방식](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/), ...
- Id vs class
  - Id를 사용할 경우 일부 웹 브라우저에서 JavaScript의 글로벌 변수로 [그 id가 추가](https://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-variables)되어 버립니다. Id는 신중하게 지어야 합니다.
  - Class는 이런 문제가 없습니다.

## CSS
- Margin, padding, border, outline, ...
- [Margin collapsing](velog.io/@raram2/CSS-마진-상쇄Margin-collapsing-원리-완벽-이해)
  - 종종 부모 element와 자식 element가 둘 다 margin-top을 가지고 있을 때 둘의 top margin이 합쳐지는 경우가 있습니다.
- **[Selector](https://www.nextree.co.kr/p8468/)**
- Box model
- Flexbox, grid
- Media query
  - CSS로 **반응형 웹사이트**를 제작할 때 매우 유용합니다.
- Keyframes, transition
  - CSS로 애니메이션을 제작할 때 사용합니다.
- [BEM 네이밍](https://medium.com/witinweb/css-방법론-1-bem-block-element-modifier-1c03034e65a1)
  - 웹사이트의 구조가 복잡할 때 유용하게 사용할 수 있는 네이밍 방법들 중 하나입니다.

## JavaScript
- 호이스팅(hoisting)
- **[var vs const vs let](https://medium.com/@yeon22/javascript-var-let-const의-차이점-9fab5c264c9c)**
  - 현재는 var보다 const & let의 사용이 권장됩니다.
- **[this](https://nykim.work/71)**
  - C++, Java의 this, Python의 self와 비슷한 용도로 사용하지만, 이 키워드를 어디에서 사용하느냐(Global, function 키워드 안쪽, arrow function 안쪽, ...)에 따라 **의미가 달라지기 때문에** 매우 주의해서 사용해야 합니다.
- [Prototype-based OOP](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - JavaScript에서 함수는 우리가 아는 '함수'뿐만 아니라 클래스 정의에도 사용할 수 있는 만능의 존재입니다.
  - JavaScript & TypeScript의 class 키워드는 내부적으로는 function + prototype와 동일합니다.
- [function vs 화살표 함수](https://velog.io/@modolee/javascript-function-vs-arrow-function)
  - 위의 **this**와 깊게 연관되어 있습니다.
- Closure
- Module
- setTimeout, setInterval, requestAnimationFrame
- **[3가지 비동기 처리 방법 (callback, Promise, async/await)](https://velog.io/@change/JavaScript-asyncawait에-대해서)**
  - 서버와의 통신(AJAX), 애니메이션, Webpack의 code splitting, React의 lazy component 등에서 JavaScript의 비동기 처리를 이용합니다.
- window 객체, document 객체

## Website
- **[반응형 웹 (responsive web)](https://www.nextree.co.kr/p8622/)**
- 웹 접근성(Web accessibility)
- AJAX

# Useful links
- [W3Schools](https://www.w3schools.com/): 많은 예시 코드들이 있으며 그것들을 직접 실행해 볼 수 있어 유용합니다.
- [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide): Mozilla에서 제작한 웹 관련 가이드로 웹의 각 기능에 대해 다양하게 설명하여 유용합니다.
- [Can I use](https://caniuse.com/): 웹 브라우저의 종류 및 버전마다 지원하는 기능들이 서로 다릅니다. 내가 사용하고자 하는 HTML, CSS, JS의 기능이 특정 웹 브라우저에서 지원되는지 이 사이트에서 확인할 수 있습니다.
