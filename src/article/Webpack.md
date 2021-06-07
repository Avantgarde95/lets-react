# About
- [Homepage](https://webpack.js.org/)
- 웹사이트가 많은 코드와 리소스 파일들로 이루어져 있다고 합시다. 이들의 의존성을 분석하여 웹 브라우저 등에서 사용할 수 있도록 '한 세트'로 묶어주는 (i.e '번들링', '패키징') 라이브러리입니다.
  ```
  A.js ----+
  B.js     |
  C.ts     |
           |
  M.css    +-------> bundle.js, bundle.css, resources
  N.css    |
           |
  X.png    |
  Y.jpg ---+
  ```
