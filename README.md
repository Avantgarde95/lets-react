# Let's react

[React](https://reactjs.org/)로 작성한 React 개념서

### Requirements
- [Node.js](https://nodejs.org/)

### How to build
- 우선 `npm install`을 실행하여 라이브러리들을 설치하세요.
- `npm run debug`를 실행하면 개발 모드로 빌드됩니다.
  - 빌드 후에도 Webpack이 계속 켜져 있어 코드를 수정하고 저장하면 코드가 자동으로 빌드됩니다.
  - [Source map](https://joshua1988.github.io/webpack-guide/devtools/source-map.html)이 생성되어 만약 번들된 코드에서 예외가 발생하면 원본 코드에서 해당하는 줄을 찾을 수 있습니다.
- `npm run build`를 실행하면 배포 모드로 빌드됩니다.
  - 변수명을 단순하게 바꾸어 번들의 크기를 최소화합니다.
  - Source map을 생성하지 않습니다.
- 결과 파일들은 "docs" 폴더에 생성됩니다.

### How to run
- `npm run server`를 실행하면 테스트용 웹 서버가 실행됩니다.
- 웹 브라우저에서 <http://localhost:8080> 또는 터미널에 뜨는 주소로 접속하여 웹사이트를 실행할 수 있습니다.

### Troubleshooting
- 만약 코드를 수정하고 빌드했어도 웹사이트가 그대로이면 [새로고침 또는 강력 새로고침](https://imweb.me/faq?mode=view&category=29&category2=47&idx=71559)을 시도해 보세요.
