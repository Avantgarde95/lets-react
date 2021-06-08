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
- "webpack.config.js"를 사용하여 다양한 설정들을 할 수 있습니다.
  - Paths
  - [Loader](https://joshua1988.github.io/webpack-guide/concepts/loader.html)
  - [Plugin](https://joshua1988.github.io/webpack-guide/concepts/plugin.html)
  - [Source map](https://joshua1988.github.io/webpack-guide/devtools/source-map.html)
  - ...
- [gulp](https://gulpjs.com/), [rollup](https://rollupjs.org/guide/en/) 등의 대체제들도 존재합니다.

# Loader
- 각 파일들을 읽고 처리해주는 역할을 합니다.
  예컨대 TypeScript 파일들을 [ts-loader](https://www.npmjs.com/package/ts-loader)를 사용하여 처리하고자 한다면 아래와 같이 설정하면 됩니다.
    ```javascript
    module.exports = (env, argv) => {
        ...,
        module: {
            rules: {
                test: /\.tsx?$/, // .ts 또는 .tsx로 끝나는 파일 (JavaScript 정규 표현식 참고)
                use: 'ts-loader' // ts-loader 사용
            }
        }
    }
    ```

# Plugin
- Plugin을 사용하여 추가적인 동작들을 수행할 수 있습니다.
  예컨대 [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)을 사용하여 빌드 전에 이전 결과물들을 지우도록 할 수 있습니다.
    ```javascript
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');

    module.exports = (env, argv) => {
        ...,
        plugins: [
            new CleanWebpackPlugin()
        ]
    }
    ```

# Source map
- Webpack으로 코드를 빌드하고 나면 코드가 하나로 합쳐지고 설정에 따라 [난독화, 압축화](https://12bme.tistory.com/357)가 됩니다.
  만약 웹사이트에서 에러가 발생했을 때, 웹 브라우저가 원본 코드가 아닌 결과 코드의 줄을 알려주므로 디버깅이 힘들어집니다.
- Source map은 원본 코드와 결과 코드를 연결하여 디버깅 작업을 쉽게 해줍니다.
  Chrome 등의 웹 브라우저들은 source map을 인식하여, 만약 에러가 발생하면 원본 코드의 해당하는 줄을 자동으로 찾아줍니다.
- 별도의 파일(.map)로 생성할 수도 있으며, 결과 코드 내에 삽입할 수도 (inline) 있습니다.

# Example

이 웹사이트도 Webpack을 이용하여 제작하였습니다.
