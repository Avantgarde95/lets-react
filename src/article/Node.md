# About
- JavaScript로 서버 등 어플리케이션을 만들기 위해 사용하는 JavaScript 런타임입니다.
- Python, JDK와 비슷하게 생각하면 됩니다.

# npm
- Node.js는 [npm](https://www.npmjs.com/)이라는 패키지 관리자를 제공합니다. Python의 pip, Java의 maven과 비슷하게 생각하면 됩니다.
- `package.json` 파일을 이용하여 프로젝트의 정보 및 사용할 라이브러리들을 지정해줄 수가 있습니다.
- `npm install`을 실행하면 `package.json`을 읽어서 라이브러리들을 `node_modules` 아래에 설치해줍니다.
    - `package-lock.json`이라는 파일이 자동 생성되며, 이는 사용자가 수정할 필요가 없습니다.
    - `node_modules`의 크기는 일반적으로 **매우** 크기 때문에 git 저장소에 올리지 않는 것을 권장합니다.
- `npm run ABC`를 실행하면 `package.json`의 `scripts`에서 `ABC`에 해당하는 스크립트를 실행해줍니다. 빌드 스크립트를 만들 때 유용하게 사용할 수 있습니다.
