# About
- JavaScript 기반의 언어로, JavaScript의 문법을 확장하여 C++, Java처럼 자료형(type)을 명시하고 체크하여 견고한 프로그래밍이 가능하도록 한 언어입니다.
    ```tsx
    // JavaScript
    function addInts(x, y) {
        return x + y;
    }

    // TypeScript
    function addInts(x: number, y: number): number {
        return x + y;
    }
    ```
- 웹 브라우저는 일반적으로 JavaScript만을 지원하기 때문에, TypeScript 컴파일러(tsc)를 이용하여 JavaScript로 변환하여 사용합니다.
- `tsconfig.json` 파일을 이용하여 컴파일러에 여러 옵션(ex. 어떤 버전의 JavaScript로 변환할 것인지)을 줄 수가 있습니다.
    ```jsonc
    {
        "compilerOptions": {
            "target": "es3", // Target JavaScript version.
            ...
        },
        ...
    }
    ```
